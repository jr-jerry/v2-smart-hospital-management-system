 
export const Navbar = () => {
  return (
    <nav
     className="flex justify-between items-center bg-[#b1aeae] px-5 py-2">
      <div>HMS</div>
      <ul className="flex gap-x-2 list-none m-0">
        <li><a className="text-[white] transition hover:text-[#2c2929] hover:delay-75" href="#">Home</a> </li>
        <li><a className="text-[white]  transition hover:text-[#2c2929] hover:delay-75"  href="#">About</a></li>
        <li><a className="text-[white] transition hover:text-[#2c2929] hover:delay-75" href="#">Login</a></li>
      </ul>
    </nav>
  )
}
