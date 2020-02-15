console.log("App.js is running");

// JSX - Javascript XML
var app_object = {
  title: "Just another React app",
  subtitle: "This is really cool ig"
};
var template = (
  <div>
    <h1>{app_object.title}</h1>
    <p>{app_object.subtitle}</p>
  </div>
);

var user = {
  name: "Garo San",
  age: 29,
  location: "Mty, MX"
};

var userName = "Mike";
var userAge = 26;
var userLocation = "Mty, MX";
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}.</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
