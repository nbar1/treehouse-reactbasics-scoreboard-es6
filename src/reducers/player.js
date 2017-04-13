import * as PlayerActionTypes from '../action-types/player';

const initialState = [
	{
		name: 'Nick Barone',
		score: 31,
	},
	{
		name: 'John Doe',
		score: 35,
	},
	{
		name: 'Jane Doe',
		score: 42,
	},
];

export default function Player(state = initialState, action) {
	switch (action.type) {
		case PlayerActionTypes.ADD_PLAYER:
			return [
				...state,
				{
					name: action.name,
					score: 0,
				},
			];

		case PlayerActionTypes.REMOVE_PLAYER:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1),
			];

		case PlayerActionTypes.UPDATE_PLAYER_SCORE:
			return state.map((player, index) => {
				if (index === action.index) {
					return {
						...player,
						score: player.score + action.score,
					}
				}

				return player;
			});

		default:
			return state;
	}
}
