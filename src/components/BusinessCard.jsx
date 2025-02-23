import React from "react";
import { BusinessCardData } from "../constants";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const BusinessCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-15 xl:mt-20 mt-10 px-5 ">
      {BusinessCardData.map((item, index) => (
        <motion.div
          variants={fadeUp(item.delay)}
          initial="hidden"
          whileInView="show"
          className="bg-white text-blue hover:text-white hover:scale-105 cursor-pointer hover:bg-red duration-300"
          key={index}>
          <img
            src={item.Businessimg}
            alt="Card Image"
            className="mt-8 mx-auto px-5"
          />
          <p className="xl:text-2xl text-xl  font-bold text-center xl:py-5 py-2">
            {item.Businesstitle}
          </p>

          <a href="">
            <p className="text-color-2 text-center xl:pb-5 pb-3 xl:text-lg">
              {item.text}
            </p>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default BusinessCard;
