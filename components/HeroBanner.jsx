import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image'

const HeroBanner = () => {
  const [banner, setBanner] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const desktopBanner =   process.env.NEXT_PUBLIC_DESKTOP_BANNER;
  const  mobileBanner =  process.env.NEXT_PUBLIC_MOBILE_BANNER;


  // THIS USES SANITY
  // const mobileBanner =   urlFor(heroBanner?.mobile_banner).url();
  // const desktopBanner = urlFor(heroBanner?.image).url();

  useEffect(() => {
   if(isMobile){
    setBanner(mobileBanner);
   }else {
    setBanner(desktopBanner);
   }
  }, [desktopBanner, mobileBanner, isMobile])

  return (
    <React.Fragment>
      <div style={{ maxWidth: "84.7rem" }} className={` mx-auto `}>
        <div className="overflow-hidden">
          {!imgLoaded && <Skeleton variant="rect" height={445} />}
          <Image

       width={2000}
          height={1200}
            src={banner}
            alt="headphones"
            className="h-auto w-[100%]"
            onLoad={() => setImgLoaded(true)}
            style={!imgLoaded ? { display : 'none' } : {}}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroBanner;
