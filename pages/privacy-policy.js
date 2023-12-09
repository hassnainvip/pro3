import React, { useEffect } from "react";
import style from '../styles/staticpages.module.css';

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

import * as fbq from '../lib/fpixel'



const PrivacyPolicy = () => {


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
        <h2 style={{ fontWeight: '600' }}  className='text-[25px] text-center'>PRIVACY POLICY
</h2>
<p className='text-gray-600 text-[12px]  text-center' >Last updated on 26-Dec-2022 </p>


<h3   className=' pt-7' style={{ fontWeight: '600' }} >
INTRODUCTION TO WHO WE ARE
</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px', whiteSpace: "pre-line" }} className='text-gray-600 text-[14px] pt-3'>
We on behalf of our team are working day and night to protect, secure, and save the privacy of our potential users or customers (you). {companyName} is the data controller of the personal data of its visitors. We as a team respect our client’s privacy and assure safety.
</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
ABOUT PRIVACY POLICY

</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
We have developed this privacy policy to guard your essential information by explaining how we collect, use, and divulge the information you provide us while visiting our site. We collect the information by two means. An offline mean-in which we use mobile phone, posts, or face to face meeting. And an online means through which you use our website owned or operated by {companyName}. <br/>

By accepting this privacy policy, you agree and acknowledge that your data including the one collected through your use of services provided on the site will be collected, stored, and may be processed and shared by this privacy policy. <br/>

{companyName} reserves every right to reserve, amend, or change in this privacy policy at any-time for any reason. Our team will alert you about any changes made to the privacy policy through email by updating the last updated date in the privacy policy. <br/>

To stay updated on the privacy policy, it is requested to keep visiting the privacy policy section of the site. <br/>
</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
WHAT SORT OF INFORMATION DO WE COLLECT?


</h3>



<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
{companyName} may collect the following essential information of yours:<br/>

Personal data collected by us include account registration and interactions which maybe your essential feedback, review, comments, or testimonials. The data we collect is the only one provided by you voluntarily. We usually collect your name, email address, telephone number, shipping address, age, gender, city, and interests.<br/>

{companyName} does not oblige you to provide us with your personal information, however, in certain circumstances, you might not be able to use certain services if you deny providing important information.<br/>



Your data is collected when you contact us or when we contact you. {companyName} holds the rights to keep the record for future correspondence.<br/>

We also collect data when you place an order on the site, and transact with us.<br/>

Data is also collected when you register for a program offered by the site. Financial data, data related to your creditworthiness, or any criminal or fraudulent activities to the site by you or third-party may also be collected.<br/>

Personal data due to interaction through social media like Facebook, Instagram, Twitter, etc may also be collected.<br/>

We may also collect data for research purposes in case you complete a survey. Metadata on your device, location, and your public information will be collected and some of which may be stored and used for public sharing.<br/>
</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
WHY WE USE YOUR INFORMATION



</h3>


<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
The information that you provide is used by us for specific purposes for which the information was provided by you, as asserted at the time of collection, and as otherwise allowed by the law. The purpose of the information you provided include:

<ul style={{ listStyleType: 'disc', marginLeft: '20px', paddingTop: '8px', }}>
  <li>To enhance and personalize your experience with us</li>
  <li>To improve the site and buying of goods experience</li>
  <li>To improve services provided by the site to its potential users</li>
  <li>To manage the transactions including the execution of payment, and delivering the purchased product and services.</li>
  <li>To conduct a survey, administer a contest, or special promotion</li>
  <li>To send emails periodically</li>
  <li>To manage the account and subscriptions of the users.</li>
  <li>To prevent frauds</li>
  <li>To sustain the security of the site</li>
  <li>To research</li>
  <li>Marketing communications</li>
  <li>To interact with other users</li>
</ul>

</p>



<h3   className=' pt-10' style={{ fontWeight: '600' }} >
RIGHTS OF THE CUSTOMERS

</h3>


<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
{companyName} takes rational steps to make sure that then the information provided by you is accurate, correct, complete, and up-to-date. The customers or the visitors have the right to access their personal information, correct or delete it. Customer also bears the right to limit, constrain, or object at any time to further processing of the information. The customer has every right to receive his/her personal information and also has permission to share it with any third party.
</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
HOW INFORMATION ABOUT CUSTOMERS IS PROTECTED

</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
The customer is solely responsible for the protection, safety, and security of his / her username and password. It is recommended to use a strong password. Try using upper case letters, lower case letters, a special character, and a number in your password. <br />

Having said that, {companyName} offers its customers a lot of safety and security in terms of information provided by the user including the use of a secure server. Sensitive information including the credit information is transmitted safely and encrypted into the payment entry providers database. The information thus stored can only be accessed by authorized individuals and will be kept confidential. Once a transaction is done your private information including your credit cards, social security numbers, and financials will not be used by us. <br />

{companyName} is securely scanned and fully verified. <br />
</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
DOES THIS SITE USE COOKIES?


</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
Yes, we use small text files that are incorporated into your browser to provide us with certain information. For more details about cookies, please have a look at our cookies policy or contact customer care support at {companyEmail}.
</p>












<h3   className=' pt-10' style={{ fontWeight: '600' }} >
DOES YOUR INFORMATION DISCLOSURE TO THIRD PARTIES?

</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
No personal information is sold, traded, or otherwise transferred to any outside party outside {companyName}. This excludes our trusted third parties who help {companyName}in operating the site, conduction the business, executing the payment, and delivery of the purchased products. We keep the contract of sharing the information if both parties keep it confidential. We may release your information when we realize that the release is appropriate in compliance with the laws.
</p>






<h3   className=' pt-10' style={{ fontWeight: '600' }} >
HOW LONG DOES THE SITE RETAIN YOUR INFORMATION?



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
The key information of the customers will be retained as long as it is necessary to achieve the purposes outlined in this privacy policy.


</p>





<h3   className=' pt-10' style={{ fontWeight: '600' }} >
POLICY FOR CHILDREN


</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
{companyName} will not knowingly ask for information from children under the age of 13. We also do not market to children under the age of 13. If you think we have mistakenly taken data from children, it is requested to you to contact our customer support at {companyEmail}.
</p>






<h3   className=' pt-10' style={{ fontWeight: '600' }} >
DO NOT TRACK SIGNALS



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
Your website might have an option of “DO NOT TRACK” which enable the site not to track the user visited site. Currently, the site does not respond to the do not track feature.


</p>



<h3   className=' pt-10' style={{ fontWeight: '600' }} >
CONSENT


</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
By using this site, you must agree to the use of cookies and other tracking technologies according to this policy. A pop-up notification may arise when you first visit the site, by clicking to which you accept the policy.


</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
TERMS AND CONDITIONS



</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
It is requested to visit our terms and conditions section to establish the use, disclaimer, and limitations governing the site at terms and conditions.


</p>


<h3   className=' pt-10' style={{ fontWeight: '600' }} >
UPDATES TO OUR PRIVACY POLICY


</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
In case if we update our privacy policy, we will update the last updated date at the top of this page. You can also contact support in case of any assistance needed.


</p>

<h3   className=' pt-10' style={{ fontWeight: '600' }} >
CONTACT US


</h3>

<p style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
If there is something, that is not clear to you, any improvements that you note are supposed to be present, or if you want to exercise your rights, you are requested to contact us at {companyEmail}.

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




export default PrivacyPolicy