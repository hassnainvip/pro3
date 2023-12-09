import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HashLoader } from "react-spinners";
import styles from '../styles/product.module.css'
import { urlFor } from '../lib/client'
import Image from 'next/image'

const Product = ({ product }) => {
  const { image, name, slug, price } = product;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBuyNow = () => {
      router.push(`/product/${slug.current}`);
  };

  const handleClick = () => {
    setLoading(true);
  };

  const productImage = urlFor(image && image[0]).url();


  return (
    <>
      {loading && (
        <div className="fullscreen-overlay">
          <HashLoader color="#3683d6" />
        </div>
      )}

      <div className={` ${styles.mainContainer} shadow-md shadow-gray-400 `} >
        <Link onClick={handleClick} href={`/product/${slug.current}`}>
          <span className={styles.secondaryContainer}>
            <Image alt="product image" priority={true} width={400} height={400}  src={productImage} />
            <p className="liproducth2 line-clamp-1 pt-[4px] ">{name.toUpperCase()}</p>
            <p className={styles.subHeading}>Ready Stock</p>
            <p style={{ fontWeight: 700 }} className=" pt-[2px] text-[14px] text-[#5781f4] ">
              <strong style={{ fontWeight: 600 }} className='text-[#999] line-through text-[14px]  opacity-60 '> Rs 3999   </strong>&nbsp;&nbsp; Rs {price}
            </p>

          </span>
        </Link>

        <div className={styles.btnContainer}>

        <button onClick={handleBuyNow}  style={{ fontWeight: 500, letterSpacing: '0.20em' }} className={styles.placeOrderButton}>
           BUY NOW
          </button>
          </div>
      </div>
    </>
  );
};

export default Product;
