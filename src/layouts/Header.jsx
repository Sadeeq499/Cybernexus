import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white bg-opacity-70 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Mac Fulfillment Services
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/warranty"
                className="text-gray-600 hover:text-gray-800"
              >
                Warranty
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Repair
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
