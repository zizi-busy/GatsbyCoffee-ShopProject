import React from "react";
import { Link } from "gatsby";
 import Title from "../Globals/Title"; 
 import BackgroundImage from 'gatsby-background-image';


export default function Info({title, img, className, children }) {
  return (
    <BackgroundImage className={className} fluid={img}>
    <section className=" info-section">
      <div className="container ">

        <Title title={title} className="col-10 col-sm-8  mb-3" message="Cup of joy"/>
        <div className="row">
          <div className="col-10 col-sm-8  text-left">
            <p className="lead text-muted mb-5">
            A acerbic cup coffee, single origin siphon, shop body, foam to go cream steamed, cinnamon to go, java affogato macchiato aromatic robust. Extraction aftertaste pumpkin spice frappuccino extraction,  dripper, acerbic, caramelization bar robusta aftertaste robusta. Variety viennese, beans arabica cream affogato, breve a extraction, grounds steamed café au lait irish espresso. Americano rich to go!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </BackgroundImage>
  );
}
