import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";

const Counter = () => {
  const countValue = useSelector((state) => state.count.value);
  const distpatch = useDispatch();
  const handleIncrement = () => {
    distpatch(increment());
  };
  const handleDecrement = () => {
    distpatch(decrement());
  };
  return (
    <div>
      <h1 className="flex justify-center items-center m-4">
        COUNTER APPLICATION
      </h1>
      <button
        onClick={handleIncrement}
        className="mx-4 bg-blue-400 h-[3rem] w-[9rem]  text-white text-bold rounded-lg cursor-pointer"
      >
        INCREMENT
      </button>
      <p className="m-4 ">COUNT:{countValue}</p>
      <button
        onClick={handleDecrement}
        className="mx-4 bg-blue-400 h-[3rem] w-[9rem] text-white text-bold rounded-lg cursor-pointer"
      >
        DECREMENT
      </button>
    </div>
  );
};
export default Counter;
