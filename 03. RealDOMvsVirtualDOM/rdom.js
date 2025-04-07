const container = document.getElementById("rdom");

function renderHtml() {
  const heading = document.createElement("h1");
  heading.innerText = " Timer app using - Real DOM ";

  const input = document.createElement("input");
  input.placeholder = "enter username";

  const button = document.createElement("button");
  button.innerText = "Update Time";

  container.innerHTML = "";
  button.addEventListener("click", renderHtml);

  const time = document.createElement("p");
  time.innerText = new Date().toTimeString();

  container.append(heading, input, button, time);
}

renderHtml();
