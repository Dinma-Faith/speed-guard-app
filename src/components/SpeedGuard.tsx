import { useState } from "react";
import SpeedInput from "./SpeedInput";
import SpeedResult from "./SpeedResult";

const SpeedGuard = () => {
  const [speed, setSpeed] = useState(""); // User speed input
  const [speedLimit, setSpeedLimit] = useState("50"); // Default limit
  const [message, setMessage] = useState(""); // Result message

  const handleCheckSpeed = () => {
    const speedValue = Number(speed);
    const limitValue = Number(speedLimit);

    if (!speed || isNaN(speedValue) || speed.trim() === "") {
      setMessage("Please enter a valid number.");
      return;
  }

  if (speedValue < 0) {
      setMessage("Speed can't be negative.");
      return;
  }

  if (!speedLimit || isNaN(limitValue) || speedLimit.trim() === "") {
      setMessage("Please enter a valid speed limit.");
      return;
  }

  if (speedValue <= limitValue) {
      setMessage("You are within the speed limit.");
  } else {
      setMessage("You are overspeeding! Slow down.");
  }
};

const resetForm = () => {
  setSpeed("");
  setSpeedLimit("50");
  setMessage("");
};

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Speed Check App</h2>
      <SpeedInput
        speed={speed}
        setSpeed={setSpeed}
        speedLimit={speedLimit}
        setSpeedLimit={setSpeedLimit}
        resetForm={resetForm}
      />
      <button
        onClick={handleCheckSpeed}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3 w-full">
        Check Speed
      </button>
      <SpeedResult message={message} />
    </div>
  );
};

export default SpeedGuard;
