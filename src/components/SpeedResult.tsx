interface SpeedResultProps {
  message: string;
}

const SpeedResult = ({ message }: SpeedResultProps) => {
  return message ? <p className="mt-4 font-semibold">{message}</p> : null;
};

export default SpeedResult;
