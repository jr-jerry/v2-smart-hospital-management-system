import { useState } from "react";
import { Navbar } from "../../Component/Navbar";
import FormComponent from "../../Component/Form";

export function LandingPage(){
    console.log("Landing page component render");
    const [show,setShow]=useState(false);
    const handleLoginFormShow=()=>{
        setShow(prev=>!prev);
    }
    return <div className="m-0 h-lvh flex flex-col">
        <Navbar  handleLoginFormShow={handleLoginFormShow}/>
        <main className="hero-section-wrapper flex flex-col  h-lvh border-2 border-dashed border-black">
            <div className="form-section flex justify-center items-center grow border-2 border-dashed border-black">
                 {(show)?<FormComponent/>:<></>}
            </div>

            <div className="hero-section-bottom grow border-2 border-dashed border-black">

            </div>
            
        </main>

    </div>
}