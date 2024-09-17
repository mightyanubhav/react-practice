import { link } from "../utils/constant";

const RestCard = (props) =>{
    const { name , veg, rating } = props;
    const run = ()=>{
        <p>Hello brotehr</p>
    }
    return (
        <div className="card">
            <img src={link}></img>
            <h4 className="rest-title">{ name }</h4>
            <p> { veg? "Veg" : "NonVeg"} </p>
            <p>{rating}</p>
        </div>  
    );
  }

export default RestCard;
  