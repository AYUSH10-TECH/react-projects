{/* <div id = 'parent'>
    <div id = 'child'>
        <h1> Nested h1</h1>
        <h1> Nested h1 yo </h1>
    </div>
</div> */}

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id: 'first'}, "Nested h1"),
    React.createElement("h1", {id: 'second'}, "Nested h1 yo"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id: 'first'}, "Nested h1"),
    React.createElement("h1", {id: 'second'}, "Nested h1 yo"),
  ])]
);



const heading = React.createElement('h1', {id: 'heading', childre: 'hey'}, 'hello react yo');
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)             