import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';

const Stats = props => {
	let totalPlayers = props.players.length;
	let totalPoints = props.players.reduce(function(total, player) {
		return total + player.score;
	}, 0);

	return (
		<table className="stats">
			<tbody>
				<tr>
					<td>Players:</td>
					<td>{totalPlayers}</td>
				</tr>
				<tr>
					<td>Total Points:</td>
					<td>{totalPoints}</td>
				</tr>
			</tbody>
		</table>
	);
};

Stats.propTypes = {
	players: PropTypes.array.isRequired,
};

export default Stats;
