import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/home/Info'
import Menu from '../components/home/Menu'
import Products from '../components/home/Products'
import Contact from '../components/home/Contact'


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
  <Menu items={data.menu} />
  <Products/>
  <Contact/>
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

		menu: allContentfulCoffeeItem {
			edges {
			  node {
				id
				title
				description {
				  description
				}
				price
				category
				img {
				  fixed(width: 70, height: 70) {
					...GatsbyContentfulFixed_tracedSVG
				  }
				}
			  }
			}
		  }
	}
`;

export default IndexPage;
