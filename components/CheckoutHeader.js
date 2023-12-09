import React from "react";
import MobileCart from "./MobileCart";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LockIcon from "@mui/icons-material/Lock";
import Image from 'next/image'

const CheckoutHeader = () => {




  const {
    showCart,
    setShowCart,
    totalQuantities,
    totalPrice,
    cartItems,
    appliedDiscounts,
  } = useStateContext();

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const router = useRouter();


  // useEffect(() => {
  //   // Add event listener to close the cart on outside click
  //   const handleOutsideClick = (event) => {
  //     if (showCart && !event.target.closest(".headerCheckoutMobile")) {
  //       toggleCart();
  //     }
  //   };

  //   if (showCart) {
  //     document.addEventListener("mousedown", handleOutsideClick);
  //   } else {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [showCart]);

  console.log(appliedDiscounts);

  const desktopHeader = () => (
    <React.Fragment>
      {/* for desktop */}
      {showCart && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20" />
      )}

      <div
        className={`hidden sm:block header-4-container bg-white py-2 h-auto shadow-lg shadow-gray-300`}
        style={{
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{ maxWidth: "85.2rem" }}
          className="flex justify-between items-center mx-auto"
        >
         <div  onClick={() => router.push("/")}  className='max-h-[31px] w-auto cursor-pointer'>
            <Image
            priority={true} width={120} height={120}
              src={process.env.NEXT_PUBLIC_WEBSITE_LOGO}
              alt="website-logo"
            />
          </div>

          <span className="flex items-center space-x-2">
            <LockIcon sx={{ fontSize: "22px", marginBottom: "2px" }} />
            <p className="text-[16px] font-bold tracking-wider">
              SECURE CHECKOUT
            </p>
          </span>
          {showCart && <MobileCart />}
        </div>
      </div>
    </React.Fragment>
  );

  const mobileHeader = () => (
    <React.Fragment>
      {/* for mobile */}
      <div
        style={{ boxShadow: "0 0px 8px 3px rgba(0, 0, 0, 12%)" }}
        className={`headerCheckoutMobile block  sm:hidden  ${
          showCart ? "sticky fixed inset-0  bg-black bg-opacity-50 z-50" : ""
        }`}
      >
        <div className="flex items-center bg-white justify-between px-[8px]  pb-[2px] pt-[7px] ">
          <div className="flex items-center  transition ease-out duration-300">
            <span className="flex relative">
              <div className="absolute -right-[10px] -top-[10px] flex items-center justify-center text-[14px] bg-blue-500 rounded-full w-[20px] h-[20px] text-white">
                {totalQuantities || 0}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"></path>
              </svg>
            </span>

            <h3
              onClick={toggleCart}
              style={{ fontWeight: 500 }}
              className="text-[14px] text-black transition ease-out duration-300 ml-2"
            >
              {showCart ? "Hide " : "Show"} Order Summary
              <ExpandLessIcon
                sx={{
                  marginLeft: "2px",
                  color: "#5781f4",
                  fontSize: 20,
                  transform: showCart ? "" : "rotate(180deg)",
                }}
              />
            </h3>
          </div>

          <div className="flex flex-col items-center">
            {cartItems[0]?.original_price && (
              <p
                style={{ fontWeight: 600 }}
                className="text-[12px] text-gray-400 line-through "
              >
                Rs{" "}
                {appliedDiscounts.length > 0
                  ? cartItems[0]?.original_price * 3
                  : cartItems[0]?.original_price}
              </p>
            )}

            <p style={{ fontWeight: 600 }} className="text-[16px] -mt-[4px] ">
              Rs {totalPrice + cartItems[0]?.shipping_charges}
            </p>
          </div>
        </div>

        {showCart && (
          <>
            <MobileCart />
          </>
        )}
      </div>
    </React.Fragment>
  );

  return (
    <>
      {desktopHeader()}

      {mobileHeader()}
    </>
  );
};

export default CheckoutHeader;
