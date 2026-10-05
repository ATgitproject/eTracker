"use client";

import React from "react";

import { Step, StepLabel, Stepper } from "@mui/material";

import "./StepsComponent.scss";

const StepsComponent = ({ steps = [], currentStep = 1 }) => {
  return (
    <Stepper
      className="steps-component"
      activeStep={currentStep - 1}
      alternativeLabel
    >
      {steps.map((step) => (
        <Step key={step.id}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepsComponent;
