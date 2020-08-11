import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { styles, Section } from '../../utils';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function GallerySection() {
	return (
		<StaticQuery
		query={graphql`
			{
				img1: file(relativePath: { eq: "cof.jpg" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
				img3: file(relativePath: { eq: "cof3.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
				img2: file(relativePath: { eq: "o-mug.png" }) {
					childImageSharp {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		`}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;
				const img2 = data.img2.childImageSharp.fluid;
				const img3 = data.img3.childImageSharp.fluid;
				return (
				
                    <Section>
					    <Title className="col text-center mb-3" title = "Penny's world" message="our gallery" />
							<GalleryWrapper>
								<div className="item item-1">
									<Img fluid={img1} />
									<p className="info">Cosy atmosphere</p>
								</div>
								<div className="item item-2">
									<Img fluid={img2} />
									<p className="info">New accessories</p>
								</div>
								<div className="item item-3">
									<Img fluid={img3} />
									<p className="info">Relax</p>
								</div>
							</GalleryWrapper>

                        </Section>
                        
				
				);
			}}
		/>
	);
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  margin-top: 2rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
	font-weight: 700;
	letter-spacing: 1.5px


  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      'one  one two two  '
      'one  one three three ';
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`