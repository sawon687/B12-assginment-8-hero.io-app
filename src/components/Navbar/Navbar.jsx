
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import giticon from '../../assets/github.png'




const Navbar = () => {
    
    return (
        <>
            <div className="navbar md:px-20 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu  menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-25 space-y-7 p-2 shadow">
            <li className='text-center '><NavLink className={ ({isActive})=> isActive?'border-b-3 text-[#632EE3]':''} to='/Home'>Home</NavLink></li>
           <li className='text-center '> <NavLink className={ ({isActive})=> isActive?'border-b-3 text-[#632EE3]':''} to='/Apps'>Apps</NavLink></li>
           <li className='text-center '> <NavLink className={ ({isActive})=> isActive?'border-b-3 text-[#632EE3]':''} to='/Installation'>Installation</NavLink></li>
      </ul>
    </div>
    <Link to='/Home' className="btn btn-ghost text-xl"><figure className='w-[40px] '><img src={logo} alt="" /></figure><h1 className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-2xl font-bold'>HERO.IO</h1> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu flex gap-10 menu-horizontal px-1">
 <li><NavLink className={ ({isActive})=> isActive?'border-b-3 text-[#632EE3]':''} to='/Home'>Home</NavLink></li>
           <li> <NavLink className={ ({isActive})=> isActive?'border-b-3 text-[#632EE3]':''} to='/Apps'>Apps</NavLink></li>
           <li> <NavLink className={ ({isActive})=> isActive?'border-b-3 text-[#632EE3]':''} to='/Installation'>Installation</NavLink></li>
      
        
      
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='https://github.com/sawon687' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  "> <img src={giticon} alt="" />Contribute</Link>
  </div>
</div>
        </>
    );
};

export default Navbar;