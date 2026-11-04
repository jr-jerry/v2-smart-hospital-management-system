import { useState } from "react";
import { useUserContextConsumer } from "../../Context/UserContext";
import RadioComponent from "../Form/radio-component"
import { signUpApi } from "../../Api/api";

export const CustomForm=()=>{
    const initData={
        email:"",
        password:"",
        type:"doctor"
    }
    
      const {setGlobalData}=useUserContextConsumer();
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
       const showAlert=()=>{
     const message=login?"Login Succesfull":"Sign Up Succesfull";
     alert(message);
  }
      console.log(data);

      
      const handleSubmitForm=async (event)=>{
        event.preventDefault();
        setGlobalData(data);
        const response=await signUpApi(data);

        console.log(response);
        showAlert();
      }
    return (
        <>
<form className="max-w-sm mx-auto mt-5 bg-slate-200 p-8 rounded border- absolute md:mr-28">
  <div className="mb-5">
    <label htmlFor="email-alternative" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" name="email" id="email-alternative" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body" onChange={handleChange} placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password-alternative" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
    <input type="password" name="password" id="password-alternative" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body" onChange={handleChange} placeholder="••••••••" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password-alternative" className="block mb-2.5 text-sm font-medium text-heading">Confirm password</label>
    <input type="password" id="password-alternative" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"   placeholder="••••••••" required />
  </div>
  

  <RadioComponent handleChange={handleChange}/>
  <div className="flex items-start mb-5">
    <label htmlFor="remember-alternative" className="flex items-center h-5">
      <input id="remember-alternative" name="type" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
      <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
    </label>
  </div>
  <button type="submit" className="text-white bg-sky-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleSubmitForm}>SignUp</button>
</form>
        </>
    )
}