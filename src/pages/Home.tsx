import { CalendarSlider } from '../components/CalendarSlider/CalendarSlider';
import { TimeSlider } from '../components/TimeSlider/TimeSlider';
import { SignUpBlock } from '../components/SignUpBlock/SignUpBlock';
import {DescriptionBlock} from '../components/DescriptionBlock/DescriptionBlock'
import { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [date, setDate] = useState<string|null>(null);
  const [time, setTime] = useState<string|null>(null);
  const getDate = (date:string)=>{
    setDate(date)
      };
  const getTime = (time:string)=>{
    setTime(time)
  };

  return (
       <IonPage id="home-page">
       <IonContent fullscreen className='ion-content'>
      <DescriptionBlock/>
         <CalendarSlider getDateFunction = {getDate}/>
         <TimeSlider getTimeFunction = {getTime}/>
         <SignUpBlock  dateFromState = {date} timeFromState = {time}/>
      </IonContent>
     
    </IonPage>
     );
};

export default Home;
