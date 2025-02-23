import React from "react";
import Banner from "../components/Banner";
import Quality from "../components/AboutUsSection/Quality";
import Establishment from "../components/AboutUsSection/Establishment";
import Achievement from "../components/AboutUsSection/Achievement";
import Directors from "../components/AboutUsSection/Directors";
import Footer from "../components/HomeSection/Footer";

const AboutUs = () => {
  return (
    <>
      <Banner text="About Us" />
      {/* <Timeline /> */}
      {/* Qulity */}
      <Quality />
      {/* Establish */}
      <Establishment />
      {/* Achievement */}
      <Achievement />
      {/* Director */}
      <Directors />
      <Footer
        className1="text-blue"
        className2="text-blue border-white"
        className3="text-blue">
        <div className="flex xl:justify-start xl:items-center items-start my-3 gap-3">
          <img src="AboutUsPageImg/snow.svg" alt="logoImg" />
          <p className="text-4xl text-white font-bold">
            BlueCo<span className="text-red">ll</span>ar
          </p>
        </div>
      </Footer>
    </>
  );
};

export default AboutUs;
