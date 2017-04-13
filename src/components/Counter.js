import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = props => {
	return (
		<div className="counter">
			<button
				onClick={() => props.onChange(-1)}
				className="counter-action decrement"> - </button>
			<div className="counter-score"> {props.score} </div>
			<button
				onClick={() => props.onChange(1)}
				className="counter-action increment"> + </button>
		</div>
	);
};

Counter.propTypes = {
	score: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Counter;
