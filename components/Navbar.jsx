import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import dynamic from "next/dynamic";

const DesktopHeader = dynamic(() => import('./DesktopHeader'));
const MobileHeader = dynamic(() => import('./MobileHeader'));

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  if(isMobile) {
    return (<MobileHeader />)
  }
  else {
    return (<DesktopHeader />)
  }
};

export default Navbar;
