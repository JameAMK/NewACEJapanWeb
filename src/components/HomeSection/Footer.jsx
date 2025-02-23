import React from "react";
import ContactCard from "../ContactComponent";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import IconComponent from "../IconComponent";
import { easeInOut, motion } from "framer-motion";
import { cn } from "../../utils";
import { bounceRotate, fadeInFR, fadeUp } from "../../animations";

const Footer = ({ className1, children, className2, className3 }) => {
  return (
    <>
      <div className="w-full h-[350px] bg-color-20 xl:mt-0 mt-5 px-4">
        <div className="container mx-auto h-full grid grid-cols-1 xl:grid-cols-2 overflow-x-hidden ">
          <div className="text-left">
            <motion.p
              variants={bounceRotate}
              initial="start"
              whileInView="end"
              className={cn(
                "md:text-5xl text-2xl text-white font-extrabold xl:mt-30 mt-5",
                className1
              )}>
              Subscribe Our Newsletter
            </motion.p>
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              className={cn("mt-5 text-white md:pr-60", className1)}>
              <span className="font-bold ">
                Stay in touch with us to get the latest news.
              </span>
              Maximus mattis est facilisi. In sed pretium Proin pretium id urna
              sit amet tincidunt.
            </motion.p>
          </div>
          <motion.div
            variants={fadeInFR(0.3)}
            initial="hidden"
            whileInView="show"
            className="flex xl:items-center xl:translate-x-30">
            <input
              type="text"
              className={cn(
                "border md:w-[330px] w-[200px] h-[50px] md:h-[65px] text-white p-3 md:mt-4 font-bold",
                className2
              )}
              placeholder="Your mail address here"
            />
            <button
              className={cn(
                "md:h-[65px] md:w-[190px] w-[120px] h-[50px] bg-white text-black md:mt-4",
                className3
              )}>
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>

      <div className="w-full   h-auto bg-color-30 pt-10">
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className=" container mx-auto grid grid-cols-1 xl:grid-cols-4 xl:gap-0 xl:pl-0 gap-4 pl-5 md:gap-6 md:pl-10">
          {children}
          <ContactCard
            icon={
              <CiMail
                className={cn("text-white text-2xl font-bold", className3)}
              />
            }
            title="Mail Us"
            content="Info@acejapan.com"
            titleColor="text-white"
            contentColor="text-white"
          />
          <ContactCard
            icon={
              <LuPhone
                className={cn("text-white text-2xl font-bold", className3)}
              />
            }
            title="Call Us"
            content="045-225-8284"
            titleColor="text-white"
            contentColor="text-white"
          />
          <ContactCard
            icon={
              <CiLocationOn
                className={cn("text-white text-2xl  font-bold", className3)}
              />
            }
            title="Location"
            content=" 28-2-617 Yamashita-cho, Naka-ku, Yokohama, Kanagawa
                  Prefecture, Postal Code : 231-0023"
            titleColor="text-white"
            contentColor="text-white"
          />
        </motion.div>

        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className="container px-15 xl:px-0 xl:mx-auto w-full border-t border-b border-white/40 md:mt-10 mt-15">
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-3 md:divide-x-2 md:divide-y-0 divide-y-2 divide-gray-400">
            <div className=" my-10 md:my-10 md:px-5 ">
              <motion.p
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="show"
                className="text-lg text-white font-semibold">
                Denouncing pleasure and praising pain was born and I will givg
                you a coghmplete acchount of the system, and expound the actual
              </motion.p>

              <div className="mb-10 mt-10 flex flex-row space-x-2 lg:space-x-3 lg:text-lg md:hidden lg:flex">
                <IconComponent icon={FaInstagram} delay={0.2} />
                <IconComponent icon={FaFacebook} delay={0.3} />
                <IconComponent icon={FaTwitter} delay={0.4} />
                <IconComponent icon={FaPinterest} delay={0.5} />
              </div>
            </div>

            <div className="flex justify-around md:space-x-2 my-5 md:my-10 md:pl-10 ">
              <div className="text-white">
                <motion.p
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg font-semibold">
                  Explore
                </motion.p>
                <motion.ul
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg space-y-2 pt-2">
                  <li>About Us</li>
                  <li>Gallery</li>
                  <li>Offers</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </motion.ul>
              </div>
              <div className="text-white lg:ml-10">
                <motion.p
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg font-semibold">
                  Quick Links
                </motion.p>
                <motion.ul
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg md:space-y-1 space-y-2 md:pt-2 pb-10
                ">
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Service Request</li>
                  <li>Estimation Calculator</li>
                </motion.ul>
              </div>
            </div>

            <div>
              <div className="text-white my-10 md:my-10 md:ml-20">
                <motion.p
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg font-semibold">
                  Uitility Pages
                </motion.p>
                <motion.ul
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg md:space-y-1 space-y-2 pt-2">
                  <li>Style Guide</li>
                  <li>Changelog</li>
                  <li>Licenses</li>
                  <li>Protected Page</li>
                  <li>404 Page</li>
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center items-center overflow-y-hidden">
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-white font-semibold text-lg my-5 md:mt-10">
            Copyright © ACE Japan | 2024
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Footer;
