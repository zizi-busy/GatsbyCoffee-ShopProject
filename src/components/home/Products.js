import React from 'react';
import ProductCard from '../home/ProductCard';
import Title from '../globals/Title';
import { StaticQuery, graphql } from 'gatsby';

const getProducts = graphql`
	{
		products: allContentfulCoffeeProduct {
			edges {
				node {
					id
					title
					price
					img {
						fluid(maxHeight: 400) {
							src
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`;

export default function Products() {
	return (
		<StaticQuery
			query={getProducts}
			render={data => {
				return (
              <section className= "products-section py-5">
                  <div className="container">
                     <Title title = "our products" />
                     <div className="row">
                         {data.products.edges.map(({node:product})=>{
                            return <ProductCard key = {product.id} product={product} />
                         })}
                     </div>
                  </div>
              </section>

                )
			}}
		/>
	);
}
