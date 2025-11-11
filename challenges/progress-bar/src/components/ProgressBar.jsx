import React, { useEffect, useState } from "react";

export default function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress-bar-wrapper">
      <span
        className="progress-value"
        style={{ color: `${percent > 49 ? "white" : "black"}` }}
      >
        {percent.toFixed()}%
      </span>
      <div
        className="progress-motion"
        // style={{ width: `${percent}%` }} // Using width
        // style={{ transform: `translateX(${percent - 100}%)` }} // Using translateX
        style={{ transform: `scaleX(${percent / 100})` }} // Using scaleX
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      ></div>
    </div>
  );
}
