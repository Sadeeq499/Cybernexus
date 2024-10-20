import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Logo } from "../assets/Index";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 left-0 right-0 bg-white bg-opacity-70 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* <div className="text-xl font-bold text-gray-800">
          Mac Fulfillment Services
        </div> */}
        <img 
        onClick={() => navigate("/")}
        src={Logo} alt="CyberNexus Logo" className="w-18 h-12 cursor-pointer" />
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
              {isHomePage ? (
                <ScrollLink
                  to="repair-section"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  Repair
                </ScrollLink>
              ) : (
                <Link to="/#repair-section" className="text-gray-600 hover:text-gray-800">
                  Repair
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="contact-section"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              ) : (
                <Link to="/#contact-section" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
