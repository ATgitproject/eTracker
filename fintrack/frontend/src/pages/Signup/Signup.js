"use client";

import React, { useState } from "react";
import { Eye, Mail, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";

import TextField from "@/components/controls/TextField";
import Button from "../../components/controls/ButtonComponent";
import Checkbox from "../../components/controls/Checkbox";
import StepsComponent from "../../components/controls/StepsComponent";
import { saveData } from "../../services/dataService";

import { signupUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import "./Signup.scss";
import { setCookie } from "../../utils/genericUtils";
import { setUserSessionData } from "../../redux/slices/userSessionDataSlice";

const signupSteps = [
  {
    id: "account",
    label: "Account",
  },
  {
    id: "financial",
    label: "Financial Setup",
  },
  {
    id: "review",
    label: "Review & Confirm",
  },
  {
    id: "complete",
    label: "All Set",
  },
];

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    monthlyIncome: "",
    spendingLimit: "",
    subscriptions: [],
    budget: {},
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateFormData = (field, value) => {
    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const goNext = () => {
    if (currentStep < signupSteps.length) {
      setCurrentStep((previousStep) => previousStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep((previousStep) => previousStep - 1);
    }
  };

  const handleFinancialSubmit = async () => {
    setError("");

    if (formData.monthlyIncome === "" || Number(formData.monthlyIncome) < 0) {
      setError("Please enter a valid monthly income.");
      return;
    }

    if (formData.spendingLimit === "" || Number(formData.spendingLimit) < 0) {
      setError("Please enter a valid spending limit.");
      return;
    }

    try {
      setLoading(true);

      await saveData({
        objName: "financial_profiles",

        fields: {
          monthly_income: Number(formData.monthlyIncome),
          spending_limit: Number(formData.spendingLimit),
        },
      });

      goNext();
    } catch (err) {
      setError(err.message || "Unable to save your financial profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccountSubmit = async () => {
    setError("");

    if (!formData.fullName.trim()) {
      setError("Full name is required.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email address is required.");
      return;
    }

    if (!formData.password) {
      setError("Password is required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const result = await signupUser({
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      if (result?.data?.accessToken) {
        setCookie("accessToken", result.data.accessToken);
      }

      if (result?.data?.session) {
        dispatch(
          setUserSessionData({
            session: result.data.session,
          }),
        );
        setCookie("session", JSON.stringify(result.data.session));
      }

      goNext();
    } catch (err) {
      setError(err.message || "Unable to create your account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signup-page">
      <div
        className="signup-container"
        style={{
          "--signup-background": "url('/login-background.jpeg')",
        }}
      >
        <section className="signup-right">
          <div className="signup-card">
            {/* Header */}
            <StepsComponent steps={signupSteps} currentStep={currentStep} />

            {/* =========================================
                STEP 1 - ACCOUNT
            ========================================= */}

            {currentStep === 1 && (
              <div className="signup-step">
                <div className="signup-card__heading">
                  <h1>Create Your Account</h1>

                  <p>Let's get started with your basic details.</p>
                </div>

                <div className="signup-form">
                  <TextField
                    label="Full Name"
                    placeholder="Enter your full name"
                    type="text"
                    icon={<User />}
                    required
                    value={formData.fullName}
                    onChange={(event) =>
                      updateFormData("fullName", event.target.value)
                    }
                  />

                  <div className="signup-field">
                    <TextField
                      label="Email Address"
                      placeholder="Enter your email address"
                      type="email"
                      icon={<Mail />}
                      required
                      value={formData.email}
                      onChange={(event) =>
                        updateFormData("email", event.target.value)
                      }
                    />
                  </div>

                  <div className="signup-password-field">
                    <TextField
                      label="Password"
                      placeholder="Create a password"
                      type="password"
                      icon={<Lock />}
                      required
                      value={formData.password}
                      onChange={(event) =>
                        updateFormData("password", event.target.value)
                      }
                    />

                    <button type="button" className="signup-password-eye">
                      <Eye size={21} />
                    </button>
                  </div>

                  <div className="signup-confirm-password">
                    <TextField
                      label="Confirm Password"
                      placeholder="Confirm your password"
                      type="password"
                      icon={<Lock />}
                      required
                      value={formData.confirmPassword}
                      onChange={(event) =>
                        updateFormData("confirmPassword", event.target.value)
                      }
                    />

                    <button type="button" className="signup-password-eye">
                      <Eye size={21} />
                    </button>
                  </div>

                  <div className="signup-terms">
                    <Checkbox
                      id="terms"
                      label={
                        <>
                          I agree to the{" "}
                          <button type="button">Terms of Service</button> and{" "}
                          <button type="button">Privacy Policy</button>
                        </>
                      }
                    />
                  </div>

                  {error && <div className="signup-form__error">{error}</div>}

                  <div className="signup-actions">
                    <Button
                      type="button"
                      className="signup-form__submit"
                      disabled={loading}
                      onClick={handleAccountSubmit}
                    >
                      {loading ? "Creating account..." : "Continue"}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================
                STEP 2 - FINANCIAL SETUP
            ========================================= */}

            {currentStep === 2 && (
              <div className="signup-step">
                <div className="signup-card__heading">
                  <h1>Let's Set Up Your Finances</h1>

                  <p>
                    Tell us about your income and spending so we can personalize
                    your experience.
                  </p>
                </div>

                <div className="financial-setup">
                  <div className="financial-card">
                    <h3>What's your total monthly income?</h3>

                    <p>Enter your expected monthly income (after tax).</p>

                    <TextField
                      placeholder="4,200.00"
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(event) =>
                        updateFormData("monthlyIncome", event.target.value)
                      }
                    />
                  </div>

                  <div className="financial-card">
                    <h3>How much do you want to spend?</h3>

                    <p>Set a monthly spending limit.</p>

                    <TextField
                      placeholder="2,500.00"
                      type="number"
                      value={formData.spendingLimit}
                      onChange={(event) =>
                        updateFormData("spendingLimit", event.target.value)
                      }
                    />
                  </div>
                </div>
                {error && <div className="signup-form__error">{error}</div>}
                <div className="signup-actions signup-actions--split">
                  <Button type="button" variant="secondary" onClick={goBack}>
                    Back
                  </Button>

                  <Button
                    type="button"
                    disabled={loading}
                    onClick={handleFinancialSubmit}
                  >
                    {loading ? "Saving..." : "Continue"}
                  </Button>
                </div>
              </div>
            )}

            {/* =========================================
                STEP 3 - REVIEW
            ========================================= */}

            {currentStep === 3 && (
              <div className="signup-step">
                <div className="signup-card__heading">
                  <h1>Review & Confirm</h1>

                  <p>
                    Please review your details before creating your account.
                  </p>
                </div>

                <div className="review-section">
                  <div className="review-card">
                    <h3>Account Details</h3>

                    <div className="review-row">
                      <span>Name</span>

                      <strong>{formData.fullName || "-"}</strong>
                    </div>

                    <div className="review-row">
                      <span>Email</span>

                      <strong>{formData.email || "-"}</strong>
                    </div>
                  </div>

                  <div className="review-card">
                    <h3>Monthly Finances</h3>

                    <div className="review-row">
                      <span>Monthly Income</span>

                      <strong>₹ {formData.monthlyIncome || "0"}</strong>
                    </div>

                    <div className="review-row">
                      <span>Spending Limit</span>

                      <strong>₹ {formData.spendingLimit || "0"}</strong>
                    </div>
                  </div>
                </div>

                <div className="signup-actions signup-actions--split">
                  <Button type="button" variant="secondary" onClick={goBack}>
                    Back
                  </Button>

                  <Button type="button" onClick={goNext}>
                    Create My Account
                  </Button>
                </div>
              </div>
            )}

            {/* =========================================
                STEP 4 - ALL SET
            ========================================= */}

            {currentStep === 4 && (
              <div className="signup-step signup-complete">
                <div className="signup-success-icon">✓</div>

                <h1>You're All Set! 🎉</h1>

                <p>
                  Your Expenses Tracker account is ready.
                  <br />
                  Let's start building better financial habits.
                </p>

                <div className="signup-summary">
                  <div>
                    <strong>₹ {formData.monthlyIncome || "0"}</strong>

                    <span>Monthly Income</span>
                  </div>

                  <div>
                    <strong>₹ {formData.spendingLimit || "0"}</strong>

                    <span>Spending Goal</span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => router.push("/app/dashboard")}
                >
                  Go to Dashboard
                </Button>
              </div>
            )}

            {/* Login */}
            {currentStep === 1 && (
              <div className="login-prompt">
                <span>Already have an account?</span>

                <button type="button" onClick={() => router.push("/login")}>
                  Log in
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
