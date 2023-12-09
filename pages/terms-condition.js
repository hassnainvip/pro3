import React, {  useEffect } from "react";
import style from "../styles/staticpages.module.css";
import Navbar from "./../components/Navbar";
import * as fbq from '../lib/fpixel'
import Footer from './../components/Footer';

const TermsCondition = () => {

  const companyName = process.env.NEXT_PUBLIC_WEBSITE_NAME;
  const companyEmail = process.env.NEXT_PUBLIC_WEBSITE_EMAIL;

  useEffect(() => {
    if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true')
    {
        fbq.pageview()
    }
  }, [])

  return (
    <>
       <Navbar />

      <div className={style.mainContainer}>
        <h2 style={{ fontWeight: "600" }} className="text-[25px] text-center">
          TERMS & CONDITIONS
        </h2>

        <p className=" pt-10">Welcome to {companyName} </p>
        <h3 className=" pt-7" style={{ fontWeight: "600" }}>
          INTRODUCTION
        </h3>

        <p
          style={{
            lineHeight: "25px",
            paddingBottom: "10px",
            whiteSpace: "pre-line",
          }}
          className="text-gray-600 text-[14px] pt-3"
        >
          The following terms and conditions must be followed to access to and
          use the services, content, and functionality provided on the website.
          Access to the site is based on your acceptance of and compliance with
          these terms. You are required to read the terms of service carefully
          and accept them before you start using the site. <br />
          You must agree to these terms on behalf of yourself, your company,
          association, organization, government, or any other legal entity for
          opening the site, using the account, or clicking to accept the terms &
          services when the option pops up to you. In case, if you do not accept
          the terms & conditions, it is requested to not use the website or
          services.
          <br />
          The site is made available to users who are over the age of 13. If you
          are under 13 you may not use the services offered on-site.
          <br />
          By using the site, you represent and warrant that a). as an entity you
          are legally bound to the terms of services b). over the age of 13 (of
          legal age) to meet the eligibility criteria c). You or your entity are
          not barred from using or accepting the services and terms under the
          laws of the jurisdiction.
          <br />
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          SCOPE
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          These terms govern your access to and use of the services available on{" "}
          {companyName} . It must be noted that these terms are void and
          nullified in the case of Third-Party products, which may be governed
          by their Terms of Services.
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          INCORPORATED TERMS
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          As an integral part of the terms of services, the policies,
          agreements, and guidelines, which are incorporated here must also be
          followed. The incorporated terms to which you must bound to include:{" "}
          <br />
          Privacy policy <br />
          Refund terms <br />
          Shipping Policy <br />
          Cookies policy <br />
          Payment Policy <br />
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          CREATING AN ACCOUNT
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          You are not required to have an account if you want to search or
          browse products, product reviews, and/or FAQs. However, you are
          required to create an account to place an order and enjoy services,
          special promotions, and activities that are available only for
          registered members. The customer visiting the site must provide
          legitimate and precise data. Any wrong filling of the information may
          result in the suspension of the account without any further notice.
          The customer must provide his/her full name, email address, zip code,
          city, username, etc. The information we take from the customer is
          subject to our privacy policy. <br />
          Customers are solely responsible for the information they provide.{" "}
          {companyName} will not be responsible and won’t compensate in case
          wrong information prevents shipment, deliveries, or custom clearance.{" "}
          <br />
          Each client is permitted to register one account at a time to assure
          safety and security. Multiple creations of accounts may result in the
          suspension of the account. <br />
          We, and our team, always conform to the laws of the jurisdiction. It
          is requested to customers fulfill the laws in their respective
          countries for the continuous availability of services on site. <br />
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          SECURITY
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          The customer is responsible for maintaining the account security and
          services ordered or accessed. You are not allowed to share your
          account credentials with a third party. <br />
          We take the responsibility for the security of credit cardholder
          information as far as we have control over data. <br />
          {companyName} will provide a technical, social, organizational, and
          physical security environment for customer data stored. <br />
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          CURB LIABILITY
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          Being allowed by the laws, neither {companyName} nor its members will
          be liable to the customer in case a customer loses revenues or
          profits. We will also be not responsible in case of any significant,
          indirect, or punitive damage that may arise out of the services or
          terms.
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          INTELLECTUAL PROPERTY RIGHTS
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          The intellectual property rights in all the content like logo, text,
          graphics, buttons, icons, descriptions, products or images, etc made
          available to you through this website will remain the property of{" "}
          {companyName} and will be protected by the copyright laws across the
          globe. You can print, store, and display the content only for your
          purposes solely. It is prohibited for you to manipulate, reproduce, or
          distribute, in any format. Any content that appears on the website is
          prohibited to be used for business or commercial enterprise. <br />
          {companyName} does not own the content you provide to us and thus does
          not claim any intellectual right to such content. You grant us all the
          trademarks, patents, copyrights, and intellectual rights in case you
          provide content using the services. <br />
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          TERMS & CONDITIONS FOR PRICING AND PAYMENT
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          Product prices at {companyName} continue to change from time to time
          without notice. The prices of the products exclude the pricing of
          import tax, duties, and V.A.T. Payment of these is the responsibility
          of the customer.
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          DISPUTE RESOLUTION
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          Customers must accept that all disputes will be governed by the
          country and the state’s law. Clients can cancel their order at any
          time before the product is shipped. Please contact customer support at
          {companyEmail} for assistance. Keep in mind, that if the
          order is dispatched you will no longer be able to cancel the order.
          However, we have a separate refund policy in case of any damage.
        </p>

        <h3 className=" pt-10" style={{ fontWeight: "600" }}>
          CUSTOMER’S CONDUCT
        </h3>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          Our team is available 24/7 to assist and satisfy the customer in any
          perspective courteously, politely, and friendly. However, any
          undesirable, unfair, or misconduct towards any of our team members
          will not be tolerated at all. <br />
          Undesirable, unfair, or misconduct towards our customer care support
          or {companyName} may include the following:
          <br />
          Threatening behavior, for example, being aggressive, abusive, racist,
          sexist, unproven allegations, or using menacing language. For example,
          direct or implied threats at any communication level through any
          network.
          <br />
          Wrong allegations, persistent complaints despite the matter being
          fully addressed and solved, altering the nature of the complaint,
          and/or demanding unrealistic outcomes beyond the scope of our
          processes and policies. For the behavior listed above, complaints must
          be advised and formally notified the following:
          <br />
          The intimidating, aggressive, and abusive language must be considered
          wholly intolerable.
          <br />
          Such language must refrain there should not be given a response if
          unacceptable behavior persists.
          <br />
        </p>

        <p
          style={{ lineHeight: "25px", paddingBottom: "10px" }}
          className="text-gray-600 text-[14px] pt-3"
        >
          Thanks for shopping at {companyName} .
        </p>
      </div>

      <Footer />

    </>
  );
};

export const getStaticProps = async () => {
  const info = await import('../data/companyinfo.json');

  return {
    props: {
      info: info.default,
    },
  };
};

export default TermsCondition;
