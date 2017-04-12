import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

import './Application.css';

class Application extends Component {
	constructor(props) {
		super();

		this.nextId = props.initialPlayers.length + 1;

		this.state = {
			players: props.initialPlayers,
		};
	}

	onScoreChange(index, delta) {
		let newState = this.state;
		newState.players[index].score += delta;

		this.setState(newState);
	}

	onPlayerAdd(name) {
		let newState = this.state;
		newState.players.push({
			name: name,
			score: 0,
			id: this.nextId,
		});

		this.setState(newState);

		this.nextId++;
	}

	onRemovePlayer(index) {
		let newState = this.state;
		newState.players.splice(index, 1);

		this.setState(newState);
	}

	render() {
		return (
			<div className="scoreboard">
				<Header title={this.props.title} players={this.state.players} />
				<div className="players">
					{this.state.players.map(function(player, index) {
						return (
							<Player
								onScoreChange={function(delta) {
									this.onScoreChange(index, delta);
								}.bind(this)}
								onRemove={function() {
									this.onRemovePlayer(index);
								}.bind(this)}
								name={player.name}
								score={player.score}
								key={player.id} />
						);
					}.bind(this))}
				</div>
				<AddPlayerForm
					onAdd={function(name) {
						this.onPlayerAdd(name);
					}.bind(this)} />
			</div>
		);
	}
}

Application.propTypes = {
	title: PropTypes.string,
	initialPlayers: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
	})).isRequired,
};

Application.defaultProps = {
	title: 'Scoreboard',
};

export default Application;
