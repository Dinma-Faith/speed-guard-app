import { useState } from "react";

const SpeedGuard = () => {
  const [speed, setSpeed] = useState(""); // State for input value
  const [message, setMessage] = useState(""); // State for result message

  const handleCheckSpeed = () => {
    const speedValue = Number(speed.trim()); // Convert input to number after trimming

    // Validate input
    if (isNaN(speedValue) || speed.trim() === "") {
      console.log("Error: Please enter a valid number.");
      setMessage("Please enter a valid number.");
      return;
    }

    if (speedValue < 0) {
      console.log("Error: Speed cannot be negative.");
      setMessage("Speed cannot be negative.");
      return;
    }

    let resultMessage = "";

    if (speedValue <= 50) {
      resultMessage = "👍 You are within the speed limit.";
    } else {
      resultMessage = "⚠️ You are overspeeding! Slow down.";
    }

    console.log(`Speed Entered: ${speedValue}, Result: ${resultMessage}`);
    setMessage(resultMessage); // Update UI after logging in console
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Speed Check App</h2>
      <input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder="Enter your speed"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleCheckSpeed}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3 w-full"
      >
        Check Speed
      </button>
      {message ? <p className="mt-4 font-semibold">{message}</p> : null}

    </div>
  );
};

export default SpeedGuard;
