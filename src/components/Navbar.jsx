import react, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
 const onCartPage = location.pathname==='/cart'?true:false;

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              to="/"
            >
              Brand
            </Link>
          </div>

          {/*<!-- Mobile menu button -->*/}
          <div className="flex md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/*<!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
        <div
          className={
            "items-center md:flex" + (navbarOpen ? " block" : " hidden")
          }
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >
              Shop
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </div>
          {
              !onCartPage&&  <div className="flex justify-center md:block">
              <Link
                to="/cart"
                className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
              >
                <span className="relative inline-block">
                  <FiShoppingCart />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {totalItems}
                  </span>
                </span>
              </Link>
            </div>
          }
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
