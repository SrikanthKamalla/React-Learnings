export default function Button() {
  return (
    <>
      <button onClick={Onclick}>Click Me </button>
      <p onMouseOver={omh}>on Mouse hover</p>
      <button onDoubleClick={handleDblClick}>Dbl Click Me </button>
    </>
  );
}
function Onclick() {
  console.log("Button was clicked");
}

function omh() {
  console.log("printing omh");
}

function handleDblClick() {
  console.log("You clicked double times");
}
