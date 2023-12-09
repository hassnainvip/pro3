import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { runFireworks } from "../lib/utils";
import { useRouter } from "next/router";
import { useLoadingStateContext } from "../context/LoadingContext";
import SuccessHeader from "./../components/SuccessHeader";
import * as fbq from '../lib/fpixel';
import Footer from './../components/Footer';
import { useInView } from "react-intersection-observer";
import crypto from "crypto";
import {generateUniqueEventID} from '../lib';
import trackFacebookPixelEvent from '../utils/facebook-pixel-server';
import Cookies from 'js-cookie';
let TiktokPixel;
import Image  from 'next/image';


if (process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CONTROLER === "true") {
  import("tiktok-pixel").then((module) => {
  TiktokPixel = module.default;
  });
}
const Success = () => {
  const uniqueEventID = generateUniqueEventID();
  const fbcCookieValue = Cookies.get('_fbc');
// eslint-disable-next-line
  const { loading, setLoading } = useLoadingStateContext();
  const router = useRouter();

  const encodedDataFromUrl = router?.query.data;
const decodedData = encodedDataFromUrl ? JSON.parse(atob(encodedDataFromUrl)) : {};

  const { c_Ph, date, total, first_name, last_name, email } = decodedData;
    const [maxRun, setMaxRun ] =  useState(false);
  const [maxRunTikTok, setMaxRunTikTok ] =  useState(false);
  const website_url = process.env.NEXT_PUBLIC_WEBSITE_URL
  const [refs, inViewLoad] = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again when it's not in view
    threshold: 0.1, // Adjust this as needed
  });

  const phoneNumber  = c_Ph;

  useEffect(() => {
    localStorage.clear();
    setLoading(false);

    if (phoneNumber?.length > 0) {
      runFireworks();
    }
  }, [phoneNumber?.length, setLoading]);

console.log( 'data', decodedData)

  const ConfirmOrder = () => (
    <React.Fragment>
      <SuccessHeader  />
      <div
        style={{ maxWidth: "85rem" }}
        className={`flex flex-col h-screen mt-10  bg-white mx-auto ${styles.paddingX}`}
      >
        <div className=" flex flex-col items-center justify-center ">
          <Image quality={100} width={100} height={100} alt="right green check icon" src="/checked-icon.png" />
          <h2  ref={refs}  style={{ fontWeight: 500 }} className="text-[19px] pb-2">
            Order Received
          </h2>
          <p className="text-[11.2px] pb-[9px] text-center mx-2">
            You will recieve an order confirmation call shortly with the
            expected delivery date.
          </p>
          <p className="text-red-500  text-[11.2px]">
            Must recieve call from{" "}
            <strong className="text-black">
              {process.env.NEXT_PUBLIC_PHONE_NUMBER_VARIABLE}

                </strong>
          </p>
        </div>

        <div className="mx-5">
          <ul className="order_details">
            <li className="order">
              <p className="text-[10px]">
                {" "}
                Order Number:
                <br />{" "}
                <strong className="text-[14.4px]">
                  {phoneNumber || "0000"}
                </strong>{" "}
              </p>
            </li>
            <li className="date">
              <p className="text-[10px]">
                {" "}
                Date:
                <br /> <strong className="text-[14.4px]">{date}</strong>{" "}
              </p>
            </li>
            <li>
              <p className="text-[10px]">
                {" "}
                Total: <br />{" "}
                <strong className="text-[14.4px]">Rs {parseFloat(total)} </strong>{" "}
              </p>
            </li>
            <li className="">
              <p className="text-[10px]">
                {" "}
                Payment Method: <br />{" "}
                <strong className="text-[14.4px]">Cash on delivery</strong>{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>


    <Footer  />
    </React.Fragment>
  );


  useEffect(() => {
    if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true' && maxRun === false && phoneNumber) {
      setMaxRun(true)
      const total_value = parseInt(total);

      const sanitizedPhoneNumber = phoneNumber.replace(/\+/g, '');


       // Hash sensitive data before sending it to pixels
       const hashedPhoneNumber = crypto.createHash('sha256').update(sanitizedPhoneNumber).digest('hex');
       const hashedEmail = crypto.createHash('sha256').update(email).digest('hex');
    const hashedFirstName = crypto.createHash('sha256').update(first_name).digest('hex');
    const hashedLastName = crypto.createHash('sha256').update(last_name).digest('hex');
    const country = 'pk';
    const hashedCountry = crypto.createHash('sha256').update(country).digest('hex');



      if( process.env.NEXT_PUBLIC_SHOW_EMAIL ===  "true"){
        fbq.event('Purchase', {
          content_type: 'product',
          page_title: 'checkout',
          currency: 'PKR',
          fn: hashedFirstName, // Send hashed first name
          ln: hashedLastName, // Send hashed last name
          email: hashedEmail, // Send hashed email
          value: total_value,
          ph: hashedPhoneNumber,
          country: hashedCountry,
        },
        uniqueEventID,
  
        );
  
  
        fbq.event('PageView');


        trackFacebookPixelEvent([{"action_source":"website","event_name":"Purchase", "custom_data": { "country":'79adb2a2fce5c6ba215fe5f27f532d4e7edbac4b6a5e09e1ef3a08084a904621',  "page_url":`${website_url}/cod`, "currency": "PKR", "value": total_value, fn: first_name ? hashedFirstName : '', ln: last_name ? hashedLastName :  '', email:  email ? hashedEmail  : '', "ph":hashedPhoneNumber }}], {fbc: fbcCookieValue}, uniqueEventID);


      }else {
        fbq.event('Purchase', {
          content_type: 'product',
          page_title: 'checkout',
          currency: 'PKR',
          fn: hashedFirstName, // Send hashed first name
          ln: hashedLastName, // Send hashed last name
          value: total_value,
          ph: hashedPhoneNumber,
          country: hashedCountry,
        },
        uniqueEventID,
  
        );
  
  
        fbq.event('PageView');

        trackFacebookPixelEvent([{"action_source":"website","event_name":"Purchase", "custom_data": { "country":'79adb2a2fce5c6ba215fe5f27f532d4e7edbac4b6a5e09e1ef3a08084a904621',  "page_url":`${website_url}/cod`, "currency": "PKR", "value": total_value, fn: first_name ? hashedFirstName : '', ln: last_name ? hashedLastName :  '', "ph":hashedPhoneNumber }}], {fbc: fbcCookieValue}, uniqueEventID);

      }

      




  }
  }, [email, fbcCookieValue, first_name, last_name, maxRun, phoneNumber, total, uniqueEventID, website_url]);


  useEffect(() => {
    if(process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CONTROLER === 'true' && phoneNumber && inViewLoad && !maxRunTikTok) {
      setMaxRunTikTok(true);
      setTimeout(() => {
        TiktokPixel.track("PlaceAnOrder", {
          content_type: "product",
          quantity: 1,
          content_name:  `order_number: ${phoneNumber}`,
          content_id: 'product_id',
          currency: "PKR",
          value: total, // assuming 'total' is the total price of the order
        });
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  }, [phoneNumber, inViewLoad, maxRunTikTok, total]);




  if(!phoneNumber?.Lenght > 1 ){
    return(
<div className="flex flex-col items-center justify-center">
          <Image width="500" height="500" alt="empty cart icon" className=" h-[500px] w-auto" src="/emptycart.jpg" />
          <button
            className="empty-cart-btn"
            onClick={() => router.push("/")}
          >
            {" "}
            Shop Now{" "}
          </button>
        </div>
    )
  }

  return (
    <div>
      {phoneNumber?.length > 1 && (
        ConfirmOrder()
      )}
    </div>
  );
};

export default Success;
