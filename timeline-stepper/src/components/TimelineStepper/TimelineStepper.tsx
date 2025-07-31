import React from "react";
import styles from "./TimelineStepper.module.scss";
import { TimelineStepperProps } from "./types";
import { FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

export const TimelineStepper: React.FC<TimelineStepperProps> = ({
  steps,
  currentStepKey,
  onStepClick,
}) => {
  const currentIdx = steps.findIndex((s) => s.key === currentStepKey);

  return (
    <div className={styles.timelineStepper} role="list">
      {steps.map((step, idx) => {
        let status = step.status;
        if (idx < currentIdx) status = "completed";
        else if (idx === currentIdx) status = "current";
        else status = "pending";

        return (
          <div
            className={styles.timelineStepRow}
            key={step.key}
            role="listitem"
            onClick={() => onStepClick && onStepClick(step, idx)}
            style={{ cursor: onStepClick ? "pointer" : "default" }}
          >
            <div className={styles.circleCol}>
              {status === "completed" ? (
                <FaCheckCircle className={styles.iconCompleted} aria-label="Completed" />
              ) : status === "current" ? (
                <FaHourglassHalf className={styles.iconCurrent} aria-label="In Progress" />
              ) : (
                <span className={styles.iconPending} aria-label="Pending" />
              )}

              {/* Vertical progress line */}
              {idx !== steps.length - 1 && (
                <div
                  className={`${styles.verticalBar} ${
                    idx < currentIdx ? styles.barActive : ""
                  }`}
                />
              )}
            </div>

            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>{step.title}</div>
              {step.description && (
                <div className={styles.stepDesc}>{step.description}</div>
              )}
              {status === "current" && (
                <div className={styles.progressText}>in progress...</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
