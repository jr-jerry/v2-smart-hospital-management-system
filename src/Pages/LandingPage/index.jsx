import { useState } from "react";
import { Navbar } from "../../Component/Navbar";
import FormComponent from "../../Component/Form";
import { Nav_bar } from "../../Component/Nav_Bar";
import { CustomForm } from "../../Component/Form2";
import AboutSection from "../AboutSection";
import ServiceSection from "../ServiceSection";

export function LandingPage(){
    console.log("Landing page component render");

    const [show,setShow]=useState(false);
    const handleLoginFormShow=()=>{
        setShow(prev=>!prev);
    }
    return <div className="m-0 flex flex-col">
        <Nav_bar handleLoginFormShow={handleLoginFormShow}/>
            <div className="hero-section-wrapper w-full  m-0 h-lvh flex flex-col">
                <div className="h-[72px] ">

                </div>
        
        {/* <Navbar  handleLoginFormShow={handleLoginFormShow}/> */}
            <main className="hero-section-wrapper flex flex-col  h-lvh border-2 border-dashed  ">
                <div className="form-section basis-4/5 flex  justify-center md:justify-end items-center grow border-2 border-dashed relative bg-cover  bg-[url('/images/heroSection2.jpg')] bg-no-repeat bg-[position:60%_center] md:bg-[center_10%]">
                    {(show)?<CustomForm/>:<></>}
                </div>            
            </main>
            </div>
        
        {/* About us section */}
        <AboutSection/>
        <ServiceSection/>
        {/* Out Doctor */}
        {/* Contact Us */}
        {/* Footer */}

    </div>
}