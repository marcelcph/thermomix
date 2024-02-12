import ThermomixProdukt from "../assets/images/thermomix_img/thermomix_produkt.jpg";
function Contactjumbotron() {
  return (
    <section className="  ">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto animate-fade-right">
        <div className="sm:w-1/2 p-8 md:p-10">
          <div className="image object-center text-center">
            <img src={ThermomixProdukt} className="rounded-xl" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5 flex flex-col items-start">
          <div className="text">
            <h2 className="my-2 md:my-4 font-bold ">
              Mere finesse til din
              <span className="text-primary"> madlavning.</span>
            </h2>
            <p className="">
              Vi har en passion for madlavning og hvordan hverdagen kan gøres
              nemmere med en Thermomix i køkkenet. Dette ønsker vi at dele med
              dig, så du kan få glæde af alle de fordele, som en maskine som
              denne kan tilbyde.
            </p>
          </div>
          <div className="mt-0 lg:mt-6  flex flex-col">
            <a
              href="#kontakt"
              className="btn bg-primary border-none my-8 inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
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
        </div>
      </div>
      {/* 
      <div className="px-4 py-4 mx-auto sm:px-6 md:px-12 lg:px-16 lg:py-22 container ">
        <div className="flex flex-wrap items-center mx-auto">
          <div className="">
            <div>
              <div className="">
                <div className="">
                  <img className="mx-auto " alt="hero" src={Team} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start text-left">
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter  md:text-7xl lg:text-5xl">
              Vi hjælper med at bygge dit kundenetværk.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left ">
              Du kan kontakte os ved at udfylde kontaktformularen på vores
              hjemmeside eller sende os en e-mail på&nbsp;
              <a className="underline" href="mailto:kontakt@cleverreply.dk">
                kontakt@CleverReply.dk
              </a>
              . Vores team er klar til at besvare dine spørgsmål og hjælpe dig
              med at komme i gang.
            </p>
            <div className="mt-0 lg:mt-6  flex flex-col">
              <a
                href="#kontakt"
                className="btn bg-primary border-none my-8 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Contactjumbotron;
