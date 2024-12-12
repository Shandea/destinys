import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo/DBLogo.png";
import { FiMenu, FiX } from "react-icons/fi";
import Header from "./Header";

const links = [
  { to: "/", title: "Home" },
  { to: "/about", title: "Our Story" },
  { to: "/services", title: "Our Services" },
  { to: "/community", title: "Our Community" },
  { to: "/contact", title: "Contact Us" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 bg-background">
        <button
          onClick={handleToggleMenu}
          className="md:hidden text-2xl text-primaryBlue"
        >
          {toggleMenu ? <FiX /> : <FiMenu />}
        </button>
        <div className="flex justify-center grow">
          <img src={Logo} alt="Logo" className="w-36" />
        </div>
      </div>
      {toggleMenu && (
        <div className="absolute top-30 left-0 right-0 bg-background z-50">
          <div className="flex flex-col text-center grow">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  link.title === "Contact Us"
                    ? "bg-secondaryRed text-white px-4 py-3 text-xl rounded-t-xl border-2 border-accentAqua flex-1"
                    : isActive
                    ? "text-primaryBlue font-bold underline px-4 py-3 text-xl rounded-t-xl border-2 border-accentAqua flex-1"
                    : "text-primaryBlue px-4 py-3 text-xl hover:bg-accentAqua rounded-md rounded-t-xl border-2 border-accentAqua flex-1"
                }
                onClick={handleLinkClick}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      <nav className="hidden md:flex justify-center bg-background py-2 text-primaryBlue">
        {links.map((link) => (
          <div key={link.to} className="flex grow text-center">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                link.title === "Contact Us"
                  ? "bg-secondaryRed text-white px-4 py-3 text-xl rounded-t-xl border-2 border-accentAqua flex-1"
                  : isActive
                  ? "text-primaryBlue font-bold underline px-4 py-3 text-xl rounded-t-xl border-2 border-accentAqua flex-1"
                  : "px-4 py-3 text-xl hover:bg-accentAqua rounded-t-xl border-2 border-accentAqua flex-1"
              }
            >
              {link.title}
            </NavLink>
          </div>
        ))}
      </nav>
      <Header isVisible={!toggleMenu} />
    </div>
  );
};

export default Navbar;
