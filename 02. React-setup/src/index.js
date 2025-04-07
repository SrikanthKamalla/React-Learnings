// initialize node  ->npm init
// install react, reactDom  ->npm i react react-dom
// install webpack(bundler) combine all js & css file into one file -> npx webpack || npm i -D webpack-cli
// create webpack.config.js file in project level for customize configurations and add configurations
// install webpack devloper server ->npx webpack server || npm i -D webpack-dev-server
// setup CSS webpack loader ->npm i -D style-loader css-loader
// install babel that conver xml to react element->npm i -D babel-loader @babel@core @babel/preset-env @babel/preset-react

import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./style.css";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

const heading = React.createElement(
  "h1",
  { id: "title", className: "container" },
  "Hello React"
);
//Rendering on the page
// root.render(heading);

const heading2 = React.createElement("h1", { id: "heading" }, "Heading");
const para = React.createElement("p", { id: "para" }, "some para");
const container1 = React.createElement(
  "div",
  { className: "container" },
  heading2,
  para
);
// root.render(container1);

const user = {
  firstName: "Srikanth",
};

const container2 = <h1 className="container">{user.firstName}</h1>;
root.render(container2);
