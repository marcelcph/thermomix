import React from "react";
import Logo from "../assets/images/logo/Logo_hvid/Logo_hvid.png";
import { Link } from "react-router-dom";
function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <footer className="bg-base-100 " aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className=" py-12 mx-auto max-w-7xl lg:py-16">
          <div className="xl:grid xl:grid-cols-2 xl:gap-8 grid justify-center ">
            <div className="space-y-8 xl:col-span-1">
            <Link
                  to="/"
                  onClick={() => {
                    scrollToTop();
                    
                  }}
                >
              <img
                src={Logo}
                alt="CleverReply Logo"
                className=" md:h-32 h-20 W-20"
              />
              </Link>
            </div>
            <div className="grid grid-cols-2 col-span-2 md:col-span-1 mx-auto gap-8 mt-12 xl:mt-0 ">
              <div className="md:grid md:grid-cols-2 md:gap-8 mx-auto  col-span-2">
                <div>
                  <h3 className="text-m tracking-wider text-primary font-bold uppercase">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <Link
                        to="/"
                        onClick={() => {
                          scrollToTop();
                          
                        }}
                        className="text-sm font-normal text-white hover:text-primary"
                      >
                        FORSIDE
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/leadgen"
                        onClick={() => {
                          scrollToTop();
                          
                        }}
                        className="text-sm font-normal text-white hover:text-primary"
                      >
                        LEADGEN
                      </Link>
                    </li>
                    <li>  
                      <Link
                        to="/om-os"
                        onClick={() => {
                          scrollToTop();
                          
                        }}
                        className="text-sm font-normal text-white hover:text-primary"
                      >
                        OM OS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/privatlivspolitik"
                        onClick={() => {
                          scrollToTop();
                          
                        }}
                        className="text-sm font-normal text-white hover:text-primary"
                      >
                        PRIVATLIVSPOLITIK
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-m  tracking-wider text-primary font-bold uppercase">
                    KONTAKT
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    
                    <li className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>

                      <a
                        href="mailto:kontakt@cleverreply.dk"
                        className="text-sm font-normal text-white hover:text-primary"
                      >
                        Kontakt@CleverReply.dk
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
