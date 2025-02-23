import React from "react";
import FutureSection from "../components/HomeSection/FutureSection";
import Service from "../components/HomeSection/Service";
import About from "../components/HomeSection/About";
import Business from "../components/HomeSection/Business";
import PartnerShip from "../components/HomeSection/PartnerShip";
import Program from "../components/HomeSection/Program";
import HeroSection from "../components/HomeSection/HeroSection";
import Footer from "../components/HomeSection/Footer";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      {/* Future Section */}
      <FutureSection />
      {/* Service */}
      <Service />
      {/* About Section */}
      <About />
      {/* Business Section */}
      <Business />
      {/* Partners Section */}
      <PartnerShip />
      {/* Program & training Section */}
      <Program />
      <Footer logoImg="logo.svg">
        <img src="logo.svg" alt="logoImg" />
      </Footer>
    </>
  );
};

export default Home;
