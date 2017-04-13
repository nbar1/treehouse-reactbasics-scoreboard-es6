import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = props => {
	return (
		<div className="counter">
			<button
				onClick={() => props.updatePlayerScore(props.index, -1)}
				className="counter-action decrement"> - </button>
			<div className="counter-score"> {props.score} </div>
			<button
				onClick={() => props.updatePlayerScore(props.index, 1)}
				className="counter-action increment"> + </button>
		</div>
	);
};

Counter.propTypes = {
	score: PropTypes.number.isRequired,
	updatePlayerScore: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

export default Counter;
