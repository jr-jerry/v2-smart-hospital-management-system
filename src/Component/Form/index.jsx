import { useState } from "react";
import RadioComponent from "./radio-component";
 

const FormComponent = () => {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");

  const handleNameChange=(e)=>{
    setName(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  return (
    <form className="border-2 border-red-600 border-dashed flex flex-col">

      <label>Enter your name:</label>
      <input type="text" className="border-2 border-solid border-black" value={name} onChange={(e)=>handleNameChange(e)}/>

      <label>Password:  </label>
      <input type="password" className="border-2 border-solid border-black" value={password} onChange={(e)=>handlePasswordChange(e)}/> 
   
      <RadioComponent/>

    </form>
  )
}

export default FormComponent