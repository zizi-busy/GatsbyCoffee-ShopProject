import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo-white.svg';
import { FaCartArrowDown } from 'react-icons/fa';


export default class Navbar extends Component {
	state = {
		navbarOpen: false,
		showLinks: 'collapse navbar-collapse',
		links: [
			{
				id: 1,
				path: '/',
				text: 'home'
			},
			{
				id: 2,
				path: '/about',
				text: 'about'
			},
			{
				id: 3,
				path: '/blog',
				text: 'blog'
			}
		]
	};

	navbarHandler = () => {
		this.state.navbarOpen
			? this.setState({ navbarOpen: false, showLinks: 'collapse navbar-collapse ' })
			: this.setState({
					navbarOpen: true,
					showLinks: '  collapse navbar-collapse show '
				});
	};
	render() {
		return (
			<nav className=" mx-sm-5 navbar navbar-expand-sm navbar-dark text-center ">
				<Link to="/" className="navbar-brand text-center">
					<img className="logo" src={logo} alt="logo" /> <br/>penny:
					{/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                        Creative Commons (Attribution 3.0 Unported);
                        https://www.iconfinder.com/webalys */}
				</Link>
				<button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
					<span className="navbar-toggler-icon" />
				</button>
				<div className={this.state.showLinks}>
					<ul className="navbar-nav ml-auto">
						{this.state.links.map((link) => {
							return (
								<li key={link.id} className="nav-item mx-sm-4">
									<Link activeStyle={{
										backgroundColor: 'rgb(227, 177, 53, 0.7)'
						
									}} to={link.path} className="nav-link  text-white text-capitalize">
										{link.text}
									</Link>
								</li>
							);
						})}
						<li className="navi-item mx-sm-4">
							<FaCartArrowDown className="cart-icon" />
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
