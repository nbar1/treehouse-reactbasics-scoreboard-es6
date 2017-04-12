import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

class Counter extends Component {
	render() {
		return (
			<div className="counter">
				<button
					onClick={function() {
						this.props.onChange(-1);
					}.bind(this)}
					className="counter-action decrement"> - </button>
				<div className="counter-score"> {this.props.score} </div>
				<button
					onClick={function() {
						this.props.onChange(1);
					}.bind(this)}
					className="counter-action increment"> + </button>
			</div>
		);
	}
}

Counter.propTypes = {
	score: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Counter;
