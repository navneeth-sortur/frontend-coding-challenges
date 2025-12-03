import { useState, useRef, useEffect } from "react";

const Stopwatch = () => {
  const [timeElapsed, setTimeElapsed] = useState(0); // total ms shown on screen
  const [isRunning, setIsRunning] = useState(false);

  const startRef = useRef<number | null>(null); // when the timer was last started

  useEffect(() => {
    if (!isRunning) return;

    startRef.current = performance.now() - timeElapsed;

    const id = setInterval(() => {
      setTimeElapsed(performance.now() - (startRef.current ?? 0));
    }, 10);

    return () => clearInterval(id);
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      "." +
      String(milliseconds).padStart(3, "0")
    );
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeElapsed(0);
    startRef.current = null;
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white/80 dark:bg-slate-900/60 rounded-2xl shadow-lg border-2 border-sky-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Stopwatch</h2>
      <div className="flex items-baseline justify-center mb-6">
        <div className="time text-4xl font-mono tracking-widest">
          {formatTime(timeElapsed)}
        </div>
      </div>
      <div className="controls flex gap-3 justify-center">
        <button
          onClick={isRunning ? handleStop : handleStart}
          className={`px-4 py-2 rounded-lg font-semibold shadow transition 
                ${
                  isRunning
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }
            `}
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg font-semibold bg-amber-500 hover:bg-yellow-500 shadow transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
