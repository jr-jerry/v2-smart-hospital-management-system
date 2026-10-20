import { useState } from "react";

 
export const Navbar = () => {
  const [isActive,setActive]=useState(false);
  const handleMenuButtonClick=()=>{
    console.log('state change')
    setActive(prev=>!prev);
  }
  
  return (
    <nav
     className="flex justify-between items-center bg-[#b1aeae] px-5 py-2">
      <div>HMS</div>
      <ul id="nav-link" className={`sm:flex sm:gap-x-2 sm:list-none sm:m-0 ${isActive?'hidden':'flex'} flex-col sm:flex-row bg-[#b1aeae] sm:static  absolute  top-10  right-0 sm:right-auto w-* sm:w-auto`}>
        <li><a className="text-[white] transition hover:text-[#2c2929] hover:delay-75" href="#">Home</a> </li>
        <li><a className="text-[white]  transition hover:text-[#2c2929] hover:delay-75"  href="#">About</a></li>
        <li><a className="text-[white] transition hover:text-[#2c2929] hover:delay-75" href="#">Login</a></li>
      </ul>
      <div onClick={handleMenuButtonClick} className="sm:hidden flex  flex-col gap-1 ">
         
        <span className="w-6 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
       
      </div>
    </nav>
  )
}
