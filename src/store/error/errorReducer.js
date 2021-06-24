//Core
import { createReducer } from '@reduxjs/toolkit';
import errorActions from './errorActions';

const errorReducer = createReducer(null, {
	[errorActions.unsetErrorMessage]: (state, { payload }) => null,
	[errorActions.error]: (state, { payload }) => payload,
});

export default errorReducer

