import { useState } from "react";
import RadioComponent from "./radio-component";
 

const FormComponent = () => {

  const initData={
    name:"",password:"",type:"patient"
  }
  const [data,setData]=useState(initData);

  const [login,setLogin]=useState(true);

 
  const handleChange=(event)=>{
    console.log("handleChange trigger")
    const key=event.target.name;
    const value=event.target.value;
    setData((prev)=>{
      return {...prev,[key]:value}
    })
  }
  console.log(data);
  
  const handleSubmitForm=(event)=>{
    event.preventDefault();
    setLogin(prev=>!prev);
  }
  return (
    <form className="border-2 border-red-600 border-dashed flex flex-col">

      <label>Enter your name:</label>
      <input type="text" name="name" className="border-2 border-solid border-black" value={data.name} onChange={(e)=>handleChange(e)}/>

      <label>Password:  </label>
      <input type="password" name="password" className="border-2 border-solid border-black" value={data.password} onChange={(e)=>handleChange(e)}/> 
   
      {(!login)?<RadioComponent handleChange={handleChange}/>:<></>}
      <button onClick={(event)=>event.preventDefault()}>{login?"Login":"Sign Up"}</button>
      <button onClick={handleSubmitForm}>{(login)?"new account":"already exist"}</button>
    </form>
  )
}

export default FormComponent