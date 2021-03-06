import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      {...children}
      <Footer/>
    </div>
  )
}

export default Layout
