import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsopen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="w-full py-6 px-2.5 sticky top-0 bg-white z-50 shadow-sm">
      <nav className="w-full flex justify-between items-center px-2 py-2 sm:px-4 md:px-6 lg:px-8 xl:px-8 font-medium">
        {!isOpen && (
          <div className="text-3xl lg:text-4xl font-extrabold">SHOP.CO</div>
        )}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8  mt-3">
          <li>
            <Link to="/shop" className="flex items-center hover:text-gray-400">Shop<RiArrowDropDownLine  className="text-4xl " /></Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/onsale">On Sale</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/new">New Arrivals</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/brands">Brands</Link>
          </li>
        </ul>

       {!isOpen && (
          <div className="hidden md:block relative">
             <CiSearch className="absolute  text-gray-700 text-2xl left-3 top-6 -translate-y-1/2"  />
            
            <input
              type="text"
              placeholder="Search for Product..."
              className="pl-10 pr-2 py-3 border rounded-full  w-full gap-12 border-none bg-gray-100"
            />
           
          </div>
        )}
         {!isOpen && (
          <div className="flex md:flex items-center space-x-4">
            <HiOutlineShoppingCart className="text-xl hover:text-gray-400" />
            <FaRegCircleUser className="text-xl hover:text-gray-400" />
          </div>
        )}
        <div className="md:hidden flex">
          <button
            onClick={() => setIsopen(!isOpen)}
            className="text-gray-700 text-2xl top-7 right-4 absolute"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>
      
      {isOpen && (
        <ul className="fixed mt-5 left-0 flex flex-col w-full h-screen px-4 pb-4 md:hidden space-y-5  bg-gray-300 ">
          <li>
            <Link className="hover:text-gray-400" to="/shop">Shop</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/onsale">On Sale</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/new">New Arrivals</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/brands">Brands</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
