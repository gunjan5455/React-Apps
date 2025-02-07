import { useRef, useState } from "react";

const Timer = () => {
  var timeRef = useRef(null);
  const [timer, setTimer] = useState(0);
  const handalStart = () => {
    timeRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };
  const handalStop = () => {
    clearInterval(timeRef.current);
  };
  const handalRestart = () => {
    setTimer(0);
    clearInterval(timeRef.current);
  };
  const formateTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(timer / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const hours = Math.floor(minutes / 60);
    const getHours = `0${hours}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };
  return (
    <div>
      <p>{formateTime(timer)}</p>
      <button className="bg-blue-400" onClick={handalStart}>
        Start
      </button>
      <button onClick={handalStop}>Stop</button>
      <button onClick={handalRestart}>Reset</button>
    </div>
  );
};
export default Timer;
