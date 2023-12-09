

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import trackFacebookPixelEvent from '../../utils/fb-page-view';

const FbServer = ({eventId}) => {


    const [ fbcValues ,setFbcValues] = useState()
    const router = useRouter();

    const fbclid = router.query.fbclid;
  
    console.log("local run:", fbclid);
  
    useEffect(() => {
      if (fbclid != undefined) {
        const subdomain_index = 1;
        const unixtime = Math.floor(Date.now() / 1000); // Get the current UNIX timestamp in seconds
        const random_number = Math.floor(Math.random() * 10000000000); // Generate a random 10-digit number
        const cookieValue_fbp = `fb.${subdomain_index}.${unixtime}.${random_number}`;
        const cookieValue_fbc = `fb.${subdomain_index}.${unixtime}.${fbclid}`;
        Cookies.set("_fbp", cookieValue_fbp);
        Cookies.set("_fbc", cookieValue_fbc);
        setFbcValues(cookieValue_fbc)
      }

    }, [fbclid]);

    
  useEffect(() => {
    if(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === 'true' ){
      trackFacebookPixelEvent([{"action_source":"website","event_name":"PageView",}], "", eventId);
    }

  }, [eventId, fbcValues])



}

export default FbServer;