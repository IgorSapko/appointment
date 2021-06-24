import { createAction } from '@reduxjs/toolkit';

const getDateAndTimeRequest = createAction('date/dateAndTimeRequest');
const getDateAndTimeSuccess = createAction('date/dateAndTimeSuccess');

const createDateAndTimeRequest = createAction('date/createDateAndTimeRequest');
const createDateAndTimeSuccess = createAction('date/createDateAndTimeSuccess',);

const updateDateAndTimeRequest = createAction('date/updateDateAndTimeRequest');
const updateDateAndTimeSuccess = createAction('date/updateDateAndTimeSuccess');

export default {
     getDateAndTimeRequest,
     getDateAndTimeSuccess,
     createDateAndTimeRequest,
	createDateAndTimeSuccess,
     updateDateAndTimeRequest,
     updateDateAndTimeSuccess,
    
};
