import heinrich from "../assets/images/links_img/tm_billede_hm.jpg";

import Thermomix from "../assets/images/thermomix_img/thermomix_banner.webp";
function Omoshero() {
  return (
    <section className="max-w-screen-xl mx-5 py-10 lg:pt-40 md:pt-24 lg:mx-auto">
      <div className="grid py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 animate-fade-right ">
          <h1 className="max-w-2xl mb-4 font-extrabold tracking-tight leading-tight ">
            Hvad og hvem er
            <span className="text-primary"> ThermomixFan</span>?
          </h1>
          <p className="max-w-2xl ">
            Jeg hedder <span className="font-bold">Heinrich Mortensen</span> og
            er ejer af Thermomixfan.dk. Jeg er madnørd til fingerspidserne og
            elsker at arbejde med min Thermomix, som er min schweitzerkniv i
            køkkenet. Jeg bruger den til alle store og små opgaver, når jeg
            kokkererer. Uanset om det er forretter, hovedretter, desserter,
            bagværk, dampning af madvarer, hakke/snitte opgaver og meget andet.
            <br></br>
            <br></br>Jeg er ansat af Sylvest& Co, som er eneimportør af
            Thermomix i Danmark. Jeg virker som Teamleder og kunderådgiver, og
            jeg elsker at dele min viden og passion for madlavning med og om
            Thermomix. Jeg er ekspert i Thermomixuniverset, om end der altid kan
            findes nye muligheder i brugen af maskinen
          </p>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex animate-fade-left items-start">
          <div className=" ">
            <div className="flex justify-center">
              <img src={heinrich} alt="Thermomix" className=" rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Omoshero;
