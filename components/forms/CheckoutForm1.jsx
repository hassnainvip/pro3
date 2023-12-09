import React, { useState, useEffect, useRef } from "react";
import OrderDetails from "../OrderDetails";
import { useFormStateContext } from "../../context/FormStateContext";
import { useStateContext } from "../../context/StateContext";
import { useLoadingStateContext } from "../../context/LoadingContext";
import * as fbq from "../../lib/fpixel";
import Cookies from "js-cookie";
import { useInView } from "react-intersection-observer";
import PhoneInput from 'react-phone-number-input/input'
import SendDataToSqs from "../../utils/aws-sqs-worker";
import trackFacebookPixelEvent from "../../utils/facebook-pixel-server";
import {generateUniqueEventID} from '../../lib';
import DiscountApplyForm from './../DiscountApplyForm';
let TiktokPixel;
//
if (process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CONTROLER === "true") {
  import("tiktok-pixel").then((module) => {
 
  TiktokPixel = module.default;
  });
}
/* eslint-disable */
const discountStorage = JSON.parse(
  typeof window !== "undefined"
    ? localStorage.getItem("discount_remember") || "[]"
    : "[]"
);
/* eslint-enable */


function CheckoutForm1({ discount, product, selectedOption }) {
  

  const [showErrorFirstName, setShowErrorFirstName] = useState(false);
  const [showErrorLastName, setShowErrorLastName] = useState(false);
  const [showErrorPhone, setShowErrorPhone] = useState(false);
  const [showErrorCity, setShowErrorCity] = useState(false);
  const [showErrorAddress, setShowErrorAddress] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const website_url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const fbcCookieValue = Cookies.get("_fbc");
  const uniqueEventID = generateUniqueEventID();
// eslint-disable-next-line
  const { loading, setLoading } = useLoadingStateContext();
  const {
    formDetails,
    handleChange,
    handleBlur,
    handleBlurCity,
    handleBlurMobile,
    handleChangeMobile,
    handleBlurEmail,
    handleChangeAlternativeMobile,
  } = useFormStateContext();
  const {
    totalPrice,
    cartItems,

  } = useStateContext();




  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10); // Extracting only the date part (YYYY-MM-DD)



  // Assuming product.shipping_charges is a number

// Convert shipping charges to a string using toString()


console.log('shhh', product?.shipping_charges)

const onSubmit = async () => {

  setLoading(true);


  setLoading(true);
  try {
    SendDataToSqs(
      "hi hello",
      { cartItems: cartItems[0] },
      { user_data: formDetails },
      { totalValue: totalPrice }
    );

const encodedData = btoa(JSON.stringify({
  c_Ph: formDetails?.mobileNumber,
  date: formattedDate,
  total: totalPrice + product.shipping_charges,
  shipping_charges: product?.shipping_charges,
  first_name: formDetails?.firstName,
  last_name: formDetails?.lastName,
  email: formDetails?.email,
}));

const url = `/success?data=${encodeURIComponent(encodedData)}&triggerPixelEvent=true`;
    window.location.href = url;
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
};

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line
    const re = /^[0-9\b]+$/;
    onSubmit();
    event.target.reset();

  };

  const firstUpdate = useRef(true);
/* eslint-disable */

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === "true") {
      if (firstUpdate.current) {
        fbq.event("InitiateCheckout", {
          content_ids: product._id,
          content_type: "product",
          content_name: product.name,
          value: product.price,
          currency: "PKR",
        },
        uniqueEventID
        );
        fbq.event('PageView');

        // server-side facebook pixels

        trackFacebookPixelEvent(
          [
            {
              action_source: "website",
              event_name: "InitiateCheckout",
              custom_data: {
                product_name: product.name,
                total_price: totalPrice,
                product_id: product?.woocommerceid,
                page_url: `${website_url}/cod`,
                content_category: "Checkout Page",
              },
            },
          ],
          { fbc: fbcCookieValue },
          uniqueEventID
        );


        firstUpdate.current = false;
      }
    }
  }, []);
  /* eslint-enable */


  const [refs, inViewLoad] = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again when it's not in view
    threshold: 0.1, // Adjust this as needed
  });

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CONTROLER === "true" &&
      inViewLoad
    ) {
      TiktokPixel.track("InitiateCheckout", {
        content_type: "product",
        quantity: 1,
        content_name:  product.name,
        content_id: product._id,
        currency: "PKR",
        value: product.price,
      });
    }
  }, [inViewLoad, product._id, product.name, product.price]);
  return (
    <React.Fragment>
      <div className="space-y-2 ">
        <div className="hidden"></div>
        <span>
          <p className="fontbolda text-[12px]">ORDER BOOKING FORM</p>
          <p className="text-[12px] text-gray-500">
            Please enter the details here
          </p>
          <span className="hidden">
            <OrderDetails />
          </span>
        </span>
        <div
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
          className="bg-white px-2 py-2 shadow-xl "
        >
          <form
            ref={refs}
            id="checkoutForm"
            onSubmit={handleSubmit}
            className="flex flex-col justify-start space-y-[4px] w-full pb-[4px]"
          >
                        <div className= 'flex space-x-2 '>

                          <div className='w-full'>

            {/* Full Name */}
            <label
              className="block text-[13px] text-black font-bold mb-1 "
              htmlFor="fullName"
            >
              First Name
              <strong className="text-red-500 text-[14px] font-[400]">
                {" "}
                *{" "}
              </strong>
            </label>
            <input
              style={{
                fontSize: "16px",
                border: showErrorFirstName ? "1px solid red" : "1px solid #ccc",
              }}
              type="text"
              name="firstName"
              id="firstName"
              value={formDetails.firstName}
              onChange={handleChange}
              onInvalid={(e) => {
                e.preventDefault();
                setShowErrorFirstName(true);
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
                setShowErrorFirstName(false); // Clear the error state
              }}
              required
              className="border border-gray-300 px-[5px] py-[8px] w-full  max-h-[41px]"
            />
            {showErrorFirstName && (
              <p className=" flex justify-end text-red-500 text-sm">
                اپنا مکمل نام درج کریں.
              </p>
            )}
            </div>
            <div className='w-full'>

         <label
              className="block text-[13px] text-black font-bold mb-1 "
              htmlFor="fullName"
            >
              Last Name
              <strong className="text-red-500 text-[14px] font-[400]">
                {" "}
                *{" "}
              </strong>
            </label>
            <input
              style={{
                fontSize: "16px",
                border: showErrorLastName ? "1px solid red" : "1px solid #ccc",
              }}
              type="text"
              name="lastName"
              id="lastName"
              value={formDetails.lastName}
              onChange={handleChange}
              // onBlur={handleBlurName} // Add onBlur event handler
              // onInvalid={(e) => e.preventDefault()}
              onInvalid={(e) => {
                e.preventDefault();
                setShowErrorLastName(true);
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
                setShowErrorLastName(false); // Clear the error state
              }}
              required
              className="border border-gray-300 px-[5px] py-[8px] w-full max-h-[41px] "
            />
            {showErrorLastName && (
              <p className=" flex justify-end text-red-500 text-sm">
                اپنا مکمل نام درج کریں.
              </p>
            )}
            </div>
            </div>
            {/* email */}
            {
              process.env.NEXT_PUBLIC_SHOW_EMAIL === 'true' &&
              <>
            <label
              className="block text-[13px] text-black font-bold mb-1 "
              htmlFor="fullName"
            >
             Email
              <strong className="text-red-500 text-[14px] font-[400]">
                {" "}
                *{" "}
              </strong>
            </label>
            <input
              style={{
                fontSize: "16px",
                border: showErrorEmail ? "1px solid red" : "1px solid #ccc",
              }}
              type="email"
              name="email"
              id="email"
              value={formDetails.email}
              onChange={handleChange}
              onBlur={handleBlurEmail} // Add onBlur event handler
              // onInvalid={(e) => e.preventDefault()}
              onInvalid={(e) => {
                e.preventDefault();
                setShowErrorEmail(true);
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
                setShowErrorEmail(false); // Clear the error state
              }}
              required
              className="border border-gray-300 px-[5px] py-[8px] w-full  "
            />
            {showErrorEmail && (
              <p className=" flex justify-end text-red-500 text-sm">
                مکمل ای میل درج کریں۔
              </p>
            )}
            </>
          }
            {/* Mobile Number */}
            <label
              className="block text-[13px] text-black font-bold mb-1"
              htmlFor="mobileNumber"
            >

              Mobile Number
              <strong className="text-red-500 text-[14px] font-[400]">
                {" "}
                *{" "}
              </strong>
            </label>
            <PhoneInput
             country="PK"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#2f2f2f",
                border: showErrorPhone ? "1px solid red" : "1px solid #ccc",
              }}
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              value={formDetails.mobileNumber}
              required
              onInvalid={(e) => {
                e.preventDefault();
                setShowErrorPhone(true);
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
                setShowErrorPhone(false); // Clear the error state
              }}
              onChange={handleChangeMobile}
              onBlur={handleBlurMobile} // Add onBlur event handler
              className="border border-gray-300 px-[10px] py-2 w-full"
            />
            {showErrorPhone && (
              <p className=" flex justify-end text-red-500 text-sm">
                اپنا موبائل نمبر درج کریں.
              </p>
            )}



            {/* Alternate Number */}
            <label
              className="block text-[13px] text-black font-bold mb-1"
              htmlFor="alternateNumber"
            >
              Alternate Number (optional)
            </label>
              <PhoneInput
             country="PK"
             style={{ fontSize: "16px", fontWeight: 400, color: "#2f2f2f" }}
             type="tel"

             name="alternateNumber"
              id="alternateNumber"
              value={formDetails.alternateNumber}
              onChange={handleChangeAlternativeMobile}
              className="border border-gray-300 px-[10px] py-2 w-full"
            />
            <label
              className="block text-[13px] text-black font-bold mb-1"
              htmlFor="city"
            >
              City / District / Tehsil
              <strong className="text-red-500 text-[14px] font-[400]">
                {" "}
                *{" "}
              </strong>
            </label>
            <input
              style={{
                fontSize: "16px",
                border: showErrorCity ? "1px solid red" : "1px solid #ccc",
              }}
              type="text"
              name="city"
              id="city"
              value={formDetails.city}
              onChange={handleChange}
              onBlur={handleBlurCity} // Add onBlur event handler
              required
              onInvalid={(e) => {
                e.preventDefault();
                setShowErrorCity(true);
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
                setShowErrorCity(false); // Clear the error state
              }}
              className="border border-gray-300 px-[5px] py-2 w-full"
            />
            {showErrorCity && (
              <p className=" flex justify-end text-red-500 text-sm">
                اپنا شہر یا ضلع درج کریں.
              </p>
            )}

            {/* Complete Address */}
            <label
              className="block text-[13px] text-black font-bold mb-1"
              htmlFor="address"
            >
              Complete Address
              <strong className="text-red-500 text-[14px] font-[400]">
                {" "}
                *{" "}
              </strong>
            </label>
            <textarea
              style={{
                fontSize: "16px",
                border: showErrorAddress ? "1px solid red" : "1px solid #ccc",
              }}
              type="text"
              name="address"
              id="address"
              value={formDetails.address}
              onChange={handleChange}
              onBlur={handleBlur}
              onInvalid={(e) => {
                e.preventDefault();
                setShowErrorAddress(true);
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
                setShowErrorAddress(false); // Clear the error state
              }}
              className="border border-gray-300 px-[5px] py-2 w-full"
              rows="2"
              required
            />
            {showErrorAddress && (
              <p className="text-red-500 flex justify-end text-sm">
                اپنا مکمل پتہ درج کریں.
              </p>
            )}

            {discount && <DiscountApplyForm product={product} selectedOption={selectedOption} formDetails={formDetails} />}
            {/* Zip Code */}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CheckoutForm1;

