import React from "react";
import Container from "../../shared/Container";
import MiniHeader from "../../shared/miniHeader";
import HeaderT from "../../shared/HeaderT";
import Flex from "../../shared/Flex";
import MarkText from "../../shared/MarkText";
import SideLayout from "../../shared/SideLayout";
import Button from "../../shared/Button";
import { motion } from "framer-motion";
import { fadeInFR, fadeUp } from "../../animations";
const services = [
  "We provide 24/7 service",
  "Greate Technology",
  "Qualified Agents",
  "10 Years Experiance",
];

const Quality = () => {
  return (
    <>
      <Container className="mt-20 md:px-15 h-auto">
        <Flex className="xl:space-x-14">
          <SideLayout className="pb-5">
            <MiniHeader image="FutureVector.svg">
              Welcome to ACE Japan
            </MiniHeader>
            <HeaderT className="xl:text-5xl md:text-3xl my-4">
              We’re Commited to Quality
            </HeaderT>
            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-gray py-5">
              Proactively envisined multimeda based exptis and cross media
              growth strategies seamlessly visualized quality a intellectual
              capitals withouts superiors collaboration ideas sharing
              holistically pontificated installed base portals after
              maintainable products.
            </motion.p>
            <div className="grid md:grid-cols-2 grid-cols-1  gap-3 py-8">
              {services.map((text, index) => (
                <MarkText key={index}>
                  <p>{text}</p>
                </MarkText>
              ))}
            </div>
            <Flex className="pt-14 pb-10 justify-start space-x-10">
              <Button>More About Us</Button>
              <div className="font-bold">
                <motion.a
                  variants={fadeInFR(0.3)}
                  initial="hidden"
                  whileInView="show"
                  href="#"
                  className="text-blue underline">
                  For Emergency Fixing or Appointment
                </motion.a>
                <motion.p
                  variants={fadeInFR(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-red text-2xl">
                  45-225-8284
                </motion.p>
              </div>
            </Flex>
          </SideLayout>

          {/* left side */}
          <div className="xl:block hidden">
            <img src="/AboutUsPageImg/quality.png" alt="" />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Quality;
