const root = ReactDOM.createRoot(document.getElementById("vdom"));

function renderReactElements() {
  const heading = React.createElement(
    "h1",
    null,
    "Timer app using - virtual DOM"
  );

  const input = React.createElement("input", { placeholder: "enter username" });
  const button = React.createElement(
    "button",
    { onClick: renderReactElements },
    "Update Time"
  );
  const time = React.createElement("p", null, new Date().toTimeString());

  root.render([heading, input, button, time]);
}

renderReactElements();
