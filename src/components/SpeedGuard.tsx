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

    if (isNaN(speedValue) || isNaN(limitValue)) {
      setMessage("Please enter valid numbers.");
      return;
    }

    if (speedValue <= limitValue) {
      setMessage("You are within the speed limit.");
    } else {
      setMessage("You are overspeeding! Slow down.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Speed Check App</h2>
      <SpeedInput
        speed={speed}
        setSpeed={setSpeed}
        speedLimit={speedLimit}
        setSpeedLimit={setSpeedLimit}
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
