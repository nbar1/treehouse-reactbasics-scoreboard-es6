import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<Stats players={this.props.players} />
				<h1>{this.props.title}</h1>
				<Stopwatch />
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired,
};

export default Header;
