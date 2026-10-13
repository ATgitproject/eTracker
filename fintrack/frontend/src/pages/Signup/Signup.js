"use client";

import React, { useState } from "react";
import {
  Eye,
  Mail,
  Lock,
  User,
  Plus,
  X,
  Pencil,
  CheckCircle2,
  Home,
  Utensils,
  Bus,
  Gamepad2,
  Zap,
  MoreHorizontal,
  Wallet,
} from "lucide-react";
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
  { id: "account", label: "Account" },
  { id: "financial", label: "Financial Setup" },
  { id: "budget", label: "Budget & Subscriptions" },
  { id: "review", label: "Review & Confirm" },
  { id: "complete", label: "All Set" },
];
const defaultBudgetCategories = [
  { name: "Housing", icon: Home, amount: "1200" },
  { name: "Food", icon: Utensils, amount: "600" },
  { name: "Transport", icon: Bus, amount: "400" },
  { name: "Entertainment", icon: Gamepad2, amount: "400" },
  { name: "Utilities", icon: Zap, amount: "300" },
  { name: "Others", icon: MoreHorizontal, amount: "300" },
];

const defaultSubscriptions = [
  { name: "Netflix", amount: "15.49", cycle: "Monthly" },
  { name: "Spotify", amount: "9.99", cycle: "Monthly" },
  { name: "YouTube Premium", amount: "12.00", cycle: "Monthly" },
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
    subscriptions: defaultSubscriptions,
    budget: Object.fromEntries(
      defaultBudgetCategories.map((category) => [
        category.name,
        category.amount,
      ]),
    ),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const updateBudget = (name, amount) => {
    updateFormData("budget", {
      ...formData.budget,
      [name]: amount,
    });
  };

  const updateSubscription = (index, field, value) => {
    updateFormData(
      "subscriptions",
      formData.subscriptions.map((subscription, i) =>
        i === index ? { ...subscription, [field]: value } : subscription,
      ),
    );
  };

  const addSubscription = () => {
    updateFormData("subscriptions", [
      ...formData.subscriptions,
      { name: "", amount: "", cycle: "Monthly" },
    ]);
  };

  const removeSubscription = (index) => {
    updateFormData(
      "subscriptions",
      formData.subscriptions.filter((_, i) => i !== index),
    );
  };

  const budgetTotal = Object.values(formData.budget).reduce(
    (total, amount) => total + (Number(amount) || 0),
    0,
  );

  const subscriptionTotal = formData.subscriptions.reduce(
    (total, subscription) => total + (Number(subscription.amount) || 0),
    0,
  );

  const monthlySubscriptionTotal = formData.subscriptions.reduce(
    (total, subscription) => {
      const amount = Number(subscription.amount) || 0;

      const monthlyAmount = {
        Weekly: (amount * 52) / 12,
        Monthly: amount,
        Quarterly: amount / 3,
        Yearly: amount / 12,
      };

      return total + (monthlyAmount[subscription.cycle] ?? amount);
    },
    0,
  );

  const remainingBalance =
    (Number(formData.monthlyIncome) || 0) -
    (Number(formData.spendingLimit) || 0);

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

  const handleFinancialSubmit = () => {
    setError("");

    if (
      formData.monthlyIncome === "" ||
      !Number.isFinite(Number(formData.monthlyIncome)) ||
      Number(formData.monthlyIncome) < 0
    ) {
      setError("Please enter a valid monthly income.");
      return;
    }

    if (
      formData.spendingLimit === "" ||
      !Number.isFinite(Number(formData.spendingLimit)) ||
      Number(formData.spendingLimit) < 0
    ) {
      setError("Please enter a valid spending limit.");
      return;
    }

    goNext();
  };

  const handleFinalSubmit = async () => {
    setError("");

    try {
      setLoading(true);

      const result = await signupUser({
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
        monthlyIncome: Number(formData.monthlyIncome),
        spendingLimit: Number(formData.spendingLimit),
        budgets: formData.budget,
        subscriptions: formData.subscriptions.filter((subscription) =>
          subscription.name.trim(),
        ),
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
      setError(err.message || "Unable to complete signup.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccountSubmit = () => {
    setError("");

    if (!formData.fullName.trim()) {
      setError("Full name is required.");
      return;
    }

    if (!acceptTerms) {
      setError("Please accept the Terms of Service and Privacy Policy.");
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

    goNext();
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
            {/* Header / Stepper */}
            <StepsComponent steps={signupSteps} currentStep={currentStep} />

            {/* =========================================
              STEP 1 — ACCOUNT
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

                    <button
                      type="button"
                      className="signup-password-eye"
                      aria-label="Password visibility control"
                    >
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

                    <button
                      type="button"
                      className="signup-password-eye"
                      aria-label="Confirm password visibility control"
                    >
                      <Eye size={21} />
                    </button>
                  </div>

                  <div className="signup-terms">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onChange={(value) => {
                        setAcceptTerms(
                          typeof value === "boolean"
                            ? value
                            : value.target.checked,
                        );
                      }}
                      label={
                        <>
                          I agree to the{" "}
                          <button
                            type="button"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Terms of Service
                          </button>{" "}
                          and{" "}
                          <button
                            type="button"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Privacy Policy
                          </button>
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
                      sx={{ width: "100%" }}
                    >
                      {loading ? "Creating account..." : "Continue"}
                    </Button>
                  </div>
                </div>

                <div className="login-prompt">
                  <span>Already have an account?</span>
                  <button type="button" onClick={() => router.push("/login")}>
                    Log in
                  </button>
                </div>
              </div>
            )}

            {/* =========================================
              STEP 2 — FINANCIAL SETUP
          ========================================= */}
            {currentStep === 2 && (
              <div className="signup-step">
                <div className="signup-card__heading">
                  <h1>Financial Setup</h1>
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
              STEP 3 — BUDGET & SUBSCRIPTIONS
          ========================================= */}
            {currentStep === 3 && (
              <div className="signup-step">
                <div className="signup-card__heading">
                  <h1>Budget & Subscriptions</h1>
                  <p>
                    Set your monthly budget and add your recurring
                    subscriptions. You can modify these later.
                  </p>
                </div>

                {/* Monthly Budget */}
                <div className="financial-setup">
                  <div className="financial-card budget-setup">
                    <div className="setup-section-heading">
                      <div>
                        <h3>Set Up Your Monthly Budget</h3>
                        <p>
                          Allocate how much you want to spend in each category.
                        </p>
                      </div>

                      <strong>
                        ₹{" "}
                        {budgetTotal.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </strong>
                    </div>

                    <div className="budget-list">
                      {defaultBudgetCategories.map((category) => {
                        const Icon = category.icon;

                        return (
                          <div className="budget-row" key={category.name}>
                            <div className="budget-category">
                              <span className="budget-category-icon">
                                <Icon size={19} />
                              </span>
                              <span>{category.name}</span>
                            </div>

                            <div className="budget-amount">
                              <span>₹</span>
                              <input
                                type="number"
                                min="0"
                                value={formData.budget[category.name] ?? ""}
                                onChange={(event) =>
                                  updateBudget(
                                    category.name,
                                    event.target.value,
                                  )
                                }
                                aria-label={`${category.name} monthly budget`}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subscriptions */}
                  <div className="financial-card subscription-setup">
                    <div className="setup-section-heading">
                      <div>
                        <h3>Your Subscriptions</h3>
                        <p>
                          Add recurring subscriptions. You can skip these for
                          now.
                        </p>
                      </div>

                      <strong>
                        ₹ {monthlySubscriptionTotal.toFixed(2)}/mo
                      </strong>
                    </div>

                    <div className="subscription-list">
                      {formData.subscriptions.map((subscription, index) => (
                        <div className="subscription-row" key={index}>
                          <input
                            className="subscription-name"
                            type="text"
                            placeholder="Subscription name"
                            value={subscription.name}
                            onChange={(event) =>
                              updateSubscription(
                                index,
                                "name",
                                event.target.value,
                              )
                            }
                            aria-label="Subscription name"
                          />

                          <div className="subscription-amount">
                            <span>₹</span>
                            <input
                              type="number"
                              min="0"
                              placeholder="0.00"
                              value={subscription.amount}
                              onChange={(event) =>
                                updateSubscription(
                                  index,
                                  "amount",
                                  event.target.value,
                                )
                              }
                              aria-label="Subscription amount"
                            />
                          </div>

                          <select
                            value={subscription.cycle}
                            onChange={(event) =>
                              updateSubscription(
                                index,
                                "cycle",
                                event.target.value,
                              )
                            }
                            aria-label="Billing cycle"
                          >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Yearly">Yearly</option>
                          </select>

                          <button
                            type="button"
                            className="subscription-remove"
                            onClick={() => removeSubscription(index)}
                            aria-label={`Remove ${
                              subscription.name || "subscription"
                            }`}
                          >
                            <X size={17} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="subscription-add"
                      onClick={addSubscription}
                    >
                      <Plus size={17} />
                      Add Another Subscription
                    </button>
                  </div>
                </div>

                {error && <div className="signup-form__error">{error}</div>}

                <div className="signup-actions signup-actions--split">
                  <Button type="button" variant="secondary" onClick={goBack}>
                    Back
                  </Button>

                  <Button type="button" onClick={goNext}>
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* =========================================
              STEP 4 — REVIEW & CONFIRM
          ========================================= */}
            {currentStep === 4 && (
              <div className="signup-step">
                <div className="signup-card__heading">
                  <h1>Review & Confirm</h1>
                  <p>Please review your details before completing signup.</p>
                </div>

                <div className="review-section">
                  {/* Account Details */}
                  <div className="review-card">
                    <div className="review-card-heading">
                      <h3>Account Details</h3>
                      <button type="button" onClick={() => setCurrentStep(1)}>
                        <Pencil size={13} /> Edit
                      </button>
                    </div>

                    <div className="review-row">
                      <span>Name</span>
                      <strong>{formData.fullName || "-"}</strong>
                    </div>

                    <div className="review-row">
                      <span>Email</span>
                      <strong>{formData.email || "-"}</strong>
                    </div>
                  </div>

                  {/* Monthly Finances */}
                  <div className="review-card">
                    <div className="review-card-heading">
                      <h3>Monthly Finances</h3>
                      <button type="button" onClick={() => setCurrentStep(2)}>
                        <Pencil size={13} /> Edit
                      </button>
                    </div>

                    <div className="review-row">
                      <span>Monthly Income</span>
                      <strong>
                        ₹{" "}
                        {Number(formData.monthlyIncome || 0).toLocaleString(
                          "en-IN",
                        )}
                      </strong>
                    </div>

                    <div className="review-row">
                      <span>Spending Limit</span>
                      <strong>
                        ₹{" "}
                        {Number(formData.spendingLimit || 0).toLocaleString(
                          "en-IN",
                        )}
                      </strong>
                    </div>

                    <div className="review-row">
                      <span>Remaining After Spending Limit</span>
                      <strong>
                        ₹ {remainingBalance.toLocaleString("en-IN")}
                      </strong>
                    </div>
                  </div>

                  {/* Subscriptions Review */}
                  <div className="review-card">
                    <div className="review-card-heading">
                      <h3>Subscriptions</h3>
                      <button type="button" onClick={() => setCurrentStep(3)}>
                        <Pencil size={13} /> Edit
                      </button>
                    </div>

                    {formData.subscriptions
                      .filter((subscription) => subscription.name.trim())
                      .map((subscription, index) => (
                        <div className="review-row" key={index}>
                          <span>{subscription.name}</span>
                          <strong>
                            ₹ {Number(subscription.amount || 0).toFixed(2)} /{" "}
                            {subscription.cycle.toLowerCase()}
                          </strong>
                        </div>
                      ))}

                    <div className="review-row review-row--total">
                      <span>Monthly equivalent</span>
                      <strong>₹ {monthlySubscriptionTotal.toFixed(2)}</strong>
                    </div>
                  </div>

                  {/* Monthly Budget Review */}
                  <div className="review-card">
                    <div className="review-card-heading">
                      <h3>Monthly Budget</h3>
                      <button type="button" onClick={() => setCurrentStep(3)}>
                        <Pencil size={13} /> Edit
                      </button>
                    </div>

                    {defaultBudgetCategories.map((category) => (
                      <div className="review-row" key={category.name}>
                        <span>{category.name}</span>
                        <strong>
                          ₹{" "}
                          {Number(
                            formData.budget[category.name] || 0,
                          ).toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </div>
                    ))}

                    <div className="review-row review-row--total">
                      <span>Total Budget</span>
                      <strong>
                        ₹{" "}
                        {budgetTotal.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </strong>
                    </div>
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
                    onClick={handleFinalSubmit}
                  >
                    Create My Account
                  </Button>
                </div>
              </div>
            )}

            {/* =========================================
              STEP 5 — ALL SET
          ========================================= */}
            {currentStep === 5 && (
              <div className="signup-step signup-complete">
                <div className="signup-success-icon">✓</div>

                <h1>You're All Set! 🎉</h1>

                <p>
                  Your Expenses Tracker account is ready.
                  <br />
                  Let's start building better financial habits.
                </p>

                <div className="signup-summary signup-summary--three">
                  <div>
                    <Wallet size={23} />
                    <strong>
                      ₹{" "}
                      {Number(formData.monthlyIncome || 0).toLocaleString(
                        "en-IN",
                      )}
                    </strong>
                    <span>Monthly Income</span>
                  </div>

                  <div>
                    <CheckCircle2 size={23} />
                    <strong>
                      ₹{" "}
                      {Number(formData.spendingLimit || 0).toLocaleString(
                        "en-IN",
                      )}
                    </strong>
                    <span>Spending Goal</span>
                  </div>

                  <div>
                    <Wallet size={23} />
                    <strong>
                      ₹ {remainingBalance.toLocaleString("en-IN")}
                    </strong>
                    <span>Remaining</span>
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
