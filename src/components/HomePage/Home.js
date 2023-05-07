import React from "react";
import "./Home.scss";
import Megamenu from "./Megamenu";
import BannerSlider from "../Reuseable/BannerSlider";
import TopProduct from "./TopProducts";
import FlashSale from "./FlashSale";
import LapTop from "./LapTop";
import Footer from "../Reuseable/Footer";
const Home = () => {
  return (
    <div className="home-background">
     <div>
     <div className="home-parent">
        <div className="banner-section">
          <div>
            <Megamenu />
          </div>
          <div>
            <BannerSlider />
          </div>
        </div>
        <div>
          <TopProduct />
        </div>
        <div>
          <FlashSale />
        </div>
        <div>
          <LapTop/>
        </div>
       
      </div>
       <div>
          <Footer/>
        </div>
     </div>
    </div>
  );
};

export default Home;
