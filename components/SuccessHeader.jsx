import React from "react";
import MobileCart from "./MobileCart";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import Image  from 'next/image';

const SuccessHeader = () => {
  const { showCart} =
    useStateContext();

  const router = useRouter();

  const desktopHeader = () => (

    <>

<div style={{ boxShadow: "0 0px 8px 3px rgba(0, 0, 0, 12%)" }}  className={`hidden    mx-auto  sm:block  bg-white`}>
<div style={{ maxWidth: '82.7rem'}}  className={`headerCheckoutMobile hidden    mx-auto  sm:block  bg-white  ${showCart ? "sticky fixed inset-0  bg-black bg-opacity-50 z-50 " : ""}`}>
        <div className="flex items-center   justify-between px-[8px]  pb-[2px] pt-[7px] ">

        <div onClick={ () => router.push('/') } className='flex-1 cursor-pointer'>
      <Image width={24} height={24} alt="delete-icon"  src="/delete-icon.png" />
      </div>

          <div className='flex flex-col items-center' >

          <h2  style={{ fontWeight: 500, }}  className="text-[14px]" >CONFIRMATION PENDING</h2>
        <div className="flex-1" />

          </div>

          <div className='flex-1' />



        </div>

        {showCart && (
          <>
            <MobileCart />
          </>
        )}

      </div>
      </div>

    </>


  );



  const mobileHeader = () => (

    <>

     {/* for mobile */}
     <div style={{ boxShadow: "0 0px 8px 3px rgba(0, 0, 0, 12%)" }}  className={`headerCheckoutMobile block  sm:hidden  ${showCart ? "sticky fixed inset-0  bg-black bg-opacity-50 z-50" : ""}`}>
        <div      className="flex items-center bg-white justify-between px-[8px]  pb-[2px] pt-[7px] ">

        <div onClick={ () => router.push('/') } className='flex-1 cursor-pointer'>
      <Image width={24} height={24} alt="delete-icon" src="/delete-icon.png" />
      </div>

          <div className='flex flex-col items-center' >

          <h2  style={{ fontWeight: 500, }}  className="text-[14px]" >CONFIRMATION PENDING</h2>
        <div className="flex-1" />

          </div>

          <div className='flex-1' />



        </div>

        {showCart && (
          <>
            <MobileCart />
          </>
        )}

      </div>


    </>


  )

  return (
    <>

    {desktopHeader()}

    {mobileHeader()}



    </>
  );
};

export default SuccessHeader;
