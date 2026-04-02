import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./test/store";
import { increment } from "./test/counterSlice";

function App() {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default App
