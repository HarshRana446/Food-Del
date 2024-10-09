import React, { useState } from "react";
import Header from "../../componants/Header/Header.jsx";
import ExploreMenu from "../../componants/Explore-Menu/ExploreMenu.jsx";
import "./Home.css";
import FoodDisplay from "../../componants/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../componants/AppDownload/AppDownload.jsx";

const Home = () => {
  const [category, setCategory] = useState(["All"]);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
