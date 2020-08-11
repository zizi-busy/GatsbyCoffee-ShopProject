
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import './bootstrap.min.css'
import Navbar from './globals/Navbar'
import Footer from './globals/Footer'
/* import { ParallaxProvider } from 'react-scroll-parallax'; */

const Layout = ({ children }) => 


<>
    <Navbar/>
  {children}
  <Footer/>
</>
  


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
