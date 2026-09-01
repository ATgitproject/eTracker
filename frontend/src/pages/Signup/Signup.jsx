import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout.jsx';
import DynamicForm, { validateFields } from '../../components/DynamicForm/DynamicForm.jsx';
import OtpInput from '../../components/OtpInput/OtpInput.jsx';
import { Icon } from '../../config/iconRegistry.jsx';
import formConfig from '../../config/signupFormConfig.json';
import { authApi } from '../../services/api';
import { useAuthStore } from '../../store/useAuthStore';
import '../Login/Login.scss'; // shares the same visual language as the login form

/**
 * Signup
 * ------------------------------------------------------------------
 * "Sign up login same as login but open a form with info that
 * should store name email mobile number": step 1 renders
 * signupFormConfig.json (name, email, mobileNumber - all required)
 * via the shared DynamicForm, then POSTs /auth/signup which creates
 * the user AND sends the first OTP, landing on the exact same
 * OTP-verify UI used by Login.
 * ------------------------------------------------------------------
 */
export default function Signup() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [step, setStep] = useState('details');
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const fieldErrors = validateFields(formConfig.fields, values);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    setError('');
    try {
      await authApi.signup(values);
      setStep('otp');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (code.length !== 6) {
      setError('Enter the 6-digit code');
      return;
    }
    setLoading(true);
    try {
      const { data } = await authApi.verifyOtp(values.email, code, 'signup');
      login({ user: data.user, token: data.token });
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid or expired code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      {step === 'details' ? (
        <form className="login-form" onSubmit={handleCreateAccount}>
          <h1>{formConfig.title}</h1>
          <p className="login-form__subtitle">Just a few details - we'll verify you with a one-time code, no password needed.</p>

          <DynamicForm fields={formConfig.fields} values={values} errors={errors} onChange={handleChange} />

          {error && <p className="login-form__error" style={{ marginTop: 16 }}>{error}</p>}

          <button type="submit" className="btn btn--primary btn--block" style={{ marginTop: 20 }} disabled={loading}>
            {loading ? 'Creating account…' : 'Create Account'}
          </button>

          <p className="login-form__footer">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleVerifyOtp}>
          <button type="button" className="login-form__back" onClick={() => setStep('details')}>
            <Icon name="arrow-left" size={16} /> Back
          </button>

          <h1>Verify your email</h1>
          <p className="login-form__subtitle">
            We sent a 6-digit code to <strong>{values.email}</strong>
          </p>

          <OtpInput length={6} value={code} onChange={setCode} />

          {error && <p className="login-form__error">{error}</p>}

          <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
            {loading ? 'Verifying…' : 'Verify & Continue'}
          </button>
        </form>
      )}
    </AuthLayout>
  );
}
