import React from 'react'

const ServiceSection = () => {
  return (
    <div className="md:h-[580px] h-[580px] flex-col flex  ">
        <div className="basis-2/12 flex flex-col justify-end">
            <p className="text-center">Our Services</p>
        </div>
        
            <div className="slide-show-container grow">
                <div className="h-full">
                        Slide 1 
                </div>
                 <div className="h-full hidden">
                        Slide 2 
                </div>
                 <div className="h-full hidden">
                        Slide 3 
                </div>

            </div>
            <div className="basis-2/12">
                <div className="flex justify-center">
                    dots
                </div>
            </div>
         
    </div>
  )
}

export default ServiceSection