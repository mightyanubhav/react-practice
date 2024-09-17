const RestCard = (props) =>{
    const { name , veg, rating } = props;
    const run = ()=>{
        <p>Hello brotehr</p>
    }
    return (
        <div className="card">
            <img src="https://healux.in/wp-content/uploads/2020/11/ChickenBiryani.jpg"></img>
            <h4 className="rest-title">{ name }</h4>
            <p> { veg? "Veg" : "NonVeg"} </p>
            <p>{rating}</p>
        </div>  
    );
  }

export default RestCard;
  