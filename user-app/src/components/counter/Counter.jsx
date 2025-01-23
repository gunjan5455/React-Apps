import { useState } from "react";
import "./counter.css";
import Button from "react-bootstrap/Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleM = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleP = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  return (
    <div className="counter">
      <Button variant="success" className="btn" onClick={handleM}>
        -
      </Button>
      <div className="cont">Count: {count}</div>
      <Button variant="success" className="btn" onClick={handleP}>
        +
      </Button>
    </div>
  );
};
export default Counter;
