import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
