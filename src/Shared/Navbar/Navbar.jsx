import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div className="py-[10px] bg-black">
            <div className="container">
                <div className="navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-black text-white btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/" className="text-[16px] font-medium">Booking</Link></li>
        <li><Link to="/" className="text-[16px] font-medium">Feature</Link></li>
        <li><Link to="/" className="text-[16px] font-medium">Facility</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/" className="uppercase font-bold text-white text-[18px] md:text-[20px] lg:text-[30px]">Hotel-Room</Link>
  </div>
  <div className="navbar-end">
    
        <div className="flex space-x-2">
        <div className="flex space-x-3">
            <Link to="/login" className="btn bg-[#00001a] text-[14px] md:text-[15px] lg:text-[18px] uppercase text-white">Login</Link>
            <Link to="/register" className="btn bg-[#00001a] text-[14px] md:text-[15px] lg:text-[18px] uppercase text-white">Register</Link>

        </div>
            <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          src="https://i.ibb.co/r2GPdRTz/6222141000734853155.jpg"
          alt="User"
        />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <a className="justify-between">
          Dashboard
          <span className="badge">New</span>
        </a>
      </li>
      <li><a>Profile</a></li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
          </div>
        
        </div>
</div>
</div>
            </div>
        </div>
    )
}

export default Navbar;