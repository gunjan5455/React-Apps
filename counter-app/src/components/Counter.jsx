import { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleMClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handlePClick = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("You can't go above 10");
    }
  };
  return (
    <>
      <button onClick={handleMClick}>-</button>
      <p>Counter Value: {count}</p>
      <button onClick={handlePClick}>+</button>
    </>
  );
};
export default Counter;
// onClick={() =>{setCount(count-1)}}
