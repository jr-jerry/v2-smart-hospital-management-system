import { useState } from "react";
import { Navbar } from "../../Component/Navbar";
import FormComponent from "../../Component/Form";

export function LandingPage(){
    console.log("Landing page component render");
    const [show,setShow]=useState(false);
    const handleLoginFormShow=()=>{
        setShow(prev=>!prev);
    }
    return <div className="m-0">
        <Navbar handleLoginFormShow={handleLoginFormShow}/>
        {(show)?<FormComponent/>:<></>}

    </div>
}