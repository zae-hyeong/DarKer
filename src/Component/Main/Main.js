import React from "react";
import Banner from "./Banner";
import HomeProductList from "./HomeProductList";
import CategoryBG from "../UI/CategoryBG";

const Main = (props) => {
  return (
    <>
      <Banner />
      <CategoryBG bgColor="black">
        <HomeProductList />
      </CategoryBG>
      <CategoryBG bgColor="#4D4D4D">
        <HomeProductList />
      </CategoryBG>
    </>
  );
};

export default Main;
