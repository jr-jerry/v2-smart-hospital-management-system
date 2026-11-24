import React from 'react'
import ContentSlider from '../../Component/ContentSlider';

const ServiceSection = () => {
    const currentSlide=()=>{
        
    }
    let slides=[
        [{"image_url":"/images/bone_doctor.jpg","service_name":"orthology"},
         {"image_url":"/images/dentist.jpg","service_name":"Dentist"},
         {"image_url":"/images/EyeService.jpg","service_name":"EyeDoctor"}
        ]
        ,
        [{"image_url":"/images/HairDoctor.jpg","service_name":"Hair Transplant"},
         {"image_url":"/images/kidney.jpg","service_name":"Kidney"},
         {"image_url":"/images/Neurology-1.jpg","service_name":"Brain"}
        ],
        [{"image_url":"/images/cardiology.jpg","service_name":"Heart"},
         {"image_url":"/images/skin_doctor.jpg","service_name":"Skin"},
         {"image_url":"/images/Liver.jpeg","service_name":"Liver"}
        ]
    ];
  return (
    <div className="md:h-[580px] h-[580px] flex-col flex  ">
        <div className="basis-2/12 flex mb-4 flex-col justify-end">
            <h3 className="text-center text-[24px] font-semibold ">Our Services</h3>
        </div>
        
            <div className="slide-show-container grow">
                <ContentSlider slides={slides}/>
            </div>
            <div className="basis-2/12">
                <div className="flex justify-center">
                    <span className="dot h-[15px] w-[15px] rounded-full bg-lime-200 m-1 p-1 cursor-pointer inline-block  " onClick={currentSlide(1)}></span>
                    <span className="dot h-[15px] w-[15px] rounded-full bg-lime-200 m-1 p-1 cursor-pointer inline-block  " onClick={currentSlide(2)}></span>
                    <span className="dot h-[15px] w-[15px] rounded-full bg-lime-200 m-1 p-1 cursor-pointer inline-block  " onClick={currentSlide(3)}></span>
                     
                </div>
            </div>
         
    </div>
  )
}

export default ServiceSection