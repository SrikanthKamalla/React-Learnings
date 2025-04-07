import { useState } from "react";

export default function Car() {
  const [arr, setArr] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const addItem = () => {
    if (inputVal.trim() !== "") {
      setArr([...arr, inputVal]);
      setInputVal("");
    }
  };

  return (
    <>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>
    </>
  );
}
