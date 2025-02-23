import React from "react";
import Banner from "../components/Banner";
import ContactDetails from "../components/ContactSection/ContactDetails";
import GetInTouch from "../components/ContactSection/GetInTouch";
import Footer from "../components/HomeSection/Footer";

const ContactUs = () => {
  return (
    <>
      <Banner text="Contact Us" />
      <ContactDetails />
      <GetInTouch />
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

export default ContactUs;
