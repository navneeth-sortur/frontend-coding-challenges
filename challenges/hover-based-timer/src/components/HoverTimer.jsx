import React, { useRef, useState, useEffect } from "react";

export default function HoverTimer() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const [timer, setTimer] = useState(0);
  const [speed, setSpeed] = useState(0);
  // speed = 0 (outside), 1 (outer), 5 (inner)

  useEffect(() => {
    if (speed === 0) return; // stop timer if outside

    const interval = setInterval(() => {
      setTimer(prev => prev + speed);
    }, 1000);

    return () => clearInterval(interval);
  }, [speed]);

  const handleMouseMove = e => {
    const outerBox = outerRef.current.getBoundingClientRect();
    const innerBox = innerRef.current.getBoundingClientRect();

    const x = e.clientX;
    const y = e.clientY;

    const insideOuter =
      x >= outerBox.left &&
      x <= outerBox.right &&
      y >= outerBox.top &&
      y <= outerBox.bottom;

    const insideInner =
      x >= innerBox.left &&
      x <= innerBox.right &&
      y >= innerBox.top &&
      y <= innerBox.bottom;

    if (!insideOuter) {
      setSpeed(0); // stop
    } else if (insideInner) {
      setSpeed(5);
    } else {
      setSpeed(1);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Timer: {timer}s</h2>

      <div
        ref={outerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpeed(0)}
        style={{
          width: 400,
          height: 400,
          border: "2px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          ref={innerRef}
          style={{
            width: 200,
            height: 200,
            border: "3px solid red",
            top: "200px",
            left: "200px"
          }}
        />
      </div>
    </div>
  );
}
