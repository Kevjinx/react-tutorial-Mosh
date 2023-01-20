import React, { Component } from "react";
import Counter from "./counter";


class Counters extends Component {
	state = {
		counters: [
			{id: 1, value: 4},
			{id: 2, value: 0},
			{id: 3, value: 0},
			{id: 4, value: 0},
		]
	};

	counterList = () => {
		return (
			<div>
				{this.state.counters.map(counter =>
					<Counter
						key={counter.id}
						onDelete={this.handleDelete}
						//deconstruct counter object for cleaner code, and so that in the future, we just need to modify the counter object, and not the counter component
						counter={counter}
					/>)}
			</div>
		)
	}

	handleDelete = (counterId) => {
		//creating new array for counters because we cannot modify state directly in react. Then we set the state to the new array with the new counters
		const counters = this.state.counters.filter(counter => counter.id !== counterId)
		this.setState({ counters })
		console.log('delete event handler called', counterId)
	}

	render() {
		return (
			<div>
				{this.counterList()}
			</div>
		);
	}

}

export default Counters;