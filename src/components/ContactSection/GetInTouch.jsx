import React from "react";
import FocusIcon from "../../shared/FocusIcon";
import HeaderT from "../../shared/HeaderT";
import Container from "../../shared/Container";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

const GetInTouch = () => {
  return (
    <>
      <div className="bg-seconary h-auto mt-30">
        <Container className="pt-20">
          <div className="flex flex-col justify-center items-center">
            <FocusIcon text="Contact Us" className="py-2" />
            <HeaderT className="xl:text-5xl pt-2">Get In Touch</HeaderT>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
            <Input placeholder="Your Name " />
            <Input placeholder="Your Email " />
            <Input placeholder="Phone Number " />
            <Input placeholder="Website " />
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <Input placeholder="Subject " />
            <Input
              placeholder="Your Message"
              className="py-10 :text-start placeholder:align-top leading-none"
            />
          </div>
          <div className="flex justify-center items-center pt-8 pb-16">
            <Button className="text-blue xl:px-12 xl:py-3 ">Submit</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GetInTouch;
