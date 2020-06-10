import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/home/Info'


const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" />
  <BackgroundSection 
  img={data.bgImage.childImageSharp.fluid} 
  title1 = "It's not your regular"
  title2 = "Cup of Joe"
  styleClass='default-background'  
  sub='No one does coffee like Penny:!'
  />
  <Info/>
	</Layout>
);

export const query = graphql`
	{
		bgImage: file(relativePath: { eq: "coffee2.jpg" }) {
			childImageSharp {
				fluid (quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default IndexPage;
