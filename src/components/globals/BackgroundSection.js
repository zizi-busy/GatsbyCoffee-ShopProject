import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import styled from 'styled-components';

export default function BackgroundSection({ img, styleClass, title, children, subtitle, title2, top,star }) {
	return (
		<BackgroundImage className={styleClass} fluid={img}>
			<div className="banner-wrapper">
   
				<h2 className="sub sub-top">
           <span className= "span1">{star}</span>
           <span  className="span2">{star}</span>
           <span  className="span3">{star}</span>
					 {top}  
           <span className="span3">{star}</span>
          
           <span className="span2">{star}</span>
           <span className="span1">{star}</span>
				</h2>
				<h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
					{title} <br /> {title2}
				</h1>
				<h2 className="sub">{subtitle}</h2>
				{children}
			</div>
		</BackgroundImage>
	);
}

 BackgroundSection.defaultProps = {
	title: 'default title',
	styleClass: 'default-background'
}; 
