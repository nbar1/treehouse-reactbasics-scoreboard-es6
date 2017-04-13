import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';

import './Scoreboard.css';

class Scoreboard extends Component {
	constructor() {
		super();

		this.state = {
			players: [
				{
					name: 'Nick Barone',
					score: 31,
					id: 1,
				},
				{
					name: 'John Doe',
					score: 35,
					id: 2,
				},
				{
					name: 'Jane Doe',
					score: 42,
					id: 3,
				},
			],
		};

		this.nextId = this.state.players.length + 1;
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

Scoreboard.propTypes = {
	title: PropTypes.string,
};

Scoreboard.defaultProps = {
	title: 'Scoreboard',
};

export default Scoreboard;
