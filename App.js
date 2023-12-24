import React from "react";
import ReactDOM from "react-dom";

//react element
const JsxHeading =()=>(
     <h1 id="heading">Namaste React using JSX</h1>
     );

let number=789867;
//react functional component
const Heading=()=>(
    <>
    {number}
    {JsxHeading()}
    <JsxHeading/>
    <h1>This is functional component</h1>
    </>
    
)
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //this code will be replaced by jsx code you can see the output
root.render(<Heading/>)

