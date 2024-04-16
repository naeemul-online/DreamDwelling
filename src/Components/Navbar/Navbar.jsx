import logo from "../../../public/logo.png";

import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user, logOut);
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/update-profile">Update Profile</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center cursor-pointer text-2xl">
         
          <img className="w-16" src={logo} alt="" />
          <h2 className="font-bold text-3xl">Dream<span className="text-red-500">D</span>welling</h2>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user?.displayName || "user name not found"}
                </button>
              </li>
              <li>
                <button onClick={logOut} className="btn btn-sm  btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
