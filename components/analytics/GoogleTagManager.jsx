import TagManager from 'react-gtm-module'
import {useEffect} from "react";

const GoogleTagManager = () => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

    const tagManagerArgs = {
        gtmId
      };
    useEffect(() => {
        TagManager.initialize(tagManagerArgs);
      },);

}

export default GoogleTagManager