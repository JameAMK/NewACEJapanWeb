import React from "react";
import { easeInOut, motion } from "framer-motion";
import MiniHeader from "../../shared/miniHeader";
import { fadeInFL, fadeInFR, fadeUp } from "../../animations";

const FutureSection = () => {
  return (
    <>
      <div className="container mx-auto mt-15 min-h-[600px]">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-10 mx-5 lg:mx-0 lg:px-15 lg:gap-0 overflow-x-hidden">
          <div className="h-[580px] hidden md:block w-full  ">
            <motion.img
              variants={fadeInFL(0.3)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
              src="FutureImg.png"
              alt="FutureImg"
              className=" w-full h-full object-contain "
            />
          </div>
          {/* left side */}
          <div className=" max-w-[600px] md:ml-25 lg:pt-14">
            <div className="w-full overflow-hidden">
              <MiniHeader image="FutureVector.svg">
                Welcome BlueCollar
              </MiniHeader>
              <motion.div
                variants={fadeInFR(0.3)}
                initial="hidden"
                whileInView="show"
                className="mt-3  ">
                <motion.p
                  variants={fadeInFR(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="md:text-5xl text-color-1 font-extrabold md:py-3 lg:py-1 text-3xl lg:text-4xl">
                  We Provide Your Future
                </motion.p>
                <motion.p
                  variants={fadeInFR(0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="text-color-2 md:pt-5 pt-2 text-sm lg:pt-1">
                  Pellentesque vehicula eros neque, maximus mattis est sagittis
                  Nulla facilisi. In sed pretium metus. Proin pretium id urna
                  sit amet tincidunt. Interdum et malesuada.
                </motion.p>
                <motion.p
                  variants={fadeInFR(0.6)}
                  initial="hidden"
                  whileInView="show"
                  className="text-color-2 md:pt-5 pt-2 lg:pt-3">
                  In pulvinar viverra diam, nec rutrum mauris maximus non.
                  Aenean sed quam tristique, facilisis est ac, interdum velit.
                </motion.p>
              </motion.div>
              <div className="flex md:mt-10 mt-5 ">
                <motion.div
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-color-10 flex flex-col justify-center items-center w-[175px] md:py-12 py-5 ">
                  <img src="10.svg" alt="" className="md:w-[80px] w-[70px]" />
                  <p className="text-lg font-extrabold text-color-1 text-center md:pt-5 pt-3 lg:pt-1">
                    Years Of Experience
                  </p>
                </motion.div>
                <div className="md:mx-10 mx-3 my-auto ">
                  <ul className="text-color-2 md:space-y-5 space-y-2">
                    <motion.li
                      variants={fadeUp(0.2)}
                      initial="hidden"
                      whileInView="show">
                      - Sed varius ipsum lacus
                    </motion.li>
                    <motion.li
                      variants={fadeUp(0.3)}
                      initial="hidden"
                      whileInView="show">
                      - Sed varius ipsum lacus
                    </motion.li>
                    <motion.li
                      variants={fadeUp(0.4)}
                      initial="hidden"
                      whileInView="show">
                      - Sed varius ipsum lacus
                    </motion.li>
                    <motion.li
                      variants={fadeUp(0.5)}
                      initial="hidden"
                      whileInView="show">
                      - Sed varius ipsum lacus
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureSection;
