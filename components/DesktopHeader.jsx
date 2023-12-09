import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Image from 'next/image'

const DesktopHeader = () => {


  const [placeholderText, setPlaceholderText] = useState("Search Products...");

  return (
    <React.Fragment>
      {/* for desktop */}
      <div
        className={`hidden sm:block header-4-container bg-white py-2 h-[51px] shadow-lg shadow-gray-300`}
        style={{
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="flex justify-between items-center mx-auto max-w-[84.8rem] "
        >
          <Link className='max-h-[31px] w-auto cursor-pointer' href="/">
            <Image
            priority={true} width={120} height={120}
              src={process.env.NEXT_PUBLIC_WEBSITE_LOGO}
              alt="website-logo"
            />
          </Link>

          <div
            style={{
              fontWeight: 600,
              letterSpacing: "1.2px",
              fontSize: "0.8rem",
            }}
            className="flex flex-wrap items-center space-x-6 "
          >
            <Link href="/">HOME</Link>
            <Link href="/shop">PRODUCTS</Link>
            <Link href="/shop">OFFERS</Link>
            <Link href="/shop">NEW ARRIVALS</Link>
            <Link className="text-red-500" href="/shop">
              SALE
            </Link>
          </div>
          <div className="search-header hidden ">
            <input
              onFocus={() => setPlaceholderText("")}
              id="uniqueInput"
              placeholder={placeholderText}
              className=" xl:min-w-[400px] max-w-[400px] h-[37px]  px-2 text-[14px] outline-none bg-[#EEEEEE]"
            />
            <div className="bg-[#d1d5d4] px-5 h-[37px] w-auto" />
            <SearchIcon
              sx={{ color: "white", fontSize: 20 }}
              className="absolute right-[9px] top-2 "
            />
          </div>

          <span className="flex items-center space-x-2">
            <Image width={22} height={22} alt="call-icon-desktop" className="h-[22px] w-[22px] " src="/call-icon.webp" />
            <p style={{ fontWeight: 600 }} className="text-[16px]">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_VARIABLE}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1rem",
                }}
              >
                {process.env.NEXT_PUBLIC_PHONE_NUMBER_VARIABLE}
              </a>
            </p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DesktopHeader;
