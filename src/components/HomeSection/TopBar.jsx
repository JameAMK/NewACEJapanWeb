import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "./../../i18n";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button";

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="bg-color-10  h-[60px] flex items-center text-color-1 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container mx-auto flex justify-between items-center px-15 xl:px-0">
          <p className="text-xs sm:text-lg">{t("openingHours")}</p>

          <div className="space-x-5">
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("ja")}>
              Japanese
            </button>
            <span>/</span>
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("en")}>
              Eng
            </button>
          </div>

          <div>
            <ul className="flex flex-row space-x-2 sm:space-x-4 text-lg sm:text-xl ">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaPinterest />
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TopBar;
