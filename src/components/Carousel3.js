/* importing all images at once to carousel from its own local gallery  */

import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const GET_IMAGES = graphql`
	{
		getImages: allFile(filter: { relativeDirectory: { eq: "galleria" } }) {
			edges {
				node {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_tracedSVG
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
						{images.map(({ node }, index) => {
							return (
								<div key={index} className="sliderimg">
									<Img fluid={node.childImageSharp.fluid} />
									<p className="info">Penny caffe</p>
								</div>
							);
						})}
					</AliceCarousel>
				);
			}}
		/>
	);
}
