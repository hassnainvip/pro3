import React from "react";
import { client } from "../lib/client";
import { Product } from "../components";
import style from "../styles/home.module.css";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./../components/Footer"));
const Navbar = dynamic(() => import("./../components/Navbar"));
const ProductSkeleton = dynamic(() => import("../components/ProductSkeleton"));
const HeroBanner = dynamic(() => import("../components/HeroBanner"));
import { useInView } from "react-intersection-observer";
const Home = ({ products, bannerData }) => {
  // eslint-disable-next-line
  const [refs, inViewLoad] = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again when it's not in view
    threshold: 0.1, // Adjust this as needed
  });

  return (
    <React.Fragment>
        <Navbar />

      <main ref={refs} className={style.mainContainer}>
        <HeroBanner key={bannerData?._id} heroBanner={bannerData} />
        <div className={style.trendingline}>
          <span />
          <h2>TRENDING NOW</h2>
          <span />
        </div>

        <div className={style.productContainerMain}>
          <div className={style.productSecondContainer}>
            {!products
              ? Array.from(new Array(5)).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))
              : products
                  .slice(0, 10)
                  .map((product) => (
                    <>{product?.visible == true && <Product key={product?._id} product={product} />}</>
                  ))}
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"][0]';
  const bannerData = await client.fetch(bannerQuery);

  const companyInfoQuery = `*[_type == "companyinfo"][0]`;

  const companyInfoList = await client.fetch(companyInfoQuery);

  return {
    props: { products, bannerData, companyInfoList },
  };
};
export default Home;
