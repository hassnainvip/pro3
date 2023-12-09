import React, { useState, useEffect } from "react";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Grid } from "@mui/material";
import MapComponent from './../components/MapComponent';
import ContactForm from './../components/ContactForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as fbq from '../lib/fpixel'
import Footer from './../components/Footer';

import Navbar from './../components/Navbar';

const DetailsBox = ({ heading, para }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true')
     {
         fbq.pageview()
     }
  }, []);

  return (
    <>
      <div
        onClick={toggleModal}
        className="border-[1px] border-gray-300 sm:mx-[25px] mx-[10px] px-[15px] py-[12px] max-w-[686px] cursor-pointer"
      >
        <span className="flex items-center space-x-10 justify-between  border-gray-300 ">
          <h3
            style={{ fontWeight: 500 }}
            className="text-gray-500 text-[14px] "
          >
            {" "}
            {heading.toUpperCase()}{" "}
          </h3>
          <ExpandMoreRoundedIcon
            sx={{
              color: "#4c4c4c",
              transform: showModal ? "rotate(180deg)" : false,
            }}
          />
        </span>
      </div>


      {showModal && (
        <div  className="border-[1px] sm:mx-[25px] mx-[10px] border-gray-300 px-[15px] py-[12px] max-w-[686px] z-[-1] ">
          <span className="flex items-center justify-between  border-gray-300 ">
            <h3
              style={{ fontWeight: 500 }}
              className="text-gray-900 text-[12px] "
            >
              {para}
            </h3>
          </span>
        </div>
      )}


    </>
  );
};

const ContactPage = () => {
    const isMobile = useMediaQuery('(min-width:600px)');

  const firstTab = [
    {
      headingText: "WHAT IS THE REFUND POLICY?",
      paraText:
        "You can refund any product within 14 days, but it should not be used or damaged. Please have a look at our refund policy for a detailed answer.",
    },
    {
      headingText: "HOW TO TRACK MY ORDER? ",
      paraText:
        "When you order any of our products, we will issue an order number. If you want to track your order, just email us your order number with the request of the track, we will respond to you as soon as possible.",
    },
    {
      headingText: "CAN WE CANCEL OUR ORDER?      ",
      paraText:
        "You can cancel your order within eight hours after successfully placing the order.         ",
    },
    {
      headingText:
        "CAN WE RETURN OUR ORDER IF IT ARRIVED DAMAGED?",
      paraText:
        "Yes, you can return or replace your order if it arrived damaged. Just visit our website to see the return policy or email us.        ",
    },
    {
      headingText: "WHAT IS THE MAXIMUM YOU TAKE TO DELIVER A PRODUCT?",
      paraText:
        "We deliver our product minimum within 24 hours and maximum within 04 days.        ",
    },
    {
      headingText: "WILL YOU SEND AN EMAIL TO CONFIRM MY ORDER?",
      paraText:
        "Yes, after successfully placing an order, we will email you the confirmation with the order number and order details.        ",
    },
    {
      headingText: "HOW TO CONTACT YOU?",
      paraText:
        "If you feel any issue, feel free to contact us through email or telephone.         ",
    },
    {
      headingText: "HOW TO ASK A QUESTION THAT IS NOT LISTED ABOVE?",
      paraText:
        "Haven’t found what you are looking for? Just drop an email to us so that we can assist you in the best way we can…        ",
    },
  ];


  useEffect(() => {
    document.body.classList.add("index"); // Add the class to the body element on mount

    return () => {
      document.body.classList.remove("index"); // Remove the class from the body element on unmount
    };
  }, []);
  return (
    <>

    <Navbar />

    <main className='min-h-screen pb-40'>

   <MapComponent />

<div style={{ maxWidth: '90rem',}} className='flex items-center mx-auto' >
   <Grid
  sx={{
    maxWidth: '90rem',
    marginLeft: isMobile ?  '0' : 'auto',
    marginRight:  isMobile ?  '0' : 'auto',
    marginTop: 7,
  }}
  container
  spacing={1}
>
          <Grid item xs={12} lg={6}>
          <div
        style={{ maxWidth: "85rem", fontWeight: 600 }}
        className="mx-auto  z-50  sm:border-r-2 sm:border-gray-200"
      >

        <div className=" mb-5 px-3">
          <h2
            style={{ fontWeight: 500 }}
            className=" text-gray-400 text-[14px] "
          >
           Common queries answered

          </h2>
          <h2 style={{ fontWeight: 500 }} className=" text-black text-[28px] ">
          Frequently asked Questions

          </h2>
        </div>

        {firstTab.map((data) => (
          <DetailsBox
            key={data?.headingText}
            heading={data?.headingText}
            para={data?.paraText}
          />
        ))}

      </div>
          </Grid>
          <Grid item xs={12} lg={6}>
          <div
        style={{ maxWidth: "85rem", fontWeight: 600,  }}
        className="mx-auto sm:px-4 z-50"
      >
        <div className=" mb-5 px-3 pt-5 sm:pt-0">
          <h2
            style={{ fontWeight: 500 }}
            className=" text-gray-400 text-[14px] "
          >
       Still need help?


          </h2>
          <h2 style={{ fontWeight: 500 }} className=" text-black text-[28px] ">
          Get in touch with us

          </h2>
        </div>

        <div className='overflow-hidden  sm:mx-0' >

        <ContactForm />

        </div>
      </div>
          </Grid>


          </Grid>


          </div>
</main>


    <Footer />


    </>
  );
};

export const getStaticProps = async () => {
  const info = await import('../data/companyinfo.json');

  return {
    props: {
      info: info.default,
    },
  };
};

export default ContactPage;
