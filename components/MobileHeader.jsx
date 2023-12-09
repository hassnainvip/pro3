import React, { useState } from "react";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/mobilenav.module.css";
import Image from 'next/image'
const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const mobileMenu = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/shop" },
    { name: "Offers", url: "/shop" },
    { name: "New Arrivals", url: "/shop" },
    { name: "Sale", url: "/shop" },
  ];

  return (
    <nav>
      {/* for mobile */}

      <div className={styles.mainContainer}>
        <div className={styles.secondContainer}>
          <div>
            <button onClick={toggleMenu} className={styles.gg_menu}></button>
          </div>

          <div className='flex justify-center items-center'>
            <Link href="/">
              <Image  alt="logo image" priority={true} width={500} height={500}  src={process.env.NEXT_PUBLIC_WEBSITE_LOGO} />
            </Link>
          </div>

          <div />
        </div>

        {isOpen && (
          <div className=" ">
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="bg-gray-800 opacity-60 z-30 h-screen w-full fixed left-0 top-0 "
            />
            <div className="bg-white z-30 h-screen w-[280px] fixed left-0 -top-0 flex flex-col pt-1 space-y-6 text-black tracking-wider text-xs font-light">
              <span
                style={{
                  left: "240px",
                  top: "0px",
                  padding: "2px",
                  color: "white",
                  fontSize: "10px",
                  fontWeight: 600,
                  transform: "rotate(90deg)",
                  marginTop: "21px",
                  marginLeft: "20px",
                }}
                onClick={() => setIsOpen(false)}
                className="bg-blue-400 w-[60px]  text-center fixed "
              >
                CLOSE
              </span>

              {mobileMenu.map((data, index) => (
                <div key={index} className="flex items-center justify-between  border-b-[1px] border-gray-300">
                  <Link
                    style={{ fontWeight: 600 }}
                    className="text-[15px] pb-4 px-[13px]"
                    href={data.url}
                  >
                    {data.name}
                  </Link>

                  <AddIcon
                    sx={{ color: "gray", fontSize: "12px", marginX: "13px" }}
                  />
                </div>
              ))}

              <span className="flex items-center space-x-2 px-[13px]">
                <Image alt="call icon" width={22} height={22} className="h-[22px] w-[22px] " src="/call-icon.webp" />
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
        )}
      </div>
    </nav>
  );
};

export default MobileHeader;
