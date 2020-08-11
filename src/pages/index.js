import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/home/Info'
import Menu from '../components/home/Menu'
import Products from '../components/home/Products'
import Contact from '../components/home/Contact'
import GallerySection from '../components/home/GallerySection'
import SympleBackground from '../components/globals/SympleBackground'


const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<BackgroundSection
      img={data.bgImg.childImageSharp.fluid}
	  top= "one & only "
      title="Penny's "
	  title2= "coffee shop"
	  subtitle="- Café Street 02100 Helsinki -"
	  star="&#9734;"

    />

  <Info className="info-bg" img={data.infoImage.childImageSharp.fluid} title="Penny's Caffee" />
  <SympleBackground
      img={data.menuImg.childImageSharp.fluid}
      styleClass="menu-background"
    >

  <Menu items={data.menu} />
  </SympleBackground>


  <Products/>
  <GallerySection />
  <Contact  img={data.contactImg.childImageSharp.fluid}
      styleClass="contact-background"/>
	</Layout>
);

export const query = graphql`
	{
		contactImg: file(relativePath: { eq: "contact.png" }) {
			childImageSharp {
				fluid (quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}

		bgImg: file(relativePath: { eq: "girl.png" }) {
			childImageSharp {
				fluid (quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}

		menuImg: file(relativePath: { eq: "paper-bg.png" }) {
			childImageSharp {
				fluid (quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}

		infoImage: file(relativePath: { eq: "mug.png" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
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
				  fixed(width: 80, height: 80) {
					...GatsbyContentfulFixed_tracedSVG
				  }
				}
			  }
			}
		  }
	}
`;

export default IndexPage;
