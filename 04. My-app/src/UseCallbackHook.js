import React, { useCallback, useState } from "react";

let refs = [];
const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  //   const Increase = () => {
  //     setCount((c) => c + 1);
  //   };

  const Increase = useCallback(() => {
    // setCount((c) => c + 1);
    setCount(count + 1);
  }, [count < 2 ? 0 : count]);

  refs.push(Increase);
  if (refs.length === 3) {
    console.log(refs);
    console.log(refs[0] === refs[1]);
    console.log(refs[0] === refs[2]);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={Increase}>Increase</button>
    </div>
  );
};

export default UseCallbackHook;
