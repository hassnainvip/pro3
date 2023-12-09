
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
// import OrderDetails from "./../components/OrderDetails";
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router';
import { GridLoader  } from "react-spinners";
import { useLoadingStateContext } from "../context/LoadingContext";
// import CheckoutHeader from './../components/CheckoutHeader';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from './../components/Footer';


import shippingText from './../lib/shippingText';

const OrderDetails = dynamic(
  () => import('./../components/OrderDetails'),
  { ssr: false }
);

const CheckoutForm = dynamic(
  () => import('./../components/CheckoutForm'),
  { ssr: false }
);

const CheckoutHeader = dynamic(
  () => import('./../components/CheckoutHeader'),
  { ssr: false }
);

const Checkout = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const [productForForm, setProductForForm] = useState([]);
  const [isDiscountApply, SetIsDiscountApply] = useState([]);

  const { loading, setLoading } = useLoadingStateContext();
  const { setCartItems, setTotalPrice, setTotalQuantities, cartItems, setAppliedDiscounts } = useStateContext();
  const router = useRouter();
  const discount = router.query.discount;



/* eslint-disable */


  useEffect(() => {
    SetIsDiscountApply(cartItems[0]?.discount)
    setProductForForm(cartItems[0])

    // if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true')
    //  {
    //      fbq.pageview()
    //  }

 if(cartItems.length ===  0 ) {
  router.push('/');
 }

  }, [])



  useEffect(() => {


    const endSession = () => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice([]);
      setTotalQuantities([]);
      setAppliedDiscounts([]);
      setLoading(false);
  
    };
  

    const handleRouteChange = () => {
      endSession();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  var shippingT = shippingText(cartItems[0]?.shipping_options);

/* eslint-enable */


  return (
    <React.Fragment>
{loading && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <GridLoader className="text-white" color="#36d7b7" />
  </div>
)}


    <CheckoutHeader />


{productForForm && isDiscountApply &&
<div  className="bg-white">

      <div style={{ maxWidth: '84.6rem' }} className="bg-white min-h-screen sm:mt-7 mt-1 justify-center pb-20 px-2 sm:px-0 mx-auto sm:pb-40   ">
        <Grid container spacing={isMobile ? 0 : 5 }>
          <Grid item xs={12} lg={6}>
            <CheckoutForm product={productForForm} discount={isDiscountApply} selectedOption={discount} />
          </Grid>
          <Grid sx={{ marginTop: 1, }} item xs={12} lg={6}>
            <div className="flex flex-col space-y-3">
              <span>
                <p className=" fontbolda text-[13px]"> DELIVERY CHARGES </p>
                <p className="text-gray-500 text-[13px]">
                  {" "}
                  Delivery charges will be applied by courier{" "}
                </p>
                <span className="mt-2 flex justify-between items-center bg-white px-3 py-[14px]   shadow-sm shadow-slate-500/50">
                  <span className="pay-heading"></span>
                  <p className="flex-1 font-bold text-[13px]">DELIVERY CHARGES</p>
                 <p className="text-red-500 font-bold text-[13px]">{shippingT}</p>
                             
                </span>
              </span>

              <span>
                <p className=" fontbolda text-[12px]">PAYMENT METHOD</p>
                <p className="text-gray-500 text-[12px]">
                  Pay cash at your doorstep & make it safe
                </p>
                <span className="mt-2 flex justify-between items-center bg-white px-3 py-[14px] shadow-sm shadow-slate-500/50">
                  <span className="pay-heading"></span>
                  <p className="flex-1 font-bold text-[12px]">CASH ON DELIVERY</p>
                </span>
              </span>

              <span>
                <p className="hidden sm:block font-bold text-sm">ORDER SUMMARY</p>
                <p className="hidden sm:block text-[14px]">
                  Review your order before placing the order
                </p>
                <OrderDetails />
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
      </div>
      }

    <Footer />


    </React.Fragment>
  );
};

export default Checkout;
