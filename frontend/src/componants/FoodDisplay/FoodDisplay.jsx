import React, { useContext } from "react";
import { StoreContext } from "../../context/Storecontext";
import Fooditem from "../FoodItem/Fooditem";
import "./FoodDisplay.css";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=> {
          {console.log(category,item.category);}
          if(category==="All" || category==item.category) {
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></Fooditem>
          }
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
