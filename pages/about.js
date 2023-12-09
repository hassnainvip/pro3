import React, { useEffect } from "react";
import style from '../styles/staticpages.module.css';

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


import * as fbq from '../lib/fpixel'


const About = () => {




  useEffect(() => {
    if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true')
     {
         fbq.pageview()
     }
  }, []);

    useEffect(() => {
        document.body.classList.add("index"); // Add the class to the body element on mount

        return () => {
          document.body.classList.remove("index"); // Remove the class from the body element on unmount
        };
      }, []);







  return (

    <>

    <Navbar />


    <div className={style.mainContainer} >
        <h2 style={{ fontWeight: '600' }}  className='text-[25px] text-center'>ABOUT US
</h2>
<p className='text-gray-600 text-[12px]  text-center' >Last updated on 26-Dec-2022 </p>



<p style={{ lineHeight: '25px', paddingBottom: '10px', whiteSpace: "pre-line" }} className='text-gray-600 text-[14px] pt-3'>
Here at vovo.com.pk, we are enthusiastic to offer distinctive, exclusive, outstanding, and number one source for all kinds of electronic gadgets by discovering the innovative era of the digital world providing products suitable to your choice by online shopping or drop shipping. When we were not able to find the right place to buy gadgets online, we decided to make our platform where we can assist our audience in buying the products they need. We opted to devote ourselves to providing the services to the audience based on dependability, customer service, and uniqueness.
</p>


<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We are striving to serve our mission to achieve the highest level of customer support. Our team is available 24/7 to assist the clients. Moreover, our cutting-edge e-commerce platform and high-class brands do the job of providing customer contentment perfectly. We, as a brand, trust in the power of open source to change the globe.
</p>




<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We are the future lifeline of our customers. We are not only dedicated to building a lifeline for our customers but also, we are planning to advance it every day through our commitment to innovation.


</p>



<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We are providing several special deals in products & accessories related to electronics like computers including desktops, laptops, tablets, mobile phones, Audio accessories like headphones, speakers, players, chargers, DSLRs, TV & videos, and a lot more stuff related to the electronic gadget to help you out in picking up the best variety out of the lot, and all available at suitable prices. We are also offering home deliveries to assist the buyers. Payment through Credit/debit card and cash on delivery is provided to the customers for their assistance.



</p>



<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
To assist our customers to select the best product, we offer unparalleled products to customers along with detailed product descriptions, reviews of the previous clients, expert opinions, tutorials of the products, and the ability to contact other members of our community.


</p>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We are a team of passionate people who are determined to make it easier for the customers to shop online with just one click which can eventually provide them with the product they are looking for, at their door-step. We are here for you and we are excited to help you out. We dream to put our customers as our priority.


</p>



<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We are providing a wide range of opportunities to our protentional buyers by offering hundreds of electronic gadgets which are available very easily through drop shipping. If you have not gone through the products and haven’t bought one, you must scroll through the products to avail of unlimited affordable offers. We promise that you will enjoy our products as much as we do while offering them. For any assistance or queries, you can drop your messages here or can email us. Our 24/7 available team working day & night will be extremely delighted to help you out.


</p>




<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
To contact us, E-mail at <a href='mailto:' className='text-blue-500 font-bold' > info@vovo.pk. </a>
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




export default About