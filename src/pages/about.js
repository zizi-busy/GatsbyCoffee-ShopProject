import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/home/Info'


const About = ({ data }) => (
	<Layout>
		<SEO title="Home" />
  <BackgroundSection 
  img={data.about.childImageSharp.fluid} 
  title1 = "About Penny"
  
  styleClass='about-background'  
  sub='No one does coffee like Penny!'
  />
  <Info/>
	</Layout>
);

export const query = graphql`
	{
		about: file(relativePath: { eq: "about-background.jpeg" }) {
			childImageSharp {
				fluid (quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default About;
