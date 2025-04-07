import { useState } from "react";
// function init() {
//   return Math.random();
// }
export default function Counter() {
  let [count, setCount] = useState(0);
  function incCount() {
    setCount(count + 1);
  }
  function resetCount() {
    setCount(0);
  }
  function decCount() {
    setCount(count - 1);
  }

  return (
    <>
      <p>Count = {count}</p>
      <button onClick={incCount}>Increase Counter</button>
      <button onClick={resetCount}>Reset Counter</button>
      <button onClick={decCount}>Decrease Counter</button>
    </>
  );
}
