import React, { useState } from "react";
import { TimelineStepper } from "../components/TimelineStepper/TimelineStepper";
import { TimelineStepItem } from "../components/TimelineStepper/types";

const steps: TimelineStepItem[] = [
  {
    key: 1,
    title: "Account Setup",
    description: "Create your account and verify your email address",
    status: "completed",
    clickable: true,
  },
  {
    key: 2,
    title: "Payment Details",
    description: "Add your billing information",
    status: "completed",
    clickable: true,
  },
  {
    key: 3,
    title: "Order Confirmation",
    description: "Review and confirm your order",
    status: "current",
    clickable: true,
  },
  {
    key: 4,
    title: "Shipping",
    description: "Your order is being prepared",
    status: "pending",
    clickable: false,
    disabled: true,
  },
];

export default function DemoPage() {
  const [currentStepKey, setCurrentStepKey] = useState<string | number>(3);

  return (
    <div style={{ minHeight: "100vh", background: "#f2f5fb", padding: 40 }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>
        Vertical Timeline Stepper Demo
      </h1>
      <TimelineStepper
        steps={steps}
        currentStepKey={currentStepKey}
        onStepClick={(step) => {
          if (!step.disabled && step.clickable) {
            setCurrentStepKey(step.key);
          }
        }}
      />
    </div>
  );
}
