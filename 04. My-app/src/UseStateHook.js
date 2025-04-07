import React, { useState } from "react";

const UseStateHook = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default UseStateHook;
