//DOM Element
const heading1 = document.createElement("h1");
heading1.id = "title";
heading1.textContent = "Hello React";
const body = document.querySelector("body");
body.appendChild(heading1);

//React Element
const app = document.querySelector(".app");
const heading2 = React.createElement("h1", { id: "title" }, "Hello React2");
const root = ReactDOM.createRoot(app);
root.render(heading2);

console.dir(heading1);
console.log(heading2);
