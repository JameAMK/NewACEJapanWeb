import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import ProgramCard from "../ProgramCard";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

const Program = () => {
  return (
    <>
      <div className="w-full h-auto bg-color-10 mt-10">
        <div className="flex flex-col items-center pt-10 ">
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className=" flex justify-center items-center px-2 py-1 bg-color-30 w-fit">
            <LiaEditSolid className="text-color-3 text-2xl" />
            <p className="text-white font-semibold pl-1 ">Our Focus</p>
          </motion.div>
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-black text-2xl xl:text-5xl font-extrabold pt-3 text-center">
            Check Our Recent Program & Training
          </motion.p>
          <div className=" mx-auto">
            <ProgramCard />
            {/* <BusinessCard /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
