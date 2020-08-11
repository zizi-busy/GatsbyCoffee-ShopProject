import React, { Component } from 'react';
import Title from '../globals/Title';
import Img from 'gatsby-image';


const getCategories = (items) => {
	let tempItems = items.map((items) => {
		return items.node.category;
	});

	let tempCategories = new Set(tempItems);
	let categories = Array.from(tempCategories);
	categories = [ 'All', ...categories ];
	return categories;
};

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.items.edges /* original values */,
			coffeeItems: props.items.edges,
			categories: getCategories(props.items.edges)
		};
	}

	handleItems = (category) => {
		let tempItems = [ ...this.state.items ];
		if (category === 'All') {
			this.setState(() => {
				return { coffeeItems: tempItems };
			});
		} else {
			let items = tempItems.filter(({ node }) => node.category === category);

			this.setState(() => {
				return { coffeeItems: items };
			});
		}
	};
	render() {
		if (this.state.items.length > 0) {
			return (
				<section className="menu-section py-5">
					<div className="container">
						<Title  className="col text-center text-dark mb-3" title="Our menu" message="organic flavor" />
						{/* Categoreies */}
						<div className="row mb-5">
							<div className="col-10 mx-auto text-center">
								{this.state.categories.map((category, index) => {
									return (
										<button
											className="btn btn-gold text-capitalize m-3"
											type="button"
											key={index}
											onClick={() => {
												this.handleItems(category);
											}}
										>
											{category}
										</button>
									);
								})}
							</div>
						</div>
						{/* Items */}
						<div className="row">
							{this.state.coffeeItems.map(({ node }) => {
								return (
									<div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
										<div>
											<Img className="menu-img" fixed={node.img.fixed} />
										</div>
										{/* item description */}
										<div className="flex-grow-1 px-3">
											<div className="d-flex justify-content-between">
												<h4 className="mb-0 text-capitalize menu-title">
													<h5 className="text-dark menu-title ">{node.title}</h5>
												</h4>
												<h4 className="mb-0 price">
													<small>${node.price}</small>
												</h4>
											</div>

												<h6 className=" text-dark description">{node.description.description}</h6>
											
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			);
		} else {
			return (
				<section className="menu py-5">
					<div className="container">
						<Title title="Best of our menu"  />
						<div className="row">
							<div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
								<h1>There are no items to display</h1>
							</div>
						</div>
					</div>
				</section>
			);
		}
	}
}
