import { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <section className="container mx-auto sm:px-16 px-6">
      <nav className="w-full py-4 flex items-center justify-between navbar">
        <div className="">
          <img src={logo} alt="" className="w-[100px]" />
        </div>

        <ul className="hidden md:flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`
          font-semibold
          cursor-pointer
          text-base
          ${active === nav.title ? "text-black" : "text-linkColor"}
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          `}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <IoClose style={{ width: "50px", height: "50px" }} />
            ) : (
              <IoMdMenu style={{ width: "50px", height: "50px" }} />
            )}
          </button>

          <div
            className={`${toggle ? "flex" : "hidden"}
        p-6 footer-bg absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-start flex-1 gap-6 ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
          font-semibold
          cursor-pointer
          text-base
          ${active === nav.title ? "text-[#FFCF59]" : "text-white"}
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          `}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
