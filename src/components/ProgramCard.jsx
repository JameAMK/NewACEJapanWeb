import React from "react";
import { ProgramCardData } from "../constants";
import { motion, useAnimation, useInView } from "framer-motion";
const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const BusinessCard = () => {
  const containerRef = React.useRef();
  const inView = useInView(containerRef);
  const aniControl = useAnimation();

  React.useEffect(() => {
    inView ? aniControl.start("visible") : aniControl.start("hidden");
  }, [inView, aniControl]);

  return (
    <motion.div
      ref={containerRef}
      variants={variants}
      initial="hidden"
      animate={aniControl}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:mt-20 mt-10 px-5 pb-10">
      {ProgramCardData.map((item, index) => (
        <motion.div
          variants={listItem}
          className="bg-white text-blue hover:scale-105 transition-all duration-300 hover:text-white hover:bg-blue"
          key={index}>
          <img
            src={item.ProgramImg}
            alt="Card Image"
            className="mt-8 mx-auto px-5"
          />
          <p className="xl:text-2xl text-xl  font-bold text-center xl:py-5 py-2">
            {item.Programtilte}
          </p>

          <a href="">
            <p className="text-color-2 text-center xl:pb-5 pb-3 xl:text-lg">
              {item.text}
            </p>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BusinessCard;
