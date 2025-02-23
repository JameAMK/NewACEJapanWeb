import React from "react";
import { cn } from "../utils";

const Container = ({ children, className }) => {
  return (
    <>
      <div className={cn("container  xl:mx-auto px-10 ", className)}>
        {children}
      </div>
    </>
  );
};

export default Container;
