import icon from "../bookimages/books-book-svgrepo-com.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-lg bg-blue-100">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="./"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={icon} alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MyLibrary
            </span>
          </a>
          <div className="flex md:order-2">
            <Link to="search">
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Search
              </button>
            </Link>{" "}
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
