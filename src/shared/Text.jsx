import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Text = ({ children }) => {
  return (
    <>
      <motion.p
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        className="text-gray px-10 lg:w-[600px]">
        {children}
      </motion.p>
    </>
  );
};

export default Text;
