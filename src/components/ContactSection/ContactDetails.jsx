import React from "react";
import FocusIcon from "../../shared/FocusIcon";
import HeaderT from "../../shared/HeaderT";
import Container from "../../shared/Container";
import ContactDetailCard from "./ContactDetailCard";
import { IoPersonSharp } from "react-icons/io5";
import Grid from "../../shared/Grid";
import AddressComponent from "./AddressComponent";
import { FaClock } from "react-icons/fa6";
import Text from "../../shared/Text";

const ContactDetails = () => {
  return (
    <>
      <Container className="mt-30">
        <div className="flex flex-col justify-center items-center">
          <FocusIcon text="Quick Contact" className="bg-seconary" />
          <HeaderT className="py-3">Contact Details</HeaderT>
          <Text>
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </Text>
        </div>
        <Grid className="flex justify-center items-center mt-10 lg:flex-row flex-col">
          <ContactDetailCard
            className=" lg:px-8"
            icon={<FaClock />}
            title="Emergency Works"
            num="(003) 123 456 7890"
            btnName="Call Us"
          />

          <div className="bg-blue px-10  xl:py-4 lg:py-1">
            <HeaderT className="text-red text-center pt-6 pb-3">
              Main Branch
            </HeaderT>
            <div className="mx-5 pb-8 space-y-2">
              <AddressComponent label="Address:" text="Amsterdam, 109-74" />
              <AddressComponent label="Phone:" text="+01 569 896 654" />
              <AddressComponent label="Mail:" text="info@example.com" />
            </div>
          </div>
          <ContactDetailCard
            icon={<IoPersonSharp />}
            title="You Have a Question?"
            num="(003) 123 456 7888"
            btnName="Reach Us"
          />
        </Grid>
      </Container>
    </>
  );
};

export default ContactDetails;
