{
  /* <div id="parent">
  <div id="child">
    <h1>I am a h1 heading</h1>
    <h2>I am a h2 heading</h2>
  </div>
  <div id="child2">
    <h1>I am a h1 heading</h1>
    <h2>I am a h2 heading</h2>
  </div>
</div>; */
}

// creating an object
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 heading"),
    React.createElement("h2", {}, "I am a h2 heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 heading"),
    React.createElement("h2", {}, "I am a h2 heading"),
  ]),
]);

//JSX- because of this messy nesting structure JSX came into the picture.

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
