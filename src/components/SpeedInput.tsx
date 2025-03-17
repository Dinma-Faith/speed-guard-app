interface SpeedInputProps {
  speed: string;
  setSpeed: (value: string) => void;
  speedLimit: string;
  setSpeedLimit: (value: string) => void;
  resetForm: () => void;
}

const SpeedInput = ({ speed, setSpeed, speedLimit, setSpeedLimit,resetForm }: SpeedInputProps) => {
  return (
    <div>
      <label className="block font-semibold">Set Speed Limit (km/h):</label>
      <input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder="Enter your speed"
        className="border p-2 rounded w-full mb-3"
      />

      <label className="block font-semibold mt-2">Set Speed Limit (km/h):</label>
      <input
        type="number"
        value={speedLimit}
        onChange={(e) => setSpeedLimit(e.target.value)}
        placeholder="Set speed limit"
        className="border p-2 rounded w-full mb-3"
      />

<button
        onClick={resetForm}
        className="bg-gray-500 text-white px-4 py-2 rounded mt-3 w-full"
      >
        Reset
      </button>
    </div>
  );
};

export default SpeedInput;
