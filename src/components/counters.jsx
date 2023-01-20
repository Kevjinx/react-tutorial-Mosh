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
						id={counter.id}
						value={counter.value}
						onDelete={this.handleDelete}
					/>)}
			</div>
		)
	}

	handleDelete = (counterId) => {
		this.setState({

		})
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