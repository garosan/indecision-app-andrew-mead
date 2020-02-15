console.log("App.js is running");

// JSX - Javascript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
  </div>
);

var templateTwo = (
  <div>
    <h1>Garo San</h1>
    <p>Age: 33</p>
    <p>Location: Mty, MX.</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
