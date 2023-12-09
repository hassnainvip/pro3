import { useState, useEffect, Fragment } from "react";
import { client, urlFor } from "../../lib/client";
import styles from "../../styles/slug.module.css";
import { useInView } from "react-intersection-observer";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import trackFacebookPixelEvent from "../../utils/facebook-pixel-server";
import {generateUniqueEventID} from '../../lib';

let TiktokPixel;
import Image from "next/image";

if (process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CONTROLER === "true") {
  import("tiktok-pixel").then((module) => {
    TiktokPixel = module.default;
  });
}

import {
  Footer,
  DiscountApply,
  Navbar,
  ProductDetailsSecond,
  BuyNow,
  BuyNowMobile,
} from "./../../components";

import * as fbq from "../../lib/fpixel";
import Cookies  from 'js-cookie';

const ProductDetails = ({ product, companyInfoList }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const [selectedOffer, setSelectedOffer] = useState("1");
  const [shouldRender, setShouldRender] = useState(false);
  const [isScrolled, setIsScrolled] = useState();
  const [isScrolledMobile, setIsScrolledMobile] = useState();

  const fbcCookieValue = Cookies.get("_fbc");
  const uniqueEventID = generateUniqueEventID();


  const { qty, onAdd } = useStateContext();
  const { image, name, price, woocommerceid, slug } = product;
  const startRecommended = "/star.svg";
  const router = useRouter();

  const handleBuyNow = () => {
    if (selectedOffer === "1") {
      onAdd(product, qty);
      router.push("/cod");
    } else if (selectedOffer === "2") {
      onAdd(product, qty);
      router.push({
        pathname: "/cod",
        query: { discount: "discount_applied" },
      });
    }
  };

  const [refs, inViewLoad] = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again when it's not in view
    threshold: 0.1, // Adjust this as needed
  });
  const { ref, inView } = useInView({
    threshold: 0, // adjust this value as needed
  });

  // Update the state to render the component once it's in view
  useEffect(() => {
    if (inViewLoad) {
      setShouldRender(true);
    }
  }, [inViewLoad]);

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === "true" &&
      inViewLoad
    ) {
      fbq.pageview();

      fbq.event("ViewContent", 
      {
        content_ids: product._id,
        content_type: "product",
        content_name: product.name,
        value: product.price,
        currency: "PKR",
      },
      uniqueEventID
      
      
      );
    }


    // server side facebook tracking

    trackFacebookPixelEvent(
      [
        {
          action_source: "website",
          event_name: "ViewContent",
          custom_data: {
            page_url: `/${slug.current}`,
            content_category: "Product Page",
            content_type: "product",
            content_name: name,
            currency: "PKR",
            value: price,
            content_id: woocommerceid,
            country:
              "79adb2a2fce5c6ba215fe5f27f532d4e7edbac4b6a5e09e1ef3a08084a904621",
          },
        },
      ],
      { fbc: fbcCookieValue },
       uniqueEventID
    );



  }, [fbcCookieValue, inViewLoad, name, price, product._id, product.name, product.price, slug, uniqueEventID, woocommerceid]);

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CONTROLER === "true" &&
      inViewLoad
    ) {
      TiktokPixel.track("ViewContent", {
        content_type: "product",
        quantity: 1,
        content_name: name,
        content_id: name,
        currency: "PKR",
        value: price,
      });
    }
  }, [inViewLoad, name, price]);

  const checkIsScrolledMobile = () => {
    if (window.scrollY >= window.innerHeight * 1.2) {
      setIsScrolledMobile(true);
    } else {
      setIsScrolledMobile(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      window.addEventListener("scroll", checkIsScrolledMobile);
    }
    return () => {
      window.removeEventListener("scroll", checkIsScrolledMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    if (inView) {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const minThreshold = 200; // adjust this value as needed

        if (scrollTop > minThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [inView]);


  const productImage = urlFor(image && product.image[0]).url();
  const productSC = product?.shipping_charges;

  const productSCT = product?.shipping_options;


  

  return (
    <Fragment>
      {companyInfoList && <Navbar companyInfo={companyInfoList} />}
      <div className={styles.mainContainer}>
        <div ref={ref} className={styles.secondContainer}>
          {/* {isImageLoading ? <Skeleton width={390} height={390} /> : null} */}

          <Image
            width={700}
            height={700}
            src={productImage}
            alt="product image slug"
            blurDataURL="data:..."
            priority={true}
            placeholder="blur"
          />

          {!isMobile && isScrolled && (
            <BuyNow discount={selectedOffer} item={product} />
          )}
        </div>
        {/*  */}
        <div className={styles.productMainContainerdiv}>
          <h2 className={styles.productMaindivh2}> {product.pre_title} </h2>
          <h2 className={styles.product_title}>{product.name}</h2>
          <h2 className={styles.productDescription}>{product.discription}</h2>

          <span className={styles.productcontainerspan}>
            <span>
              {[...Array(5)].map((_, index) => (
                <Image
                alt="alt image slug 2"
                  priority={true}
                  width={100}
                  height={100}
                  key={index}
                  src={startRecommended}
                />
              ))}
            </span>

            <h2>{product.customer_rating}</h2>
          </span>

          {product?.original_price && selectedOffer === "1" && (
            <h2 className={styles.regualar_price}>
              <strong style={{ fontWeight: 500 }}>Regularly</strong>{" "}
              <strong style={{ fontWeight: 500 }}>
                {" "}
                Rs {product.original_price}
              </strong>
            </h2>
          )}
          {product?.original_price && selectedOffer === "2" && (
            <h2 className={styles.regualar_price}>
              <strong style={{ fontWeight: 500 }}>Regularly</strong>{" "}
              <strong style={{ fontWeight: 500 }}>
                {" "}
                Rs {product.original_price * 3}
              </strong>
            </h2>
          )}

          <h2 className={styles.single_product}>
            Today Rs {selectedOffer > 1 ? product.discountprice : product.price}{" "}
            {selectedOffer === "2" && ""}{" "}
          </h2>
          <h2 className={styles.limitedTimeOffer}>Limited time only</h2>

          <div className={styles.extraPadding}>
            {product?.discount === true && (
              <DiscountApply
                selectedOffer={selectedOffer}
                setSelectedOffer={setSelectedOffer}
                shippingC={productSC}
                shippingCT={productSCT}
              />
            )}

            <button
              onClick={handleBuyNow}
              className={styles.single_add_to_cart_button}
            >
              BUY NOW
            </button>
          </div>

          <span className={styles.secondContainerspan}>
            <button>PRODUCT DETAILS</button>
          </span>

          <div ref={refs} className="flex flex-col">
            <ProductDetailsSecond
              details={product?.details}
              shouldRender={shouldRender}
            />
          </div>
        </div>
      </div>
      {isMobile && isScrolledMobile && (
        <BuyNowMobile item={product} discount={selectedOffer} />
      )}

      {companyInfoList && <Footer companyInfo={companyInfoList} />}
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug {
            current
        }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == $slug]{name, price, discount, image, details, customer_rating_value, _id, discription, customer_rating, original_price, discountprice, woocommerceid, pre_title, shipping_charges, shipping_options, slug  }[0]`;
  const params = { slug };
  const product = await client.fetch(query, params);

  const companyInfoQuery = `*[_type == "companyinfo"][0]`;
  const companyInfoList = await client.fetch(companyInfoQuery);

  return {
    props: { product, companyInfoList },
  };
};

export default ProductDetails;
