import { Animate } from "./InView";
import featureimg from "../assets/images/thermomix_img/thermomix_bage.webp";
import Thermomix from "../assets/images/thermomix_img/thermomix_i_brug.webp";

function Features() {
  return (
    <>
      <Animate />
      <div id="løsning"></div>
      <div
        data-aos="zoom-in-down"
        data-aos-offset="250"
        className=" mx-2 max-w-fit lg:mx-auto container "
      >
        <div className="md:max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mb-8">
          <div>
            <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
              Hvad kan en Thermomix gøre for din hverdag?
            </p>
          </div>
          <h2 className="max-w-xl mb-6 font-sans  font-extrabold leading-none tracking-tight text-primary  md:mx-auto">
            <span className="relative inline-block">
              Simpel, lækker og fantastisk mad
            </span>
          </h2>
          <p className=" text-white  ">
            Med en Thermomix i hjemmet, kan du lave alt fra de mest avancerede
            retter til de mest simple. Med vores køkkenmaskine kan du lave mad
            til hele familien, og du kan lave mad til enhver lejlighed. Uanset
            om du er til det enkle eller det avancerede, kan du lave det med en
            Thermomix.
          </p>
        </div>
        <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto place-items-center">
          <div className="flex flex-col justify-center ">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-bold leading-5 text-white">
                  Lækker mad
                </h3>
                <p className=" text-white">
                  Du kan blive din families masterchef og lave lækker mad til
                  dem og dermed gøre hverdagen lidt mere lækker.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-bold leading-5 text-white">
                  Simpel madlavning
                </h3>
                <p className=" text-white">
                  Ved hjælp af et hav af funktioner, kan du lave mad på en
                  simpel og effektiv måde. Opskrifterne er nemme at følge, og
                  simplificerer dermed madlavningen.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-bold leading-5 text-white">
                  Et stort univers af opskrifter
                </h3>
                <p className=" text-white">
                  Ved hjælp af vores opskrifts-univers, kan du finde inspiration
                  til enhver lejlighed og enhver smag som er nem at lave med din
                  Thermomix.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="  shadow-2xl rounded-xl animate-fade-left"
              src={featureimg}
              alt="feature image"
            />
          </div>
        </div>
      </div>

      {/*second feture*/}

      <section className="my-32 ">
        <div
          data-aos="zoom-in-down"
          data-aos-offset="450"
          className="gap-8 items-center py-16 mx-4 md:mx-auto container lg:my-[2.8rem] 3xl:my-10 lg:max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 max-w-fit"
        >
          <img
            className="w-full rounded-xl max-h-full"
            src={Thermomix}
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4  tracking-tight font-bold text-white ">
              Kom i gang med at din Thermomix og bliv en mester i køkkenet!
            </h2>
            <p className="mb-6 font-light text-white  ">
              Vi er her for at hjælpe dig med at øge din madglæde og få din
              madlavning til tops!
            </p>
            <a
              href="#kontakt"
              className="btn bg-primary inline-flex items-center text-white  hover:bg-primary border-none font-medium rounded-lg  px-5 py-2.5 text-center"
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
        </div>
      </section>
    </>
  );
}

export default Features;
