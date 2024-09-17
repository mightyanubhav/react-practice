import React from "react";
import ReactDOM from "react-dom/client";
import RestCard from "./components/restCard";
import config from "./utils/mockData";

import { useState } from "react";

const Wrapper = () => {

  const [count, setCount] = useState(config);

  const handleFilter = () => {
    let filterList = count.filter((x) => x.veg === true);
    setCount(filterList);
  };

  
  console.log(count);

  return (
      <div className="wrapper">
        <button
          className="butt"
          onClick={handleFilter}
        >
          press me for magic
        </button>
        {
          count.map((x) => (
            <RestCard key={x.name} name={x.name} veg={x.veg} rating={x.rating} />
          ))
        }
      </div>
   
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Wrapper />);

