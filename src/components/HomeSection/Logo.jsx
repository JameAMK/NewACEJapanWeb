import React from "react";
import { motion } from "framer-motion";
import ContactCard from "../ContactComponent";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

const Logo = () => {
  return (
    <>
      <motion.div className="container px-15 xl:px-0 mx-auto md:items-center mt-5 md:flex md:justify-between flex justify-between items-center ">
        <motion.div className=" w-[180px]">
          <div className="w-full overflow-hidden">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              src="Logo.jpg"
              alt="ACEJapan-logo"
              className=" w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="md:flex gap-10 hidden w-full justify-end overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <ContactCard
              icon={<CiMail className="text-white text-2xl font-bold" />}
              title="Mail Us"
              content="Info@acejapan.com"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <ContactCard
              icon={<LuPhone className="text-white text-2xl font-bold" />}
              title="Call Us"
              content="045-225-8284"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Logo;
