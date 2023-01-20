import React, { Component } from 'react';

class Counter extends Component {

	state = {
		count: 0
	}

	constructor() {
		super();
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	getBadgeClasses() {
		let classes = "badge m-2 ";
		classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}

	handleIncrement() {
		console.log('click increment')
		console.log(this.state.count)
		this.state.count++
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()} >
					{this.formatCount()}
				</span>
				<button onClick={this.handleIncrement}className="btn btn-secondary btn-sm">Increment</button>
			</div>
		);
	}


}

export default Counter;