import { NavLink } from "react-router-dom";
import logo from "../assets/react-logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-600 rounded-md px-3 py-2"
      : "text-white dark:text-gray-300 hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-100 rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 dark:bg-gray-900 border-b border-indigo-500 dark:border-gray-700 transition-colors duration-500 ease-in-out">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white dark:text-gray-100 text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>

          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
