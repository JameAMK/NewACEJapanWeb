import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Services = [
  {
    img: "serviceImg/Development.svg",
    title: "Software Development",
    text: "Read More",
    delay: 0.2,
  },
  {
    img: "serviceImg/Development.svg",
    title: "Software Development",
    text: "Read More",
    delay: 0.3,
  },
  {
    img: "serviceImg/Development.svg",
    title: "Software Development",
    text: "Read More",
    delay: 0.4,
  },
  {
    img: "serviceImg/Development.svg",
    title: "Software Development",
    text: "Read More",
    delay: 0.5,
  },
  {
    img: "serviceImg/Development.svg",
    title: "Software Development",
    text: "Read More",
    delay: 0.6,
  },
  {
    img: "serviceImg/Development.svg",
    title: "Software Development",
    text: "Read More",
    delay: 0.7,
  },
];
const ServiceCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 ">
        {Services.map((item, index) => {
          return (
            <motion.div
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView="show">
              <div
                className="bg-blue w-full hover:scale-110 cursor-pointer hover:bg-red transition-all duration-300"
                key={index}>
                <div
                  className="flex flex-col items-start md:pl-8 lg:pl-5 lg:pt-6
               xl:pl-8 pl-5 pt-8  md:pt-10 ">
                  <img src={item.img} alt="" />
                  <div className="text-white text-left xl:my-4 lg:my-2">
                    <p className="md:text-[30px] text-[24px] font-bold">
                      {item.title}
                    </p>
                    <p className="md:py-1 py-2">
                      Sagittis Nulla facilisi. In sed pretium metus. Proin
                      pretium Turna sit amet tincidunt.
                    </p>
                  </div>
                  <a href="">
                    <p className="md:text-lg text-sm pb-5 font-semibold md:pb-8 xl:pb-10 lg:pb-5 text-white">
                      {item.text}
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceCard;
