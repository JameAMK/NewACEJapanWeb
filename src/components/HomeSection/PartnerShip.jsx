import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { PartnersImg } from "../../constants";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

const PartnerShip = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center xl:pt-30 pt-10">
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className=" flex justify-center items-center px-2 py-1 bg-color-10 w-fit">
          <LiaEditSolid className="text-color-3 text-2xl" />
          <p className="text-color-1 font-semibold pl-1">Our Focus</p>
        </motion.div>
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          className="text-color-1 text-2xl xl:text-5xl font-extrabold pt-3">
          Our Group Global Partners
        </motion.p>
        <div className="container xl:mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 mt-15 gap-3 xl:space-y-10 space-y-5 px-8 md:px-12">
          {PartnersImg.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:scale-110 cursor-pointer transition-all duration-200">
                <img src={item.image} alt="PartnersImg" className="grayscale" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PartnerShip;
