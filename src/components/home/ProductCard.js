import React from 'react';
import Img from 'gatsby-image';

export default function ProductCard({ product }) {
	return (
		<div className="col-10 col-sm-8 col-lg-4 mx-auto my-3">
			<div className="card" style={{ minHeight: '100%' }}>
				<Img fluid={product.img.fluid} className="card-img-top" />
				<div className="card-body text-center">
					<h4>
						<small>{product.title}</small>
					</h4>
					<h4>
						<small>${product.price}</small>
					</h4>
					<button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item" 
					data-item-id={product.id}
					data-item-name={product.title}
					data-item-price={product.price}
					data-item-image={product.img.fluid.src}
					data-item-url="https://gatsby-new-coffee-shop.netlify.app/"
    			    >Add to cart</button>
				</div>
			</div>
		</div>
	);
}
