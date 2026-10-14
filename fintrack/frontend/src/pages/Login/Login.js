"use client";

import { useState } from "react";
import {
  Eye,
  Mail,
  Lock,
  Wallet,
  ChartNoAxesColumn,
  Target,
  PieChart,
  ShieldCheck,
  House,
  Utensils,
  Car,
  Clapperboard,
  Zap,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { setCookie } from "../../utils/genericUtils";
import TextField from "../../components/controls/TextField";
import Button from "../../components/controls/ButtonComponent";
import Checkbox from "../../components/controls/Checkbox";
import { loginUser } from "../../services/authService";
import { setUserSessionData } from "../../redux/slices/userSessionDataSlice";

import "./Login.scss";

const features = [
  {
    icon: ChartNoAxesColumn,
    title: "Track Expenses",
    description: "Monitor your spending\nin real time",
    type: "purple",
  },
  {
    icon: Target,
    title: "Set Budgets",
    description: "Stay on track with\nyour financial goals",
    type: "green",
  },
  {
    icon: PieChart,
    title: "Gain Insights",
    description: "Visualize your habits\nwith detailed reports",
    type: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Your Data is Safe",
    description: "Your information stays\nprivate and secure",
    type: "blue",
  },
];

const budgetItems = [
  {
    name: "Housing",
    amount: "$850 / $1,200",
    percentage: "71%",
    type: "purple",
    icon: House,
  },
  {
    name: "Food",
    amount: "$450 / $600",
    percentage: "75%",
    type: "green",
    icon: Utensils,
  },
  {
    name: "Transport",
    amount: "$200 / $400",
    percentage: "50%",
    type: "orange",
    icon: Car,
  },
];

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

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

    if (error) setError("");
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

      const result = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (result?.data?.accessToken) {
        setCookie("accessToken", result.data.accessToken, 1);
      }

      if (result?.data?.session) {
        dispatch(
          setUserSessionData({
            session: result.data.session,
          }),
        );

        setCookie("session", JSON.stringify(result.data.session), 1);
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
      <div className="login-container">
        {/* LEFT: BRAND AND MARKETING */}
        <section className="login-brand">
          <div className="login-brand__logo">
            <div className="login-brand__logo-icon">
              <Wallet size={34} strokeWidth={2.3} />
            </div>

            <div className="login-brand__logo-text">
              <strong>Expenses</strong>
              <span>Tracker</span>
            </div>
          </div>

          <div className="login-brand__intro">
            <span className="login-brand__eyebrow">
              YOUR MONEY, YOUR FUTURE
            </span>

            <h2>
              Start Your Journey
              <br />
              to <span>Smarter Finances</span>
            </h2>

            <p>
              Create your account and take control
              <br className="desktop-break" />
              of your expenses, savings, and financial goals.
            </p>
          </div>

          <div className="login-brand__features">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="login-feature" key={feature.title}>
                  <div
                    className={`login-feature__icon login-feature__icon--${feature.type}`}
                  >
                    <Icon size={25} strokeWidth={2.2} />
                  </div>

                  <div className="login-feature__content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="login-brand__quote">
            <span className="login-brand__quote-mark">“</span>
            <p>
              Small steps today,
              <br />
              bigger goals tomorrow.
            </p>
          </div>

          {/* CSS-built dashboard preview; no background image */}
          <div className="login-preview">
            <div className="login-preview__window">
              <div className="login-preview__topbar">
                <div className="login-preview__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>My Financial Dashboard</span>
              </div>

              <div className="login-preview__body">
                <aside className="login-preview__sidebar">
                  <div className="login-preview__side-logo">
                    <Wallet size={20} />
                  </div>
                  <House size={17} />
                  <ChartNoAxesColumn size={17} />
                  <PieChart size={17} />
                  <Wallet size={17} />
                  <Target size={17} />
                </aside>

                <div className="login-preview__content">
                  <h3>Dashboard</h3>

                  <div className="login-preview__stats">
                    <div className="login-preview__stat">
                      <div className="login-preview__stat-icon purple">
                        <Wallet size={17} />
                      </div>
                      <span>Total Expenses</span>
                      <strong>$2,350.45</strong>
                      <small className="positive">
                        <TrendingUp size={12} /> 8.5%
                      </small>
                    </div>

                    <div className="login-preview__stat">
                      <div className="login-preview__stat-icon green">
                        <ArrowDownRight size={18} />
                      </div>
                      <span>Total Income</span>
                      <strong>$4,200.00</strong>
                      <small className="positive">
                        <TrendingUp size={12} /> 10.2%
                      </small>
                    </div>
                  </div>

                  <div className="login-preview__chart-card">
                    <h4>Expenses Overview</h4>

                    <div className="login-preview__chart-layout">
                      <div className="login-preview__donut">
                        <div>
                          <strong>$2,350</strong>
                          <span>Total</span>
                        </div>
                      </div>

                      <div className="login-preview__legend">
                        {[
                          ["Housing", "purple"],
                          ["Food", "green"],
                          ["Transport", "blue"],
                          ["Entertainment", "orange"],
                          ["Utilities", "yellow"],
                          ["Others", "gray"],
                        ].map(([label, color]) => (
                          <div key={label}>
                            <span
                              className={`login-preview__legend-dot ${color}`}
                            />
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="login-preview__budgets">
                    <h4>Monthly Budgets</h4>

                    {budgetItems.map((budget) => {
                      const Icon = budget.icon;

                      return (
                        <div
                          className="login-preview__budget"
                          key={budget.name}
                        >
                          <div
                            className={`login-preview__budget-icon ${budget.type}`}
                          >
                            <Icon size={16} />
                          </div>

                          <div className="login-preview__budget-info">
                            <strong>{budget.name}</strong>
                            <span>{budget.amount}</span>
                          </div>

                          <div className="login-preview__progress">
                            <span
                              className={budget.type}
                              style={{ width: budget.percentage }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT: LOGIN FORM */}
        <section className="login-right">
          <div className="login-card">
            <div className="login-card__heading">
              <h1>Welcome Back!</h1>

              <p>
                Log in to your Expenses Tracker account
                <br className="desktop-break" />
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
                  <Eye size={22} />
                </button>
              </div>

              <div className="login-form__options-row">
                <div className="login-form__options">
                  <Checkbox
                    id="remember-me"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                </div>

                <div className="login-form__forgot">
                  <button
                    type="button"
                    onClick={() => router.push("/forgot-password")}
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>

              {error && (
                <div className="login-form__error" role="alert">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                label={loading ? "Logging in..." : "Log In"}
                variant="primary"
                disabled={loading}
                sx={{ width: "100%" }}
              />
            </form>

            <div className="signup-prompt">
              <span>Don&apos;t have an account?</span>

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
