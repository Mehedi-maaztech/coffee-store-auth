import logo from '../assets/more/logo1.png';
import headbg from '../assets/more/15.jpg';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const link = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
    {/* <li><NavLink to='/updateCoffee'>About</NavLink></li> */}
    <li><NavLink to='/auth/login'>Login</NavLink></li>
  </>
  return (
    <header
      className="shadow-lg"
      style={{
        backgroundImage: `url('${headbg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="navbar container mx-auto text-white">
        {/* Left - Logo & Title */}
        <div className="flex-1 flex items-center gap-2">
          <img src={logo} alt="Coffee Bean Icon" className="h-12 w-12" />
          <span className="text-2xl md:text-3xl font-bold">
            Espresso Emporium
          </span>
        </div>

        {/* Right - Menu for large screens */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            {link}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;