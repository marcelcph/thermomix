import React from "react";
import Memis from "../assets/images/team/dev.svg";
import Emil from "../assets/images/team/cto.svg";
import Kasper from "../assets/images/team/ceo.svg";
import Nick from "../assets/images/team/teamleader.svg";

function Omosteam() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <h2 className=" text-center capitalize  font-extrabold animate-fade ">
          Vores team
        </h2>
        <p className="max-w-2xl mx-auto my-6 text-center animate-fade-down animate-delay-300">
          Vi er et passioneret team af dedikerede fagfolk, der forener
          forskellige kompetencer og perspektiver mod et fælles mål. Vores
          mangfoldighed er vores styrke, og gennem samarbejde og åben
          kommunikation skaber vi enestående resultater.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 animate-fade-down animate-delay-700">
          <a href="mailto:kc@cleverreply.dk" target="_blank">
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary border-white-700 hover:border-transparent">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={Kasper}
                alt=""
              />
              <h3 className="mt-4  font-semibold  capitalize text-white group-hover:text-white">
                Kasper Christensen
              </h3>
              <p className="mt-2 text-gray-200 capitalize group-hover:text-gray-300">
                CEO
              </p>
              <div className="flex mt-3 -mx-2"></div>
            </div>
          </a>
          <a href="mailto:mm@cleverreply.dk" target="_blank">
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary border-white-700 hover:border-transparent">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={Memis}
                alt=""
              />
              <h3 className="mt-4  font-semibold  capitalize text-white group-hover:text-white">
                Emil Mortensen
              </h3>
              <p className="mt-2 text-gray-200 capitalize group-hover:text-gray-300">
                CTO
              </p>
              <div className="flex mt-3 -mx-2"></div>
            </div>
          </a>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary border-white-700 hover:border-transparent">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={Memis}
              alt=""
            />
            <h3 className="mt-4  font-semibold  capitalize text-white group-hover:text-white">
              Memis Göz
            </h3>
            <p className="mt-2 text-gray-200 capitalize group-hover:text-gray-300">
              Developer - Praktikant
            </p>
            <div className="flex mt-3 -mx-2"></div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary border-white-700 hover:border-transparent">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={Nick}
              alt=""
            />
            <h3 className="mt-4  font-semibold  capitalize text-white group-hover:text-white">
              Nick Madsen
            </h3>
            <p className="mt-2 text-gray-200 capitalize group-hover:text-gray-300">
              Teamleder
            </p>
            <div className="flex mt-3 -mx-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Omosteam;
