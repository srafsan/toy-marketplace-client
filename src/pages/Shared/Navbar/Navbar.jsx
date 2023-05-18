import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const listItems = (
    <>
      <li>
        <NavLink to="/" className="bg-white text-black">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-toys" className="bg-white text-black">
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink to="my-toys" className="bg-white text-black">
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink to="add-toy" className="bg-white text-black">
          Add a Toy
        </NavLink>
      </li>
      <li>
        <NavLink to="blogs" className="bg-white text-black">
          Blogs
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">RafToys</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL && user?.email && (
          <div
            className="mr-2 tooltip tooltip-left"
            data-tip={`${user.displayName}`}
          >
            <img
              src={user?.photoURL}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt=""
            />
          </div>
        )}
        {user ? (
          <button className="btn btn-warning" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-warning">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
