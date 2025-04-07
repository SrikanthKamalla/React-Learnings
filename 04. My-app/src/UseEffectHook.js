import React, { useEffect, useState } from "react";

// const App = () => {
//   let [count, setCount] = useState(0);
//   let [age, setAge] = useState(10);

//   useEffect(() => {
//     console.log("cout useEffect ");
//   }, [count]);

//   useEffect(() => {
//     console.log("age useEffect ");
//   }, [age]);

//   useEffect(() => {
//     console.log("count or age useEffect ");
//   }, [count, age]);
//   return (
//     <div>
//       <h1>useEffect Hook</h1>
//       <p>Count: {count}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase Count
//       </button>
//       <p>Age: {age}</p>
//       <button
//         onClick={() => {
//           setAge(age + 1);
//         }}
//       >
//         Increase Age
//       </button>
//     </div>
//   );
// };

// CleanUp Function
export const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("inside cleanUp function");
    };
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <p>App Componet</p>
    </div>
  );
};

export default App;
