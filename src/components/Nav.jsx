import { Link, NavLink } from "react-router-dom";
import { ScrollNav } from "./InView";

import Logo from "../assets/images/logo/Logo_hvid/Thermomix_logo_hvid.png";
import Kryds from "../assets/kryds.svg";

function Nav() {
  const activeLink =
    "!underline !bg-black !shadow-transparent !border-transparent !bg-transparent !hover:text-primary !hover:shadow-transparent !hover:border-transparent !hover:bg-transparent !font-medium";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const closeDrawer = () => {
    const drawerToggle = document.querySelector(".drawer-toggle");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  return (
    <ScrollNav>
      {(inView) => (
        <div className="drawer drawer-end font-poppins ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div
              className={`w-screen md:px-10 navbar justify-between pt-2 pb-2  !bg-gray-700 !fixed z-20 ${
                inView
                  ? "animate-flip-up animate-duration-[400ms]"
                  : "!bg-black opacity-90 animate-flip-down animate-duration-[400ms]"
              }`}
            >
              <div className="px-2 mx-2 hover:animate-jump animate-duration-500">
                <Link
                  to="/"
                  onClick={() => {
                    scrollToTop();
                    closeDrawer();
                  }}
                >
                  <img className="md:w-40 w-32" src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-none hidden lg:block ">
                <ul className="menu menu-horizontal items-center text-white text-base normalmenu font-medium">
                  <li className="hover:animate-jump">
                    <NavLink
                      className={({ isActive }) => (isActive ? activeLink : "")}
                      to="/"
                      onClick={scrollToTop}
                    >
                      FORSIDE
                    </NavLink>
                  </li>
                  <li className="hover:animate-jump">
                    <NavLink
                      className={({ isActive }) => (isActive ? activeLink : "")}
                      to="/artikler"
                      onClick={scrollToTop}
                    >
                      INSPIRATION
                    </NavLink>
                  </li>
                  <li className="hover:animate-jump">
                    <NavLink
                      className={({ isActive }) => (isActive ? activeLink : "")}
                      to="/konsulent"
                      onClick={scrollToTop}
                    >
                      BLIV KONSULENT
                    </NavLink>
                  </li>
                  <li className="hover:animate-jump">
                    <NavLink
                      className={({ isActive }) => (isActive ? activeLink : "")}
                      to="/om-os"
                      onClick={scrollToTop}
                    >
                      OM OS & FAQ
                    </NavLink>
                  </li>
                  <li className="hover:animate-jump">
                    <NavLink
                      className={({ isActive }) => (isActive ? activeLink : "")}
                      to="/events"
                      onClick={scrollToTop}
                    >
                      EVENTS
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="lg:block hidden">
                <a href="#kontakt">
                  <button className="btn lg:w-56  bg-green-700 border-0 text-white hover:bg-white hover:text-primary hover:animate-jump animate-duration-[800ms] animate-ease-out">
                    Kontakt os
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="drawer-side z-20">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu items-end text-secondary p-4 pt-8 w-64 h-full font-medium sidemenu">
              <label htmlFor="my-drawer-3">
                <img className="w-10" src={Kryds} alt="kryds" />
              </label>
              <li className="hover:animate-jump text-black">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="/"
                  onClick={() => {
                    scrollToTop();
                    closeDrawer();
                  }}
                >
                  FORSIDE
                </NavLink>
              </li>
              <li className="hover:animate-jump text-black">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="/artikler"
                  onClick={() => {
                    scrollToTop();
                    closeDrawer();
                  }}
                >
                  INSPIRATION
                </NavLink>
              </li>
              <li className="hover:animate-jump text-black">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="/konsulent"
                  onClick={() => {
                    scrollToTop();
                    closeDrawer();
                  }}
                >
                  BLIV KONSULENT
                </NavLink>
              </li>
              <li className="hover:animate-jump text-black">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="/events"
                  onClick={() => {
                    scrollToTop();
                    closeDrawer();
                  }}
                >
                  EVENTS
                </NavLink>
              </li>
              <li className="hover:animate-jump text-black">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="/om-os"
                  onClick={() => {
                    scrollToTop();
                    closeDrawer();
                  }}
                >
                  OM OS & FAQ
                </NavLink>
              </li>

              <NavLink
                className={({ isActive }) => (isActive ? activeLink : "")}
                to="/kontakt"
                onClick={() => {
                  scrollToTop();
                  closeDrawer();
                }}
              >
                <button className="btn w-56 mt-10 bg-primary border-0 text-white hover:bg-green-600">
                  Kontakt os
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 

01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </button>
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </ScrollNav>
  );
}

export default Nav;
