"use strict";

console.log("App.js is running");

// JSX - Javascript XML
var app_object = {
  title: "Just another React app",
  subtitle: "This is really cool ig"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app_object.title
  ),
  React.createElement(
    "p",
    null,
    app_object.subtitle
  )
);

var user = {
  name: "Garo San",
  age: 29,
  location: "Mty, MX"
};

var userName = "Mike";
var userAge = 26;
var userLocation = "Mty, MX";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location,
    "."
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
