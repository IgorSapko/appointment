import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import { DateTime, Info  } from 'luxon';
import './CalendarSlider.css';

type Props = {
  getDateFunction: (date: string) => void ;
};

export const CalendarSlider: React.FC<Props> = ({getDateFunction}) => {
  // slider options
  const slideOpts = {
       freeMode:true,
      freeModeMomentum:false,
      spaceBetween: 16,
      speed: 400,
      width: 86,
      touchReleaseOnEdges:true,
      touchStartForcePreventDefault:true,
        };
  const onClickFunk=(e:React.MouseEvent)=>{
     //send data to other component
     getDateFunction(e.currentTarget.children[1].innerHTML); 
        // find and delete class 'clicked', unset checking from slide
     const slidesArr= document.getElementsByTagName(`${e.currentTarget.tagName}`);
  Array.from(slidesArr).find(elem=> elem.classList.contains('clicked'))?.classList.remove('clicked'); 
  // add class 'clicked', set checking on a clicked slide
  e.currentTarget.classList.add('clicked');
  };
  const numberOfDayInWeek = DateTime.local().weekday;
  return(
  <>
     <div className='upperSliderDescriptWrapper'>
      <p className='sliderDescription'>Возможная дата</p>
      <div className='buttonWrapper'>
      <button className='btn1'>
        <img className='btn1Img' alt='btn1Img' src='assets/disable.jpg'/>
        </button>
        <button className='btn2'>
          <img className='btn2Img' alt='btn2Img' src='assets/Union.jpg'/>
          </button>
          </div>
    </div>
    <IonSlides pager={false} options={slideOpts}>
    { Info.weekdaysFormat('short').map((item,index)=>{
      if(index===numberOfDayInWeek-1)
    {return (<IonSlide key={item} onClick={onClickFunk} className='ionSlide'>
      <p className='dayName'>Сегодня</p>
      <p className='date'> {DateTime.local().day}</p>
      </IonSlide>)} 
    else if(index>numberOfDayInWeek-1)
    {return (<IonSlide key={item} onClick={onClickFunk} className='ionSlide'>
      <p className='dayName'>{item}</p>
      <p className='date'> {DateTime.local().plus({day:index-numberOfDayInWeek+1}).day}</p>
      </IonSlide>)}})}    
   </IonSlides>
  </>
)};