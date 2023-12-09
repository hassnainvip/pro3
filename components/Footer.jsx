import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {

  const menuItems = [
    { name: "ABOUT US", linkTag: "/about" },
    { name: "TERMS AND CONDITION", linkTag: "/terms-condition" },
    { name: "FAQS", linkTag: "/faq" },
    { name: "PRIVACY POLICY", linkTag: "/privacy-policy" },
    { name: "REFUND & RETURNS", linkTag: "/refund-returns" },
    { name: "SHIPPING POLICY", linkTag: "/shipping-policy" },
    { name: "COOKIE POLICY", linkTag: "/cookie-policy" },
    { name: "CONTACT AND COMPLAIN", linkTag: "/contact-and-complain" },
  ];

  return (
    <>
    <div className='pt-5' />
    <div className={styles.footerContainer}>
      <div className={styles.menuContainer}>
        {menuItems.map(({ name, linkTag }) => (
          <Link
            key={linkTag}
            style={{ fontWeight: 500 }}
            className={styles.menuLink}
            href={linkTag}
          >
            {name}
          </Link>
        ))}
      </div>

    </div>

    <p className={styles.footerText}>
        @2023 {process.env.NEXT_PUBLIC_WEBSITE_NAME} All Rights Reserved
      </p>

    </>
  );
};




export default Footer;
