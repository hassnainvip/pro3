import React, {useEffect} from 'react'
import Navbar from './../components/Navbar';
import { client } from "../lib/client";
import { Product } from "../components";
import style from "../styles/home.module.css";
import * as fbq from '../lib/fpixel'
import Footer from './../components/Footer';


const Shop = ({products}) => {

  useEffect(() => {
    if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true')
    {
        fbq.pageview()
    }
  }, [])


  return (

    <React.Fragment>
    <Navbar />

    <div className={style.mainContainerProduct}>

    <div className={style.productContainerMain}>
          <div className={style.productSecondContainer}>
            {products?.map((product) => (
               <>{product?.visible == true && <Product key={product?._id} product={product} />}</>
            ))}
          </div>
        </div>

    </div>



    <Footer />


    </React.Fragment>


  )
}

export const getStaticProps  = async () => {
    const query = '*[_type=="product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type=="banner"]';
    const bannerData = await client.fetch(bannerQuery);





    return {
      props: { products, bannerData },
    };
  };



export default Shop