"use strict";

console.log("App.js is running");

// JSX - Javascript XML
var app_object = {
  title: "Just another React app",
  subtitle: "This is really cool ig",
  options: ["One", "Two"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app_object.title
  ),
  app_object.subtitle && React.createElement(
    "p",
    null,
    app_object.subtitle
  ),
  app_object.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options: ",
    app_object.options[0]
  ) : React.createElement(
    "p",
    null,
    "No options"
  )
);

var user = {
  age: 10,
  location: "Mty, MX"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location,
      "."
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
