import React from "react";
import ReactDOM from "react-dom/client";
import RestCard from "./components/restCard";


const Wrapper = () =>{

    return (
        <div className="wrapper">
           <RestCard/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Wrapper />);