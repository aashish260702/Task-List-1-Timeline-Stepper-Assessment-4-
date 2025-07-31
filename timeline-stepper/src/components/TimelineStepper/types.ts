import React from "react";

export type StepStatus = "completed" | "current" | "pending";
export interface TimelineStepItem {
  key: string | number;
  title: string;
  description?: string;
  status: StepStatus;
  clickable?: boolean;
  disabled?: boolean;
}
export interface TimelineStepperProps {
  steps: TimelineStepItem[];
  currentStepKey: string | number;
  onStepClick?: (step: TimelineStepItem, idx: number) => void;
}
