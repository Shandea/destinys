import React from "react";
import { NavLink } from "react-router-dom";
import LeftDotsIcon from "../../Assets/Icons/LeftDotsIcon.png";
import RightDotsIcon from "../../Assets/Icons/RightDotsIcon.png";
import CakeIcon from "../../Assets/Icons/CakeIcon.png";
import CupCakeIcon from "../../Assets/Icons/CupcakeIcon.png";
import CookieIcon from "../../Assets/Icons/CookieIcon.png";

const Header = ({ isVisible }) => {
  const links = [
    { to: "/cake", title: "Cake", icon: CakeIcon },
    { to: "/cupcake", title: "Cupcakes", icon: CupCakeIcon },
    { to: "/cookies", title: "Cookies", icon: CookieIcon },
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-accentAqua py-2">
      <div className="flex items-center">
        <img
          src={LeftDotsIcon}
          alt="Left Dots"
          className="w-20 h-20 hidden md:block"
        />
        <div className="flex grow justify-evenly">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex flex-col items-center text-primaryBlue ${
                  isActive ? "font-bold underline" : "hover:text-secondaryRed"
                }`
              }
            >
              <img
                src={link.icon}
                alt={`${link.title} Icon`}
                className="w-20 h-20"
              />
              <span className="text-lg">{link.title}</span>
            </NavLink>
          ))}
        </div>
        <img
          src={RightDotsIcon}
          alt="Right Dots"
          className="w-20 h-20 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Header;
