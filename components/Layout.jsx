import React from 'react';
import Head from 'next/head';

import Footer from './Footer';



const Layout = ({ children }) => {
  const currentPagePath = typeof window !== 'undefined' ? window.location.pathname : '';

  // Determine if the footer should be hidden on the COD page in mobile view
  const hideFooterOnCODMobile = currentPagePath === '/cod' && window.innerWidth <= 768;


  return (
    <div className="layout">
      <Head>
      <title>
         VOVO
      </title>
      </Head>


        <main className="main-container">
         {children}
          </main>

          {!hideFooterOnCODMobile && (
        <footer>
          <Footer />
        </footer>
      )}

    </div>
  )
}

export default Layout