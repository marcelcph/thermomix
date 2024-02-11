import React from "react";
import Konkurrence from "../assets/images/konkurrence.webp";
function Leadgenhero() {
  return (
    <>
      <section className=" px-5 py-10 lg:pt-40 max-w-screen-xl mx-auto md:pt-24">
        <div className="grid py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 animate-fade-right ">
            <h1 className=" mb-4  font-extrabold tracking-tight leading-tight text-white">
              Optimer din Leadgenerering & Få flere kvalitetsleads i dag!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white-500 lg:mb-8 ">
              Effektive strategier og værktøjer til at tiltrække, engagere og
              konvertere potentielle kunder.
            </p>
            <a
              href="#kontakt"
              className="btn bg-primary my-8 inline-flex items-center justify-center  py-3 mr-3  font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 border-none"
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
          <div className="lg:mt-0 lg:col-span-5 lg:flex col-span-1 animate-fade-left items-start">
            <div className="mockup-browser border bg-base-300 lg:w-auto w-full max-w-[80vw]">
              <div className="mockup-browser-toolbar">
                <div className="input">Konkurrence.CleverReply.dk</div>
              </div>
              <div className="flex justify-center bg-base-200">
                <img
                  src={Konkurrence}
                  alt="konkurrence"
                  class="w-full max-w-full lg:max-w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leadgenhero;
