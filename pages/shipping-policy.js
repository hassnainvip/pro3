import React, {  useEffect } from "react";
import style from "../styles/staticpages.module.css";
import { Grid } from "@mui/material";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


import * as fbq from '../lib/fpixel'

const ShippingPolicy = () => {

  const companyName = process.env.NEXT_PUBLIC_WEBSITE_NAME;
  const companyEmail = process.env.NEXT_PUBLIC_WEBSITE_EMAIL;


  useEffect(() => {

    if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true')
         {
             fbq.pageview()
         }


    document.body.classList.add("index"); // Add the class to the body element on mount

    return () => {
      document.body.classList.remove("index"); // Remove the class from the body element on unmount
    };
  }, []);

  return (
    <>
  <Navbar />
      <div className={style.mainContainer}>
      <h2 style={{ fontWeight: "600" }} className="text-[25px] text-center">
        SHIPPING POLICY
      </h2>
      <p className="text-gray-600 text-[12px] text-center">
        Last updated on 26-Dec-2022{" "}
      </p>

      <p className=" pt-10">
        Thanks for shopping with {companyName}. To
        constitute our shipping policy, the following conditions must be kept in
        mind.
      </p>

      <h3 className=" pt-7" style={{ fontWeight: "600" }}>
        TIME IS TAKEN FOR PROCESSING THE SHIPMENT
      </h3>

      <p
        style={{
          lineHeight: "25px",
          paddingBottom: "10px",
          whiteSpace: "pre-line",
        }}
        className="text-gray-600 text-[14px] pt-3"
      >
        Once the order is placed, it takes three working days to process the
        order. In case of a high volume of orders, the order may be delayed for
        a couple of more days. In case of a significant delay in the delivery of
        your order, we will contact you through email.
      </p>

      <h3 className=" pt-10" style={{ fontWeight: "600" }}>
        RATES OF SHIPPING AND DELIVERY ESTIMATES
      </h3>

      <p
        style={{ lineHeight: "25px", paddingBottom: "10px" }}
        className="text-gray-600 text-[14px] pt-3"
      >
        Charges of your shipment for your order will be collected and displayed
        at check-out.
      </p>

      <Grid
        sx={{
          maxWidth: "90rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        container
        spacing={1}
      >
        <Grid item xs={12} lg={4}>
            <div className='flex flex-col space-y-4'>
          <h3 className=" pt-10" style={{ fontWeight: "600" }}>
            Shipment Method
          </h3>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
            Basic
          </p>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
            Standard
          </p>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
            Overnight
          </p>
          </div>
        </Grid>


        <Grid item xs={12} lg={4}>
        <div className='flex flex-col space-y-4'>

          <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          Calculated Delivery Time
          </h3>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
          3-7 business days
          </p>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
       2 business days
          </p>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
           1-2 business days
          </p>
          </div>
        </Grid>



        <Grid item xs={12} lg={4}>
        <div className='flex flex-col space-y-4'>

          <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          Shipment Cost

          </h3>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
         Free

          </p>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
      $12.95
          </p>

          <p
            style={{ lineHeight: "25px", paddingBottom: "10px" }}
            className="text-gray-600 text-[14px] pt-3"
          >
          $19.95
          </p>
          </div>
        </Grid>






      </Grid>

      <p
        style={{ lineHeight: "25px", paddingBottom: "5px" }}
        className="text-gray-600 text-[14px] pt-10"
      >
       Delay in the delivery may occasionally occur.


      </p>

      <h3 className=" pt-10" style={{ fontWeight: "600" }}>
      CONFIRMATION OF SHIPMENT & ORDER TRACKING

      </h3>

      <p
        style={{ lineHeight: "25px", paddingBottom: "10px" }}
        className="text-gray-600 text-[14px] pt-3"
      >
       Once the order is placed on the site, you will receive a confirmation email along with a tracking number. Your tracking number will be active for 24 hours.


      </p>

      <h3 className=" pt-10" style={{ fontWeight: "600" }}>
      TAXES, DUTIES, CUSTOMS

      </h3>

      <p
        style={{ lineHeight: "25px", paddingBottom: "10px" }}
        className="text-gray-600 text-[14px] pt-3"
      >
       {companyName} will not be held accountable for any custom, taxes, or duties that are being applied to your order. Any fees levied during or after the shipment is the sole responsibility of the customer and not the other way round.
      </p>

      <h3 className=" pt-10" style={{ fontWeight: "600" }}>
      DAMAGES
      </h3>

      <p
        style={{ lineHeight: "25px", paddingBottom: "10px" }}
        className="text-gray-600 text-[14px] pt-3"
      >
       {companyName} will not be held responsible for any damage that may occur to the product during or after the shipment. You are permitted to file a claim if you receive a damaged shipment.

It is requested to save all packing materials and damaged products before you file a claim.
      </p>

      <h3 className=" pt-10" style={{ fontWeight: "600" }}>
      RETURN/REFUND

      </h3>

      <p
        style={{ lineHeight: "25px", paddingBottom: "10px" }}
        className="text-gray-600 text-[14px] pt-3"
      >
       Return or Refund can only be done within 14 days after shipment is received, provided the product is not damaged or used. For more details, check our Return/ Refund policy.


      </p>


      <h3 className=" pt-10" style={{ fontWeight: "600" }}>
      DELIVERY POLICY


      </h3>

      <p
        style={{ lineHeight: "25px", paddingBottom: "10px" }}
        className="text-gray-600 text-[14px] pt-3"
      >
      On receiving the shipment, an individual of legal age will be required to sign on a paper to confirm that delivery has been received.<br />

If you have changed the shipment address, the shipment will be retained at the shipper’s office for you to collect.<br />

In case if you are not at your delivery address, the courier will leave a delivery card for you so that you can contact them to rearrange your delivery.<br />
</p>


<h3 className=" pt-10" style={{ fontWeight: "600" }}>
CONTACT US



      </h3>

      <p
        style={{ lineHeight: "25px", paddingBottom: "10px" }}
        className="text-gray-600 text-[14px] pt-3"
      >
If you face any issue on the placement of the order, during shipment, or after you receive the delivery, you are free to contact us at {companyEmail}.


      </p>


    </div>

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

export default ShippingPolicy;
