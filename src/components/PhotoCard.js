import React from 'react';
import Img from 'gatsby-image';

export default function PhotoCard({ product }) {
	return (
		<div className="sliderimg">
				<Img fluid={product.img.fluid} />		
                <p className="info">{product.title}</p>
		</div>
	);
}
