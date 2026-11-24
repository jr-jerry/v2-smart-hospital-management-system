import React, { useEffect, useState } from 'react'
import CardComponent from '../Card';
import { useMediaQuery } from '../../Hooks/useMediaQuery';

const ContentSlider = ({slides}) => {
    const [currentSlideIndex,setCurrentSlideIndex]=useState(0);
    const matches=useMediaQuery('(min-width: 430px)');
    const autoSlide=()=>{
        setInterval(()=>{
            nextSlide()
        },3000);
    }
    useEffect(()=>{
        console.log("useEffect trigger only when component mount and unmount ")
        setTimeout(()=>{
        
        console.log("auto slide called after 5 e")
        autoSlide();
    },1000);},[]);

    const nextSlide=()=>{
        console.log("nextSlide trigger")
        setCurrentSlideIndex(prev=>{
            if(matches)
             return prev==slides.length-1?0:prev+1
            else{
               return prev==slides.flat().length-1?0:prev+1;
            }
        });
    };
    const prevSlide=()=>{
        console.log("prevSlide Trigger")
        setCurrentSlideIndex(prev=>prev==0?slides.length-1:prev-1);
    };
  return (
    <div className="relative overflow-hidden">
        <div className="flex-container flex transition-transform  duration-1000 ease-in-out"
        style={{transform:`translateX(-${currentSlideIndex*100}%)`}}>
            {
                matches ? slides.map((slide,idx)=>(
                    <div key={idx} className="min-w-full   ">
                         
                            <div className="flex justify-evenly items-center">
                                <div className="service1">
                                    <CardComponent image_URL={slide[0].image_url} description={slide[0].service_name}/>
                                    
                                </div>
                                <div className="service1">
                                    <CardComponent image_URL={slide[1].image_url} description={slide[1].service_name}/>
                                </div>
                                <div className="service1">
                                <CardComponent image_URL={slide[2].image_url} description={slide[2].service_name}/>
                                </div>
                            </div>
                        </div>
                   
                )):slides.flat().map((obj,idx)=>(
                   <div className="min-w-full  ">
                    <CardComponent key={idx}  image_URL={obj.image_url} description={obj.service_name}/>

                    </div>

                
                     
                ))
            }
        </div>
        <button onClick={nextSlide}>next</button>
        <button onClick={prevSlide}>prev</button>
    </div>
  )
}
export default ContentSlider;