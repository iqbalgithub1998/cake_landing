import React, { useRef, useState } from "react";
import Image from "next/image";
import logo from "../assets/bake.cake.svg";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";

const Navbar = ({ moveToSection }) => {
  const [btnStyle, setBtnStyle] = useState([
    "block",
    "self-end",
    "hamburger",
    "md:hidden",
  ]);
  const [menuStyle, setMenuStyle] = useState([
    "absolute",
    "flex-col",
    "items-center",
    "self-end",
    "py-8",
    "mt-10",
    "space-y-6",
    "font-bold",
    "bg-white",
    "sm:w-auto",
    "sm:self-center",
    "left-6",
    "right-6",
    "drop-shadow-md",
    "hidden",
  ]);

  const openMenu = (list) => {
    const style = [...btnStyle];
    const mstyle = [...menuStyle];

    if (style.includes("open")) {
      //true
      const index = style.findIndex((clas) => clas === "open");
      style.splice(index, 1);
      mstyle.pop();
      mstyle.push("hidden");
    } else {
      //false
      style.push("open");
      mstyle.pop();
      console.log(mstyle);
      mstyle.push("flex");
    }

    setBtnStyle([...style]);
    setMenuStyle([...mstyle]);
    if (list) {
      moveToSection(list);
    }
  };

  return (
    <>
      <nav className="md:container mx-auto p-5 relative  flex justify-between  ">
        <Image src={logo} alt="logo" className="cursor-pointer" />
        <div className=" hidden md:flex md:space-x-8 lg:space-x-10">
          {["Home", "About", "Products", "Contact"].map((list, index) => (
            <div key={index} onClick={() => moveToSection(list)}>
              <span className="text-black font-medium cursor-pointer  hover:text-slate-500">
                {list}
              </span>
            </div>
          ))}
        </div>
        <div className="hidden md:flex  md:space-x-6 lg:space-x-10">
          <div className="flex cursor-pointer">
            <IoPersonOutline className="text-darkOrange w-6 h-6" />
            <span className="font-semibold  h-8">My Profile</span>
          </div>
          <div className="flex cursor-pointer">
            <IoCartOutline className="text-darkOrange w-6 h-6" />
            <span className="font-semibold  h-8">Cart</span>
          </div>
        </div>
        <div className="md:hidden w-full flex justify-end">
          <button
            id="menu-btn"
            onClick={openMenu}
            className={btnStyle.join(" ")}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className=" md:hidden z-50">
          <div id="menu" className={menuStyle.join(" ")}>
            <a
              className="cursor-pointer  hover:text-darkOrange"
              onClick={() => openMenu("Home")}
            >
              Home
            </a>
            <a
              className="cursor-pointer  hover:text-darkOrange"
              onClick={() => openMenu("About")}
            >
              About
            </a>
            <a
              className="cursor-pointer  hover:text-darkOrange"
              onClick={() => openMenu("Products")}
            >
              Products
            </a>
            <a
              className="cursor-pointer  hover:text-darkOrange"
              onClick={() => openMenu("Contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
