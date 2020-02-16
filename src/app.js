console.log("App.js is running");

// JSX - Javascript XML
const app_object = {
  title: "Just another React app",
  subtitle: "This is really cool ig",
  options: ["One", "Two"]
};
const template = (
  <div>
    <h1>{app_object.title}</h1>
    {app_object.subtitle && <p>{app_object.subtitle}</p>}
    {app_object.options.length > 0 ? (
      <p>Here are your options: {app_object.options[0]}</p>
    ) : (
      <p>No options</p>
    )}
  </div>
);

const user = {
  age: 10,
  location: "Mty, MX"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}.</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
