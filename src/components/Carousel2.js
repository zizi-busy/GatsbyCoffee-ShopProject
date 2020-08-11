/* Data from Contentful coffe product images for example */

import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PhotoCard from '../components/PhotoCard'

const GET_IMAGES = graphql`
	{
		getImages: allContentfulCoffeeProduct {
			edges {
				node {
					id
					title
					img {
						fluid{
							src
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`;

export default function Carousel3() {
 
	return (
		<StaticQuery
			query={GET_IMAGES}
			render={(data) => {
				const images = data.getImages.edges;

				return (
					<AliceCarousel
						autoPlay
						autoPlayInterval="4000"
						fadeOutAnimation
						stopAutoPlayOnHover
						showSlideInfo
                        responsive
                        mouseDragEnabled
					>
					 {images.map(({node:product})=>{
                            return <PhotoCard key = {product.id} product={product} />
                         })}
					</AliceCarousel>
				);
			}}
		/>
	);
}
