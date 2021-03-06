import { createReducer } from '@reduxjs/toolkit';
import dateActions from './dateAndTimeActions';

const dateAndTimeReducer = createReducer(null, {

	[dateActions.getDateAndTimeSuccess]: (state, { payload }) => {
			return payload;
	},

	[dateActions.createDateAndTimeSuccess]: (state, { payload }) => {
				return payload;
	},

	[dateActions.updateDateAndTimeSuccess]: (state, { payload }) => {
		return payload;
},
})
export default dateAndTimeReducer;
