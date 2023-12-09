import React from "react";
import { BeatLoader } from "react-spinners";
import {  urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";
import { useLoadingStateContext } from "../context/LoadingContext";
import shippingText from './../lib/shippingText';
import  Image  from 'next/image';

const OrderDetails = ({ onSubmitButton }) => {
  // eslint-disable-next-line
  const { loading, setLoading } = useLoadingStateContext();

  const { totalPrice,  cartItems } =
    useStateContext();


  var shippingT = shippingText(cartItems[0]?.shipping_options);


  return (
    <>
    {cartItems &&

    <React.Fragment>
      <div className="hidden sm:block :mt-10 p-5 shadow-md shadow-slate-300  space-y-2 bg-white flex flex-col justify-start space-x-2">
        {cartItems?.map((product) => (
          <>
          <ul key={product.name} className="flex flex-col space-y-2 ">
            <li className="bg-white flex items-center border-dashed border-2 border-gray-300 p-2 justify-between space-x-2">
              <Image
              width={80}
              height={80}
                className="h-[80px] w-[80px]"
                src={urlFor(product?.image[0]).url()}
                alt={product?.name}
              />

              <h3 className="flex-1 pl-3 font-bold ">
                {product?.name} x {product?.quantity}
              </h3>

              <p className=" font-bold ">Rs {product?.price}</p>
            </li>
          </ul>
  
        <div className="bg-white flex items-center justify-between space-x-2">
          <h3 style={{ fontWeight: 600 }} className="flex-1  text-[13px] ">
            DELIVERY CHARGES
          </h3>
          {product?.shipping_charges === 0 ? 
          <p
          style={{ fontWeight: 600 }}
          className="text-[13px] text-red-500 "
        >
       {shippingT}
        </p>
        :

        <p
        style={{ fontWeight: 600 }}
        className="text-[13px] text-red-500 "
      >
        Rs  {product?.shipping_charges}
      </p>
          }
          
        </div>
     
  
        <div className="bg-white flex items-center justify-between space-x-2">
          <h3 style={{ fontWeight: 600 }} className="flex-1  text-[13px] ">
            TOTAL
          </h3>
          
          <p style={{ fontWeight: 600 }} className="text-[13px]">
            Rs {totalPrice + product?.shipping_charges}
          </p>
        </div>
        </>
            ))}
      </div>
      
      <div className="block sm:hidden  shadow-lg shadow-gray-700  flex items-center justify-between bg-white  w-full p-2 fixed bottom-0 left-0">
        <p className="whitespace-nowrap text-[16px] pr-10 font-bold ">
          {" "}
          Total Bill <br /> <strong>Rs {totalPrice + cartItems[0]?.shipping_charges  } </strong>{" "}
        </p>
        <button
          type="submit"
          form="checkoutForm"
          className="block sm:hidden submitbtnplace"
        >
          {loading ? (
            <BeatLoader margin={3} size={20} color="#FFFFFF" />
          ) : (
            "Place Order"
          )}
        </button>
      </div>

      <button
        type="submit"
        form="checkoutForm" //
        className="justify-center place-order-btn"
      >
        {loading ? (
          <BeatLoader margin={3} size={20} color="#FFFFFF" />
        ) : (
          "Place Order"
        )}
      </button>
      {onSubmitButton}
    </React.Fragment>
  }
  </>
  );
};

export default OrderDetails;

//to add email put this in form
{
  /* {product?.discount && (product.quantity === 1 || product.quantity === 3) && (
                 <li className="flex items-center mt-2">
                 <input
                   type="checkbox"
                   id="discountToggle"
                   className="h-4 w-4 text-blue-500 rounded"
                   onClick={() => handleDiscountToggle(product)}
                 />
                 <label htmlFor="discountToggle" className="ml-2">
                   Buy Two Get One Free
                 </label>
               </li>
              )} */
}
