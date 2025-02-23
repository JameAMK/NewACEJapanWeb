import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import BusinessCard from "../BusinessCard";
import { motion } from "framer-motion";

import FocusIcon from "../../shared/FocusIcon";
import { fadeUp } from "../../animations";
const Business = () => {
  return (
    <>
      <div className="w-full md:mt-10 min-h-screen bg-color-30 mt-10">
        <div className="flex flex-col justify-center items-center xl:pt-15 pt-10 ">
          <FocusIcon text="Our Focus" />
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-white xl:text-5xl text-2xl font-extrabold pt-3 xl:pt-5">
            Group Business Focus
          </motion.p>
        </div>

        <div className="container mx-auto md:pb-10  pb-10">
          <BusinessCard />
        </div>
      </div>
    </>
  );
};

export default Business;
