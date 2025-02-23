import React from "react";
import { motion } from "framer-motion";
import { strongUp } from "../animations";

const IconComponent = ({ icon: Icon, delay }) => {
  return (
    <>
      <motion.div
        variants={strongUp(delay)}
        initial="hidden"
        whileInView="show"
        className="bg-white/10  p-5 rounded-full flex justify-center items-center">
        <Icon className="text-white" />
      </motion.div>
    </>
  );
};

export default IconComponent;
