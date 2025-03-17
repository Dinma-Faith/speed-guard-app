import { useEffect, useState } from "react";
import SpeedInput from "./SpeedInput";
import SpeedResult from "./SpeedResult";
import { motion } from "framer-motion";

const SpeedGuard = () => {
  const [speed, setSpeed] = useState(localStorage.getItem("speed") || "");  // Store last input
  const [speedLimit, setSpeedLimit] = useState(localStorage.getItem("speedLimit") || "50"); // Store last limit
  const [message, setMessage] = useState(""); // Result message

  // Fetch speed limit from an API (Mock API)
  useEffect(() => {
    fetch("https://mock-api.com/speedlimit")
      .then((res) => res.json())
      .then((data) => setSpeedLimit(data.limit.toString()))
      .catch(() => console.log("Using default limit"));
  }, []);

  // Save to local storage when updated
  useEffect(() => {
    localStorage.setItem("speed", speed);
    localStorage.setItem("speedLimit", speedLimit);
  }, [speed, speedLimit]);

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

const resetForm = () => {
  setSpeed("");
  setSpeedLimit("50");
  setMessage("");
  localStorage.removeItem("speed");
    localStorage.removeItem("speedLimit");
};

  return (
    <motion.div
      className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
      </motion.div>
  );
};

export default SpeedGuard;
