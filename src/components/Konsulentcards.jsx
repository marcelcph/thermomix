import React from "react";
import fleksibilitet from "../assets/images/konsulent_svg/smiling-girl.svg";
import tjenpenge from "../assets/images/konsulent_svg/premium.svg";
import karriere from "../assets/images/konsulent_svg/together.svg";
import viden from "../assets/images/konsulent_svg/knowledge.svg";
import udvikling from "../assets/images/konsulent_svg/speed.svg";
import fællesskab from "../assets/images/konsulent_svg/support.svg";

function Konsulentcards() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="!text-3xl tracking-tighter sm:text-4xl text-center mb-3">
          De mange fordele ved:
        </h2>
        <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-center mb-8">
          At være en del af <span className="text-primary">Thermomix®</span>
          -familien
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch justify-center">
          <div className="flex flex-col items-center justify-center p-4 bg-white shadow-xl rounded-xl  gap-5">
            <img alt="Logo" className="h-40 w-auto mb-2" src={fleksibilitet} />
            <p className="text-3xl font-extrabold mt-2 underline decoration-primary">
              Fleksibilitet
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white shadow-xl rounded-xl  gap-5">
            <img alt="Logo" className="h-40 w-auto mb-2" src={tjenpenge} />
            <p className="text-3xl font-extrabold mt-2 underline decoration-primary">
              Tjen penge
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white shadow-xl rounded-xl gap-5">
            <img alt="Logo" className="h-40 w-auto mb-2" src={fællesskab} />
            <p className="text-3xl font-extrabold mt-2 underline decoration-primary">
              Karriere
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white shadow-xl rounded-xl gap-5">
            <img alt="Logo" className="h-40 w-auto mb-2" src={viden} />
            <p className="text-3xl font-extrabold mt-2 underline decoration-primary">
              Viden
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white shadow-xl rounded-xl gap-5">
            <img alt="Logo" className="h-40 w-auto mb-2" src={udvikling} />
            <p className="text-3xl font-extrabold mt-2 underline decoration-primary">
              Udvikling
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white shadow-xl rounded-xl gap-5">
            <img alt="Logo" className="h-40 w-auto mb-2" src={karriere} />
            <p className="text-3xl font-extrabold mt-2 underline decoration-primary">
              Fællesskab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Konsulentcards;
