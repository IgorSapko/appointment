import React from 'react';
import { IonSlides, IonSlide, } from '@ionic/react';
import styles from './TimeSlider.module.css';

type Props = {
  getTimeFunction: (time: string) => void;
};
export const TimeSlider: React.FC<Props> = ({ getTimeFunction}) => {
   // slider options
const slideOpts = {
    freeMode:true,
    freeModeMomentum:false,
    spaceBetween: 16,
    speed: 400,
    width:88,
    touchReleaseOnEdges:true,
    touchStartForcePreventDefault:true,
    };
  const onClickFunk=(e:React.MouseEvent)=>{
    //send data to other component
    getTimeFunction(e.currentTarget.children[0].innerHTML);
    // find and delete class 'clicked', unset checking from slide
  const slidesArr= document.getElementsByTagName(`${e.currentTarget.tagName}`);
  Array.from(slidesArr).find(elem=> elem.classList.contains('checked'))?.classList.remove('checked');
  // add class 'checked', set checking on a checked slide
  e.currentTarget.classList.add('checked')
  };
  const availableTime = ['18:00', '18:30', '20:00', '20:30', '21:30', '22:30', ]
  
  return(
  <div className={styles.timeSliderWrapper}>
      <p className={styles.description}>Свободное время</p>
      <IonSlides pager={false} options={slideOpts} className={styles.sliderList} >
    { availableTime.map(item=>
   (<IonSlide key={item} onClick={onClickFunk} className={styles.ionSlide}>
            <p className={styles.dayName}>{item}</p>
            </IonSlide>))}   
   </IonSlides>
   </div>
  )};
  
