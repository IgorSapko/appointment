import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, State} from '../../store/store';
import { DateTime  } from 'luxon';
import styles from './SignUpBlock.module.css';
import dateAndTimeOperation from '../../store/date/dateAndTimeOperation'
import unsetError from '../../store/error/errorActions';

type Props = {
  dateFromState?: string|null;
  timeFromState?: string|null;
};

export const SignUpBlock: React.FC<Props> = ({dateFromState, timeFromState}) => 
{ const dispatch: AppDispatch = useDispatch();
  // get last data from database
 useEffect(
    ()=>  {dispatch(dateAndTimeOperation.getAppointment())},[dispatch]
      );
  const dateAndTime : any = useSelector((state:State)=>state.dateAndTime)
  const errorState : any = useSelector((state:State)=>state.error) 
  const handleSubmit=(e:React.MouseEvent)=>{
  e.preventDefault();
  // checking for click needed fields
  if(!dateFromState||!timeFromState)
  {alert('Please chose date and time'); 
  return};
  // if there is error in state, unset error
  errorState&&dispatch(unsetError.unsetErrorMessage());
  // if data in database is present we use update method otherwise - create method
  if(dateAndTime){
  const id=dateAndTime.id;
 const dataAndTimeForSendingToDatabaseUpdate = {
    [id]:{'date':dateFromState, 
    'time':timeFromState}};
        dispatch(dateAndTimeOperation.updateAppointment(dataAndTimeForSendingToDatabaseUpdate))
    return};
  const dataAndTimeForSendingToDatabaseCreate = {'date':dateFromState, 
  'time':timeFromState};
  dispatch(dateAndTimeOperation.newAppointmentCreator(dataAndTimeForSendingToDatabaseCreate))
 };
 // correct name of mont for particular field
 const monthNameCorrection = ()=>{
  const arrLettersMonthNameLength = DateTime.local().monthLong.length;
  const arrLettersMonthName = DateTime.local().monthLong.split('');
   arrLettersMonthName[arrLettersMonthNameLength-1]='я';
 return arrLettersMonthName.join('');
   };
  return(
     <div className={styles.signUpBlockWrapper}>
    <div className={styles.dateWrapper}>
      <span className={styles.date}>Дата</span>
      <p className={styles.storedDate}>{dateFromState ? dateFromState:dateAndTime&& dateAndTime.date} {(dateFromState||dateAndTime)&&monthNameCorrection()}</p>
      </div>
    <div className={styles.timeWrapper}>
    <span className={styles.time}>Время</span>
      <p className={styles.storedTime}>{timeFromState ? timeFromState:dateAndTime&& dateAndTime.time}</p>
      </div>
  <button className={styles.btn} onClick={handleSubmit}>ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ</button>
   </div>
  )};
  