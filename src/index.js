import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';

import './index.css';

const PLAYERS = [
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
];

ReactDOM.render(
	<Application initialPlayers={PLAYERS} />,
	document.getElementById('root')
);
