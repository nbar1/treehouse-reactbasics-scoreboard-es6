import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddPlayerForm.css';

class AddPlayerForm extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
		};
	}

	onNameChange(e) {
		this.setState({
			name: e.target.value,
		});
	}

	addPlayer(e) {
		e.preventDefault();

		this.props.addPlayer(this.state.name);
		this.setState({
			name: '',
		});
	}

	render() {
		return (
			<div className="add-player-form">
				<form
					onSubmit={function(e) {
						this.addPlayer(e);
					}.bind(this)}>
					<input
						type="text"
						value={this.state.name}
						onChange={function(e) {
							this.onNameChange(e);
						}.bind(this)} />
					<input type="submit" value="Add Player" />
				</form>
			</div>
		);
	}
}

AddPlayerForm.propTypes = {
	addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerForm;
