
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import React from 'react'

import img1 from '../images/coffee.jpg'
import img2 from '../images/coffee1.jpg'
import img3 from '../images/coffee2.jpg'
import img4 from '../images/coffee.jpg'

const Partners = () => {
    return (
       
<OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav
>
   <div><img src={img1} className="sliderimg"/> </div>
        <div><img src={img2} className="sliderimg"/> </div>
        <div><img src={img3} className="sliderimg"/> </div>
        <div><img src={img4} className="sliderimg"/> </div>
        <div><img src={img1} className="sliderimg"/> </div>
        <div><img src={img2} className="sliderimg"/> </div>
        <div><img src={img4} className="sliderimg"/> </div>
</OwlCarousel>
  
    )
}

export default Partners

     {/*  <div><img src={img1} className="sliderimg"/> </div>
        <div><img src={img2} className="sliderimg"/> </div>
        <div><img src={img3} className="sliderimg"/> </div>
        <div><img src={img4} className="sliderimg"/> </div>
        <div><img src={img1} className="sliderimg"/> </div>
        <div><img src={img2} className="sliderimg"/> </div>
        <div><img src={img4} className="sliderimg"/> </div>
        </OwlCarousel> */}
