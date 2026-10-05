"use client";

import { useState } from "react";
import { Eye, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

import TextField from "../../components/controls/TextField/TextField";
import Button from "../../components/controls/Button/Button";
import Checkbox from "../../components/controls/Checkbox/Checkbox";

import { loginUser } from "../../services/authService";

import "./Login.scss";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      /*
       * Expected backend response:
       *
       * {
       *   accessToken: "...",
       *   refreshToken: "...",
       *   user: {
       *     id: "...",
       *     name: "...",
       *     email: "..."
       *   }
       * }
       */

      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      router.push("/app/dashboard");
    } catch (err) {
      setError(err.message || "Unable to login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div
        className="login-container"
        style={{
          "--login-background": "url('/login-background.jpeg')",
        }}
      >
        <section className="login-right">
          <div className="login-card">
            <div className="login-card__heading">
              <h1>Welcome Back!</h1>

              <p>
                Log in to your Expenses Tracker account
                <br />
                to continue your financial journey.
              </p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <TextField
                label="Email address"
                placeholder="Enter your email"
                type="email"
                icon={<Mail />}
                value={formData.email}
                onChange={(event) => handleChange("email", event.target.value)}
                required
              />

              <div className="password-field">
                <TextField
                  label="Password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  icon={<Lock />}
                  value={formData.password}
                  onChange={(event) =>
                    handleChange("password", event.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-eye"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <Eye size={23} />
                </button>
              </div>

              <div className="login-form__forgot">
                <button type="button">Forgot your password?</button>
              </div>

              <div className="login-form__options">
                <Checkbox
                  id="remember-me"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
              </div>

              {error && <div className="login-form__error">{error}</div>}

              <Button
                type="submit"
                label={loading ? "Logging in..." : "Log In"}
                variant="primary"
                disabled={loading}
              />
            </form>

            <div className="signup-prompt">
              <span>Don't have an account?</span>

              <button type="button" onClick={() => router.push("/signup")}>
                Sign up
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
