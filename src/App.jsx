import React from "react";

import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import Categories from "./components/Categories";
import Compaign from "./components/Compaign";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="Container">
      <Header></Header>
      <HeaderSection></HeaderSection>
      <Categories></Categories>
      <Compaign></Compaign>
      <Favorites></Favorites>
      <MobileApp></MobileApp>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}
