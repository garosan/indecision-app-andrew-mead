"use strict";

console.log("App.js is running");

// JSX - Javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Garo San"
  ),
  React.createElement(
    "p",
    null,
    "Age: 33"
  ),
  React.createElement(
    "p",
    null,
    "Location: Mty, MX."
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
