import React from "react";

import Konkurrence from "../assets/images/konkurrence3.webp";

function Omoshero() {
  return (
    <section className="max-w-screen-xl mx-5 py-10 lg:pt-40 md:pt-24 lg:mx-auto">
      <div className="grid py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 animate-fade-right ">
          <h1 className="max-w-2xl mb-4 font-extrabold tracking-tight leading-tight text-white">
            Mestre Kunsten af Leadgenerering: Vores Historie og Ekspertise
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white-500 lg:mb-8 ">
            Drivende innovation i leadgenerering med dedikation til resultater
            og kundeengagement.
          </p>
          <a
            href="#kontakt"
            className="btn bg-primary border-none inline-flex items-center justify-center  py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Kontakt os og få et tilbud
            <svg
              className="w-5 h-5 ml-2 -mr-1"
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
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex animate-fade-left items-start">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">Konkurrence.CleverReply.dk</div>
            </div>
            <div className="flex justify-center  bg-base-200">
              <img src={Konkurrence} alt="konkurrence" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Omoshero;
