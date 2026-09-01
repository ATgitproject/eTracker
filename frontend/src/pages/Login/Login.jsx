import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout.jsx';
import OtpInput from '../../components/OtpInput/OtpInput.jsx';
import { Icon } from '../../config/iconRegistry.jsx';
import { authApi } from '../../services/api';
import { useAuthStore } from '../../store/useAuthStore';
import './Login.scss';

/**
 * Login
 * ------------------------------------------------------------------
 * Two-step OTP flow:
 *   Step 1 "identifier" - user enters email OR mobile number.
 *   Step 2 "otp"         - 6-digit code sent to that channel; on
 *                           verify, useAuthStore.login() stores the
 *                           JWT + user and the router redirects in.
 * No password is ever asked for, per the "login should be with OTP"
 * requirement.
 * ------------------------------------------------------------------
 */
export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [step, setStep] = useState('identifier');
  const [identifier, setIdentifier] = useState('');
  const [channel, setChannel] = useState(null);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (!identifier.trim()) {
      setError('Enter your email or mobile number');
      return;
    }
    setLoading(true);
    try {
      const { data } = await authApi.requestOtp(identifier.trim(), 'login');
      setChannel(data.channel);
      setStep('otp');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not send OTP. Please try again.');
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
      const { data } = await authApi.verifyOtp(identifier.trim(), code, 'login');
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
      {step === 'identifier' ? (
        <form className="login-form" onSubmit={handleRequestOtp}>
          <h1>Log in to FinTrack</h1>
          <p className="login-form__subtitle">Enter your email or mobile number to receive a one-time code.</p>

          <label htmlFor="identifier">Email or Mobile Number</label>
          <div className="login-form__input-wrap">
            <Icon name="mail" size={17} />
            <input
              id="identifier"
              type="text"
              placeholder="you@example.com or +91 98765 43210"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              autoFocus
            />
          </div>

          {error && <p className="login-form__error">{error}</p>}

          <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
            {loading ? 'Sending code…' : 'Continue'}
          </button>

          <p className="login-form__footer">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleVerifyOtp}>
          <button type="button" className="login-form__back" onClick={() => setStep('identifier')}>
            <Icon name="arrow-left" size={16} /> Back
          </button>

          <h1>Enter verification code</h1>
          <p className="login-form__subtitle">
            We sent a 6-digit code via {channel === 'email' ? 'email' : 'SMS'} to <strong>{identifier}</strong>
          </p>

          <OtpInput length={6} value={code} onChange={setCode} />

          {error && <p className="login-form__error">{error}</p>}

          <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
            {loading ? 'Verifying…' : 'Verify & Log In'}
          </button>

          <button type="button" className="login-form__resend" onClick={handleRequestOtp} disabled={loading}>
            Resend code
          </button>
        </form>
      )}
    </AuthLayout>
  );
}
