import React, { useEffect, useRef, useState } from "react";

const list = [];
const UseRefHook = () => {
  const [count, setCount] = useState(0);
  console.log("render");
  //   const user = {
  //     nam: "Srikanth",
  //     age: 22,
  //   };

  const reference = useRef({ name: "Srikanth", age: 22 });
  console.log(reference);

  //   list.push(user);
  list.push(reference);

  if (list.length === 2) {
    console.log(list);
    console.log(list[0] === list[1]);
  }

  const updateName = () => {
    reference.current.name = "srikanth Kamalla";
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>{" "}
      <br />
      <br />
      <button onClick={updateName}>UpdateName</button>
    </div>
  );
};

// use Cases
// export const UseRefHook = () => {
//   let element = useRef(null);
//   useEffect(() => {
//     console.log(element);
//     element.current.textContent = "Changed content";
//   });
//   return (
//     <div>
//       <h1 ref={element}>useRef hook</h1>
//     </div>
//   );
// };

export default UseRefHook;
