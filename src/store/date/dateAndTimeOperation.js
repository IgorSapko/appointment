import axios from 'axios';
import dateActions from './dateAndTimeActions';
import errorActions from '../error/errorActions';

const baseURL = 'https://appointmentdatabase-e0120-default-rtdb.europe-west1.firebasedatabase.app/dateAndTime.json';

const correctionResponce = (responce)=>{
	console.log(responce)
	const keyOfObj = Object.keys(responce.data);
	console.log()
	return {...responce.data[keyOfObj[0]],id:keyOfObj[0] };
}
const newAppointmentCreator = (dateAndTime) => async dispatch => {
	try {
		dispatch(dateActions.createDateAndTimeRequest(dateAndTime));
		const responce = await axios.post(baseURL, dateAndTime);
		responce.status === 200 && dispatch(dateActions.createDateAndTimeSuccess(dateAndTime));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

const updateAppointment = (dateAndTime) => async dispatch => {
	try {
		dispatch(dateActions.updateDateAndTimeRequest());
		const responce = await axios.patch(baseURL, dateAndTime);
		const data =  correctionResponce(responce)
		responce.status === 200 && dispatch(dateActions.updateDateAndTimeSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

const getAppointment= () => async dispatch => {
	try {
		dispatch(dateActions.getDateAndTimeRequest());
		const responce = await axios.get(baseURL);
			const data =  correctionResponce(responce)
		responce.status === 200 && dispatch(dateActions.getDateAndTimeSuccess(data));
	} catch (error) {
		dispatch(errorActions.error(error));
	}
};

export default { newAppointmentCreator, updateAppointment, getAppointment };
