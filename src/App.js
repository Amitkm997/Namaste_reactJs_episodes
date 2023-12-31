import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



//react js strictly say that don't use indexes as keys instead use unique key
//we have to use id while using map in reactjs
//not using keys(not recommended)<<index as key<<<<<<<<unique id(best practice)

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //this code will be replaced by jsx code you can see the output
root.render(<App />);
