import { useDispatch, useSelector } from "react-redux";
import {
  doDecrement,
  doIncrement,
  doReset,
} from "../../store/actions/CounterAction";

const CounterApp = () => {
  const count = useSelector((store) => store.CounterReducer.count);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(doIncrement());
  };
  const decrementHandler = () => {
    dispatch(doDecrement());
  };
  const resetHandler = () => {
    dispatch(doReset());
  };
  return (
    <div style={{ margin: 20 }}>
      <h2>Counter App</h2>
      <button onClick={decrementHandler}>-</button>
      <span style={{ padding: 10 }}>{count}</span>
      <button onClick={incrementHandler}>+</button>
      <button style={{ margin: 12 }} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
export default CounterApp;