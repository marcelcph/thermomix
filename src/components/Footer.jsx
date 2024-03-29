import React from "react";
import Logo from "../assets/images/logo/Logo_hvid/Thermomix_logo_hvid.png";
import { Link } from "react-router-dom";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <footer className="!bg-gray-700  " aria-labelledby="footer-heading">
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
                    Links
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
                        to="/artikler"
                        onClick={() => {
                          scrollToTop();
                        }}
                        className="text-sm font-normal text-white hover:text-primary"
                      >
                        ARTIKLER
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
                    <li className="flex text-white">
                      Thermomixfan v/Heinrich Mortensen
                    </li>
                    <li className="flex">
                      <a
                        href="mailto:kontakt@cleverreply.dk"
                        className=" text-white hover:text-primary"
                      >
                        E-mail: info@thermomixfan.dk
                      </a>
                    </li>
                    <li className="flex text-white">Tlf: 5223 0022</li>
                    <li className="flex text-white">
                      Parkvej 1F,7 4000 Roskilde
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
