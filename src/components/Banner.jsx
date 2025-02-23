import React from "react";
import Flex from "../shared/Flex";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Banner = ({ text }) => {
  return (
    <>
      <Flex className="bg-[url('/AboutUsPageImg/Background.png')] w-full h-[435px] bg-cover bg-center md:-mt-15 mt-4 flex justify-center items-center">
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-5xl text-white font-bold">
          {text}
        </motion.p>
      </Flex>
    </>
  );
};

export default Banner;
