import React, { useState, useEffect } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Grid } from "@mui/material";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Image from 'next/image'

const DetailsBox = ({ heading, para }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        onClick={toggleModal}
        className="border-[1px] border-gray-300 px-[15px] py-[12px] max-w-[686px] cursor-pointer"
      >
        <span className="flex items-center space-x-10 justify-between  border-gray-300 ">
          <h3
            style={{ fontWeight: 500 }}
            className="text-gray-500 text-[14px] "
          >
            {" "}
            {heading.toUpperCase()}{" "}
          </h3>
          <ExpandMoreRoundedIcon
            sx={{
              color: "#4c4c4c",
              transform: showModal ? "rotate(180deg)" : false,
            }}
          />
        </span>
      </div>


      {showModal && (
        <div  className="border-[1px] border-gray-300 px-[15px] py-[12px] max-w-[686px] z-[-1] ">
          <span className="flex items-center justify-between  border-gray-300 ">
            <h3
              style={{ fontWeight: 500 }}
              className="text-gray-900 text-[12px] "
            >
              {para}
            </h3>
          </span>
        </div>
      )}


    </>
  );
};



const BannerText = ({image, mainText, subText}) => {
  return(

    <div className="relative">
    <div className=" mx-auto overflow-x-hidden  z-[-1]">
      <div className="relative">
        <div className=" bg-black opacity-60  z-[-1]" />
        <Image
        width={400}
        height={290}
        alt="faq image"
          className="w-full  max-h-[290px] object-cover z-[-1] "
          src={image}
        />
      </div>
    </div>

    <div
      style={{ maxWidth: "90rem", fontWeight: 600 }}
      className="mx-auto  z-50"
    >
      <div className="z-50 absolute mx-2 sm:mx-auto sm:bottom-[100px] bottom-[30px]">
        <h2
          style={{ fontWeight: 600 }}
          className=" text-white sm:text-[25px] text-[16px] "
        >
           {mainText}
        </h2>
        <h2
          style={{ fontWeight: 500 }}
          className=" text-gray-200 sm:text-[23px] text-[12px]"
        >
           {subText}
        </h2>
      </div>
    </div>
  </div>

  )
}

const Faq = () => {
  const firstTab = [
    {
      headingText: "How to buy a product",
      paraText:
        "You can order through our website, email, telephone, or WhatsApp.",
    },
    {
      headingText: "HOW CAN I FIND A PRODUCT?",
      paraText:
        "There is a search bar on the top right corner of our website. You can just type your required products, find them, and read the details about the product. Also, there is a web page of the named product, you are required to just click the product and all products will be shown. In case if you face any difficulty in finding the products, just drop an email to us.",
    },
    {
      headingText: "WHEN WILL YOU OFFER A SALE OR DISCOUNT ON PRODUCTS?",
      paraText:
        "Throughout the year we offer sales on new products and the discount will be up to a maximum of eighty percent of the original price.",
    },
    {
      headingText:
        "IS BOOKLET TO USE OR HANDLE THE PRODUCT (-THE MANUAL) IS AVAILABLE WITHIN THE PACKAGE?",
      paraText:
        "Yes, the booklet is available within the package for most of the products.",
    },
    {
      headingText: "ARE YOUR PRODUCTS SAFE TO USE FOR THE HUMAN BODY?",
      paraText:
        "Yes, our all products are completely safe to use for anyone because we consider customer safety first and did not use any harmful material for composting or packaging the material.",
    },
    {
      headingText: "WHAT IS THE MAXIMUM YOU TAKE TO DELIVER A PRODUCT?",
      paraText:
        "We deliver our product minimum within 24 hours and maximum within 4 days.",
    },
    {
      headingText: "HOW TO TRACK MY ORDER?",
      paraText:
        "When you order any of our products, we will issue an order number. If you want to track your order, just email us your order number with the request of the track, we will respond to you as soon as possible.    ",
    },
    {
      headingText: "WILL YOU SEND AN EMAIL TO CONFIRM MY ORDER?",
      paraText:
        "Yes, after successfully placing an order, we will email you the confirmation with the order number and order details.    ",
    },
  ];

  const secondTab = [
    {
      headingText: "WHAT IS THE REFUND POLICY?",
      paraText:
        "You can refund any product within 14 days, but it should not be used or damaged. Please have a look at our refund policy for a detailed answer.",
    },
    {
      headingText: "CAN WE CANCEL OUR ORDER?",
      paraText:
        "You can cancel your order within two hours after successfully placing the order. Your payment will be refunded within 48 hours.",
    },
    {
      headingText: "CAN WE RETURN OUR ORDER IF IT ARRIVED DAMAGED?",
      paraText:
        "Yes, you can return or replace your order if it arrived damaged. Just visit our website to see the return policy or email us.",
    },
    {
      headingText:
        "WHAT IF ANOTHER RETAILER SELLS A PRODUCT CHEAPER THAN YOU?",
      paraText:
        "If you find any issue in price matching, just email us, we will correct this. If you find an issue after buying, we will refund the extra amount.",
    },
    {
      headingText: "HOW TO GIVE FEEDBACK ON YOUR SERVICES AND PRODUCTS?",
      paraText:
        "There is a feedback option on the homepage of our website. We are always excited to hear from you. Your feedback is highly appreciated.",
    },
    {
      headingText: "WHAT DO I DO IF I ENTERED AN INCORRECT SHIPPING ADDRESS?",
      paraText:
        "Contact us immediately through Call, WhatsApp or Email we will update your shipping address.",
    },
    {
      headingText: "HOW TO CONTACT YOU?",
      paraText:
        "If you feel any issues, feel free to contact us through email or telephone ",
    },
    {
      headingText: "HOW TO ASK A QUESTION THAT IS NOT LISTED ABOVE?",
      paraText:
        "Haven’t found what you are looking for? Just drop an email to us so that we can assist you in the best way we can…",
    },
  ];

  const bannerData = {imageUrl: "/faqimage.webp", headingText: "Customer Help", subHeading: "Our happiness team is always here to assist." }

  useEffect(() => {
    document.body.classList.add("index"); // Add the class to the body element on mount

    return () => {
      document.body.classList.remove("index"); // Remove the class from the body element on unmount
    };
  }, []);
  return (
    <>


    <Navbar />

    <main className='min-h-screen pb-40'>

   <BannerText image={bannerData.imageUrl} mainText={bannerData.headingText} subText={bannerData.subHeading} />


   <Grid
  sx={{
    maxWidth: '90rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 7,
  }}
  container
  spacing={1}
>
          <Grid item xs={12} lg={6}>
          <div
        style={{ maxWidth: "85rem", fontWeight: 600 }}
        className="mx-auto  z-50  border-r-2 border-gray-200"
      >

        <div className=" mb-5">
          <h2
            style={{ fontWeight: 500 }}
            className=" text-gray-400 text-[14px] "
          >
            Common purchase queries answered
          </h2>
          <h2 style={{ fontWeight: 500 }} className=" text-black text-[28px] ">
            Orders and Shipping
          </h2>
        </div>

        {firstTab.map((data) => (
          <DetailsBox
            key={data?.headingText}
            heading={data?.headingText}
            para={data?.paraText}
          />
        ))}

      </div>
          </Grid>
          <Grid item xs={12} lg={6}>
          <div
        style={{ maxWidth: "85rem", fontWeight: 600,  }}
        className="mx-auto sm:px-4 z-50"
      >
        <div className=" mb-5">
          <h2
            style={{ fontWeight: 500 }}
            className=" text-gray-400 text-[14px] "
          >
           If you need to swap an item

          </h2>
          <h2 style={{ fontWeight: 500 }} className=" text-black text-[28px] ">
          Returns and Exchanges
          </h2>
        </div>

        {secondTab.map((data) => (
          <DetailsBox
            key={data?.headingText}
            heading={data?.headingText}
            para={data?.paraText}
          />
        ))}
      </div>
          </Grid>


          </Grid>



</main>
    <Footer  />



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

export default Faq;
