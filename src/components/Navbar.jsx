import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { pages } from "../constants";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 px-15 container xl:px-0 xl:mx-auto z-50">
        <div className="bg-color-20 h-auto w-full mx-auto mt-5 items-center justify-between pl-12 shadow-md hidden md:flex md:p-4 lg:p-2">
          <div className="text-white flex space-x-14 text-xl md:text-lg md:space-x-10">
            {pages.map((page, index) => {
              const isActive = location.pathname === page.path;
              return (
                <div className="xl:pl-5 " key={index}>
                  <motion.a
                    href={page.path}
                    animate={isActive ? { y: -10, color: "#1c2752" } : {}}
                    whileHover={{ y: -10, color: "#1c2752" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={` cursor-pointer duration-100 nav relative ${
                      isActive ? "navActive font-bold" : ""
                    }`}>
                    {page.name}
                  </motion.a>
                </div>
              );
            })}
          </div>
          <div>
            <div className="w-[250px] h-[65px] bg-color-30 justify-center items-center mr-5 hidden lg:flex">
              <p className="text-xl text-white">Have any questions?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      {!isMenuOpen && (
        <div
          className="text-5xl text-color-1 md:hidden absolute top-16 right-5 cursor-pointer p-4 z-50"
          onClick={() => setIsMenuOpen(true)}>
          <RxHamburgerMenu />
        </div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed md:hidden top-0 left-0 w-full h-full bg-color-30 flex flex-col items-center text-left text-white justify-center font-semibold text-lg z-40">
            {/* Close Button */}
            <div
              className="absolute top-16 right-10 text-4xl cursor-pointer p-4"
              onClick={() => setIsMenuOpen(false)}>
              <RxCross1 />
            </div>

            {/* Menu Items */}
            <ul className="space-y-8 text-2xl">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contactus">Contact Us</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
