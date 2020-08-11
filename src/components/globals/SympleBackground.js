import React from 'react';
import BackgroundImage from 'gatsby-background-image';



export default function SympleBackground({ img, styleClass,children}) {
	return (
		<BackgroundImage className={styleClass} fluid={img}>		
				{children}
		</BackgroundImage>
	);
}