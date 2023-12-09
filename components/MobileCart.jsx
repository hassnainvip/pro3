import React from "react";


import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
// import getStripe from '../lib/getStripe';
import shippingText from './../lib/shippingText';
import  Image  from 'next/image';

const MobileCart = () => {

  const {
    totalPrice,
    totalQuantities,
    cartItems,
  } = useStateContext();



  var shippingT = shippingText(cartItems[0]?.shipping_options);

  return (

    <>


<div     style={{
  boxShadow: '0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)',
}}
   className="w-full  bg-white py-1 border-t-[1px] border-gray-300 relative pt-3  z-30 ">
      {cartItems.length >= 1 &&
        cartItems.map((item, index) => (
          <>
            <div
              className="flex items-center justify-between mx-2 relative "
              key={index}
            >
              <Image width={64} height={64} alt='mobile-cart-image' className="h-[64px] w-[64px]" src={urlFor(item?.image[0]).url()} />
              <span className="px-2  bg-gray-400/95 text-[13px] rounded-full text-white absolute -top-[4px] left-14">
                {" "}
                {totalQuantities}{" "}
              </span>
              <h3
                style={{ fontWeight: 500 }}
                className="flex-1 text-black text-[15px] pl-[9px] "
              >
                {item.name}
              </h3>
              <p
                style={{ fontWeight: 600 }}
                className="text-black text-[13px] "
              >
                Rs {item.price}
              </p>
            </div>

            <div
              className="flex items-center border-t-[1px] border-gray-200 mt-[15px] mb-[1px] pt-2 justify-between mx-2"
              key={item._id}
            >
              <h3
                style={{ fontWeight: 600, textTransform: "uppercase" }}
                className="flex-1 text-black text-[13px] "
              >
                 SUBTOTAL
              </h3>
              <h3
                style={{ fontWeight: 600 }}
                className="text-black text-[13px] "
              >
                Rs {item.price}
              </h3>
            </div>

            <div className=" mb-[2px] pb-2 justify-between" key={item._id}>
              <div className="flex items-center mx-2">
                <h3
                  style={{ fontWeight: 600 }}
                  className="flex-1 text-black text-[13px] "
                >
                  DELIEVERY CHARGES
                </h3>
               
                   <p
                   style={{ fontWeight: 600 }}
                   className="text-red-500 text-[13px] "
                 >
                {shippingT}
                 </p>
          
  
                
        
             
              </div>
            </div>

            <div

              className=" my-[2px] border-t-[1px] border-gray-200   py-[10px]  justify-between"
              key={item._id}
            >
              <div className="flex items-center mx-2">
                <h1
                  style={{ fontWeight: 600 }}
                  className="flex-1 text-black text-[16px]  "
                >
                  TOTAL
                </h1>
                <p
                  style={{ fontWeight: 600 }}
                  className="text-black text-[16px] "
                >
                  Rs {totalPrice + item.shipping_charges}{" "}
                </p>
              </div>
            </div>
          </>
        ))}


    </div>




  </>
  );
};

export default MobileCart;
