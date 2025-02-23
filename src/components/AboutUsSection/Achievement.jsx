import React from "react";
import SideLayout from "../../shared/SideLayout";
import MiniHeader from "../../shared/miniHeader";
import HeaderT from "../../shared/HeaderT";
import { motion } from "framer-motion";
import Container from "../../shared/Container";
import { RemarkText } from "../../constants";
import Remark from "../Remark";
import Timeline from "../TimeLine";
import { fadeInFR } from "../../animations";

const Achievement = () => {
  return (
    <>
      <div className="bg-seconary w-full mt-24">
        <Container className="flex flex-col justify-center items-center xl:flex-row md:flex-col  xl:space-x-10">
          <SideLayout className="md:w-full md:ml-0 md:mt-4 mt-5">
            <MiniHeader image="FutureVector.svg" className="bg-white">
              Welcome To ACE Japan
            </MiniHeader>
            <HeaderT className="py-3 xl:text-5xl lg:text-3xl">
              ACE Japan Achievements
            </HeaderT>
            <motion.p
              variants={fadeInFR(0.3)}
              initial="hidden"
              whileInView="show"
              className="text-gray py-2">
              Phosfluorescently engaged worldwides methodologies with web
              enabled technology pursure interactively coordinates proactive
              commerce via process
            </motion.p>
            {RemarkText.slice(0, 2).map((item, index) => (
              <Remark
                key={index}
                delay={item.delay}
                text={item.text}
                title={item.title}
                className="py-3"
              />
            ))}
          </SideLayout>

          {/* right side */}
          <div className="overflow-x-hidden">
            <div className="xl:w-[577px] mt-24">
              <Timeline />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Achievement;
