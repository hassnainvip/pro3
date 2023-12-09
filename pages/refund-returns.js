import React, {  useEffect } from "react";
import style from '../styles/staticpages.module.css';

import Footer from './../components/Footer';

import Navbar from './../components/Navbar';
import * as fbq from '../lib/fpixel'



const RefundReturns = () => {

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


      <div className={style.mainContainer} >
        <h2 style={{ fontWeight: '600' }}  className='text-[25px] text-center'>REFUND AND RETURNS POLICY

</h2>
<p className='text-gray-600 text-[12px] text-center' >Last updated on 26-Dec-2022 </p>


<p className=' pt-10' >Thanks for shopping at {companyName}
</p>
<p>In case you are not satisfied with the purchase, we are here to help you out.
</p>
<h3   className=' pt-7' style={{ fontWeight: '600' }} >
RETURNS
</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px', whiteSpace: "pre-line" }} className='text-gray-600 text-[14px] pt-3'>
You can return the product within 14 days after you receive the product, provided that it must not be used, must be in the original packing, and you must have a receipt as proof for purchase. In case if 14 days are passed, we are unfortunate to inform you that we may not be able to refund or exchange. However, you can return the product in case the manufacturer is providing a warranty to the customers due to craftsmanship fault.<br/>

To return the product, you must contact customer support at {companyEmail}, for approval. A return will not be made if the approval is not taken.<br/>

Returns will approximately take 5-working days after the arrival of products. Items will only be returned if they are in their original packing, intact original boxes along with supporting materials like manuals, blank warranty cards, and all the essential documents which were provided with the shipment.<br/>

Certain items cannot be returned and fall under the category of “NOT RETURNABLE”
</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
REFUNDS
</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
As soon as we receive your returned item, we will examine it thoroughly and will notify you that we have received the respective element. Eventually, we will notify you about the status of your reimbursement after we inspect them.<br/>

You will get your refund within 5 working days if the return is accepted. Your money will be refunded to your credit card or through the original method of payment.<br/>

It must be made clear that a product will not be returned and refunded if it is damaged, used, or if the 14 days have been passed.
</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
MISSING REFUNDS


</h3>



<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
If your refund was approved but you still had not received your refund, then check your bank account again, and make contact with your credit card company. It may take a while before your repayment is officially posted. Contact your bank. It may take some processing time before your refund is officially posted. So be patient!<br/>

If you tried all these steps and still have not got your refund, then please drop a message at customer support at {companyEmail}. Our team is available 24/7 to assist you.
</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
SHIPPING


</h3>


<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
You must pay for shipping the products for returning the product. The cost of shipping is non-refundable. <br/>
In case your refund is approved, the cost for shipping will be deducted from your refund.
</p>



<h3   className=' pt-10' style={{ fontWeight: '600' }} >
SALE PRODUCTS

</h3>


<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We have different policies for our regular price products and sale products. In certain cases, you may not be able to return or refund sale items. If you bought a sales product and want to return or refund it, contact the customer care for your assistance.
</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
REPLACE PRODUCTS

</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
The products you bought can only be exchanged or replaced if they are defective or damaged when received by you. In these cases, try contacting support for help.


</p>



    </div>


    <Footer />



    </>
  )
}

export const getStaticProps = async () => {
  const info = await import('../data/companyinfo.json');


  return {
    props: {
      info: info.default,
    },
  };
};

export default RefundReturns