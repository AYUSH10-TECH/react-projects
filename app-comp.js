import React  from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1 id = "heading" className="yo"> Namste Ji</h1>
)

const elem = <span> React Element</span>


// React Component
const Title = () => (
    <h1 className = "head" tabIndex= "5">
        {elem}
        We are learning React
    </h1>
)

// React Element
const title = (
    <h1 className = "head" tabIndex= "5">
        We are learning React
    </h1>
)


// Component Composition
const HeadingComponent = () => (
    <div id = "container">
         <Title />
         {Title()}
         {title}
         <h1 className = "heading"> Yo</h1>
    </div>
   
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)