import React from 'react'

const AboutSection = () => {
  return (
    <div className="about-section m-0 md:h-[580px] h-[850px] about-section-wrapper border-red-300 border-dashed border-2 md:flex-row flex-col flex ">

        <div className="image-flex-wrapper md:basis-auto basis-1/2 order-2 md:order-0 border-purple-200 border-2 border-dashed grow flex justify-center items-center">
          <div className="image-container bg-[url('/images/aboutImage.jpg')] bg-cover bg-no-repeat bg-[70%_center] border-black border-2 border-dashed h-full w-full  md:h-4/5 md:w-4/5">

          </div>
        </div>
        <div className="about-text-wrapper  justify-center items-center order-1 md:basis-auto basis-1/2 md:order-0 border-pink-300 border-dashed grow border-2 md:max-w-[50%]  max-w-full flex md:justify-center md:items-center ">
      
          <div className="text-container border-2 flex flex-col gap-4 border-dashed justify-start p-2  border-blue-200  h-4/5  w-4/5">
              <p className="font-bold md:text-xl text-2xl">Biography</p>
              <p className="md:text-sm text-xl"> Who we are </p>
              <div className="main-text-flex-container flex flex-col gap-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reiciendis, modi quas excepturi quisquam veritatis possimus adipisci laboriosam explicabo repudiandae, ipsum omnis dolore animi quo enim itaque eum dolores obcaecati?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum.</p>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sint numquam sit temporibus in! Ratione accusamus reiciendis explicabo tempora aut.</p>
              </div>
          </div>
        </div>

    </div>
  )
}

export default AboutSection;