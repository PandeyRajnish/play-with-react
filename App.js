const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, // attribute to element
  "Playing with React"
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
