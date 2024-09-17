import React from "react";
import ReactDOM from "react-dom/client";
import RestCard from "./components/restCard";
import config from "./utils/mockData";

const Wrapper = () =>{
    const [first, second] = config;
    return (
       
        <div className="wrapper">
           {
               config.map((x, index) => <RestCard key={index} name = {x.name} veg = {x.veg} rating = {x.rating}/>)
           }
           <RestCard {...second} />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Wrapper />);