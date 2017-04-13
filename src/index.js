import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player';

import Scoreboard from './containers/Scoreboard';

import './index.css';

const store = createStore(PlayerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<Scoreboard />
	</Provider>,
	document.getElementById('root')
);
