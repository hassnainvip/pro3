import React, { useEffect } from "react";
import style from '../styles/staticpages.module.css';

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

import * as fbq from '../lib/fpixel'




const CookiePolicy = () => {


  const companyName = process.env.NEXT_PUBLIC_WEBSITE_NAME;
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
        <h2 style={{ fontWeight: '600' }}  className='text-[25px] text-center'>COOKIE POLICY


</h2>
<p className='text-gray-600 text-[12px] text-center' >Last updated on 26-Dec-2022 </p>


<p className=' pt-10' >By using the services at boxmedium.com, you consent to the use of cookies. <br/>

{companyName} and its members as a team know that your privacy is important to the data subject. This cookie policy is devised to explain what are cookies, how, and why cookies should be stored, how our site uses cookies, and how a third may use the cookies on the services provided.<br/>

To make our website work properly, we have placed some small files as cookies on your device. Most websites and blogs do the same.<br/>

The cookie policy should be related to and must be read along with the privacy policy & TERMS & CONDITIONS.<br/>

To continue browsing, and using the website, you must agree to our cookie policy that is, we can access & store important cookies as elaborated in the policy.<br/>

</p>

<h3   className=' pt-7' style={{ fontWeight: '600' }} >
WHAT ARE COOKIES

</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px', whiteSpace: "pre-line" }} className='text-gray-600 text-[14px] pt-3'>
To enable us to remember your actions & preferences including log-in, language, font-size, or display predilection details, small pieces of text files are sent from our site to your browser saved on to your computer or mobile so that you do not need to renter information each time you visit the site.


</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
HOW WE USE COOKIES

</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We may place several cookies on your browser while you access our services. These cookies will be used for future reference. <br />

{companyName} uses cookies for the following key purposes: <br />

a). To allow particular functions of the services. <br/>

b). To access your location <br/>

c). To store your actions & preferences <br/>

d). Enabling advertisement deliveries <br/>

e). For analytic & research <br/>

f). To identify the device and browser you are using <br/>

</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
CATEGORIZATION OF COOKIES



</h3>



<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We categorize cookies into the following four categories:


</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
ESSENTIAL COOKIES



</h3>


<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
The cookies that allow you to log in, add items to your cart, or security checks, etc fall in essential cookies. They are related to the regular operation of the site. Essential cookies also enable the website to remember your previous action. They are essential for our website to work.


</p>



<h3   className=' pt-10' style={{ fontWeight: '600' }} >
FUNCTIONAL COOKIES

</h3>


<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
These cookies enable the site to carry out its operation following the choices you make while browsing the site. Based on your preferences, these cookies allow us to customize your experience on the site by adjusting text size, fonts, or languages.


</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
ANALYTICAL COOKIES


</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
To track what sort of content is being visited most frequently, & the location of the visitors, these cookies are used to improve the website workings. These cookies allow us and third party to analyze how the site is being used by the customers, and how is it performing



</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
TARGETING COOKIES



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We use these cookies to deliver content suitable to you and your interests. These also enable us to serve ads or manage them when you visit our site. We record your visit to our site and the content you interacted with through these cookies. They also limit the number of times you see a particular ad.





</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
WHY DO WE USE COOKIES?




</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
First-party and third-party cookies (see the terms below in the next session) are used for several reasons. Some of these cookies are essential or necessary for our website to operate required for technical reasons. Other cookies enable our site to keep track and target of interest of users so that we can enhance the experience of our dearest customers who visit our site.





</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
HOW CAN YOU CONTROL COOKIES?



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
Cookies can be controlled or deleted according to your will. All the cookies that are on your mobile or desktop can be deleted. You can also prevent the browsers to place cookies on your drive. However, in such a case you may have to renter essential information or make preferences manually every time you enter the site or try to access the services. Some services may not be available in that case.






</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
ACCEPTANCE AND REJECTION OF COOKIES



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
The visitor or user bears the right to either accept or reject the cookies. On your first visit to the site, a notification will pop-up asking you to accept or reject the cookies. <br />

You must provide unequivocal consent to our usage of cookies. You may reject browser cookies, however, we will continue to capture essential cookies to provide you with the best services. <br />

It must be noted that essential cookies cannot be rejected at all as they are necessary. <br />





</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
Some Frequently used terms



</h3>

<h3   className=' pt-3' style={{ fontWeight: '600' }} >
FIRST PARTY COOKIES:




</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
First-party cookies are set by our site and can only be read by the site.  These cookies are essential to provide the services.






</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
THIRD-PARTY COOKIES



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
Third-party cookies are set by anyone else other than {companyName} while accessing or using the site. Third-party cookies are out of our control, so, you can turn them off but not through us.







</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
PERSISTENT COOKIES



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
When you accept the cookies, these cookies are used to remove the message which first appeared on the site when you first visited the site. These cookies are used to enhance your experience working with us.






</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
SESSION COOKIES



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
These are temporary cookies that are deleted when the browser you are browsing gets closed. We use these cookies to track internet usage when the user visits the site.




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

export default CookiePolicy