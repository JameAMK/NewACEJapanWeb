import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import ServiceCard from "../ServiceCard";
import { AnimatePresence, motion } from "framer-motion";
export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
    },
  };
};
const Service = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[linear-gradient(to_bottom,#f2f2f2_55%,#fff_45%)] flex justify-center items-center md:my-10 -mt-30 md:mt-20  pb-20 md:pb-40">
        <div className="container  flex flex-col justify-center items-center text-center md:mt-2 lg:mt-5">
          <div className="max-w-[690px] w-full px-5">
            <div className="flex justify-center items-center pt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  whileInView="show"
                  exit="exit"
                  className="bg-white w-fit flex justify-center items-center px-2 ">
                  <LiaEditSolid className="text-color-3 md:text-2xl" />
                  <p className="text-color-1 font-semibold pl-2">
                    Our Services
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="md:my-3 my-1">
              <motion.p
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="show"
                className="text-color-1 text-[30px] md:text-[45px] font-extrabold">
                Our Services
              </motion.p>
            </div>
            <div>
              <motion.p
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="text-color-1 pb-10">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </motion.p>
            </div>
          </div>
          <div className="w-full px-10">
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
