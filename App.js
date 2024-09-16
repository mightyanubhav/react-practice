import React from "react";
import ReactDOM from "react-dom";

const jsxInfo = (
    <>
        <h1> Hello brother </h1>
        <h2> Again Hello </h2>
    </>
    
)
const ReactComponent = () =>{
    return (
        <>
        <h1> Hello brother </h1>
        <h2> Again Hello </h2>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxInfo);