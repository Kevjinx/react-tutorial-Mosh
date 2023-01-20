import React, { Component } from 'react';

class Counter extends Component {
	//controlled component that takes in data from and passes events to Counters.jsx
	getBadgeClasses() {
		let classes = "badge m-2 ";
		classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}

	//arrow functions do not need to bind 'this' keyword!!!!
	// handleIncrement = (e) => {
	// 	console.log('click increment')
	// 	this.setState({ value: this.state.value + 1 })
	// }

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()} >
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button
					//counter raises an event, which is handled by the parent component
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}


}

export default Counter;