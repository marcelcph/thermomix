import React from "react";
import thermomix from "../assets/images/thermomix_img/thermomix_bage.webp";
function Contacthero() {
  return (
    <>
      <section className="animate-fade-left">
        <div className="gap-8 items-center md:mx-auto container pt-32 !mt-0 3xl:my-10 lg:max-w-screen-xl xl:gap-16 md:grid md:grid-cols-1 lg:grid-cols-2 max-w-fit pb-8">
          <div className=" md:mt-0 md:pr-24 lg:pr-0  ">
            <h1 className="mb-4  tracking-tight leading-tight font-extrabold  ">
              Kom i gang med at bruge en Thermomix i dag!
            </h1>
            <p className="mb-6 font-light   ">
              Vi er her for at hjælpe dig med at øge din madglæde og få din
              madlavning til tops! Book en demo og få en gratis konsultation med
              en af vores konsulenter. Vi forsikrer os at du ikke bliver
              skuffet!
            </p>
            <a
              href="#kontakt"
              className="btn bg-primary inline-flex items-center text-white  hover:bg-primary border-none font-medium rounded-lg  px-5 py-2.5 text-center mb-5 md:mb-0"
            >
              Kom i gang
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <img
            className=" w-full  hidden lg:block rounded-xl shadow-2xl animate-fade-right"
            src={thermomix}
            alt="Kontakt os billede"
          />
        </div>
      </section>
    </>
  );
}

export default Contacthero;
