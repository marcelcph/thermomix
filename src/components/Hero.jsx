import HeroImg from "../assets/images/thermomix_img/thermomix_banner.webp";
import { ScrollNav } from "./InView";

import { InView } from "react-intersection-observer";
function Hero() {
  return (
    <ScrollNav>
      {(inView) => (
        <section className="animate-fade-left">
          <div className="gap-8 content-center items-center min-h-screen  lg:mx-auto container lg:p-32 xl:p-0 lg:max-w-screen-xl 3xl:max-w-screen-2xl xl:gap-16 grid xl:grid-cols-2 max-w-fit ">
            <div className="">
              <h1 className=" font-extrabold animate-fade-right tracking-tight leading-tight mb-4">
                Vær din families <span></span>
                <span className="underline decoration-primary">masterchef</span>
              </h1>
              <p className="mb-6 font-light   ">
                Vær en mester i køkkenet med en køkkenmaskine der sætter
                kvaliteten i fokus. Med{" "}
                <strong className="font-extrabold">Thermomix</strong> TM6 kan du
                lave alt fra de mest avancerede retter til de mest simple.{" "}
              </p>
              <a
                href="#kontakt"
                className="btn bg-primary inline-flex items-center text-white  hover:bg-primary border-none font-medium rounded-lg  px-5 py-2.5 text-center mr-5 my-2 lg:my-0"
              >
                Book en demo
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
              <a href="#løsning">
                <button className="btn btn-outline text-black">
                  Hvad kan den gøre for dig?
                </button>
              </a>
            </div>
            <img
              className="w-full rounded-lg shadow-2xl animate-fade-right"
              src={HeroImg}
              alt="Kontakt os billede"
            />
          </div>
          {/*point downer*/}

          <div
            className={`
      ${
        inView
          ? "absolute animate-fade-down animate-infinite animate-ease-in-out bottom-3 left-[50%] right-[50%] "
          : "absolute animate-fade-down animate-infinite animate-ease-in-out bottom-3 left-[50%] right-[50%] invisible"
      }
      
      `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </section>
      )}
    </ScrollNav>
  );
}

export default Hero;
