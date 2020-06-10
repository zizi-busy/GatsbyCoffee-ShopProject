import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'gatsby';
import logo from '../../images/coffee-gold.svg';
export default function Footer() {
	return (
		<footer className="footer py-3">
			<div className="container">
				<div className="row">
					<Link
						to="/"
						className="navbar-brand col-10 mx-auto  col-md-6 text-yellow text-center text-capitalize "
					>
						<img className="logo" src={logo} alt="logo" />
					</Link>
				</div>
				<div className="row">
					<div className=" mt-2 mx-auto col-10  text-yellow text-center text-capitalize">
						<h5>All rights reserved &copy;{new Date().getFullYear().toString()}</h5>

    
						<a class="btn btn-social-icon btn-twitter ">
							<FaTwitter className="social-icon" />
						</a>
						<a class="btn btn-social-icon btn-facebook ">
							<FaFacebookF className="social-icon" />
						</a>
						<a class="btn btn-social-icon btn-linkedin ">
							<FaLinkedinIn className="social-icon" />
						</a>
					
				</div>
			</div>
			</div>
		</footer>
	);
}
