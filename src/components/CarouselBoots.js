/* importing all images at once to carousel from its own local gallery  */

import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import { Carousel} from 'react-bootstrap'
/* import img1 from '../images/coffee1.jpg'
import img2 from '../images/coffee.jpg'
import img3 from '../images/gallery2.jpg' */

export default function CarouselBoots() {
    return (
      <StaticQuery
        query={graphql`
          {
            img1: file(relativePath: { eq: "gallery1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500 maxHeight: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            img2: file(relativePath: { eq: "gallery2.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500 maxHeight: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            img3: file(relativePath: { eq: "coffee1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500 maxHeight: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => {
          const img1 = data.img1.childImageSharp.fluid
          const img2 = data.img2.childImageSharp.fluid
          const img3 = data.img3.childImageSharp.fluid
          return (
              <div className='container'>
            <Carousel>
       
  <Carousel.Item>
    <Img
      className="d-block  w-100 img1"
      fluid={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Img
      className="d-block w-100 img1"
      fluid={img2}
      alt="2nd slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Img
      className="d-block w-100 img1"
      fluid={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
          )
        }}
      />
    )
  }