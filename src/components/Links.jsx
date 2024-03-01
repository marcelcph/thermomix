import { Link } from "react-router-dom";
import inspiration from "../assets/images/links_img/madbillede.jpg";
import HeinrichThermo from "../assets/images/links_img/tm_billede_hm.jpg";
import konsulent from "../assets/images/links_img/bliv_konsulent.png";
import { Animate } from "./InView";

function Links() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="font-extrabold">Læs mere</h1>
      </div>
      <section className="container mx-auto text-center pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              <img
                src={inspiration}
                alt="Inspiration til din ThermoMix"
                className="object-cover object-center w-full h-96 rounded-t-xl"
              />
              <Link
                to="/artikler"
                className="btn btn-primary btn-block font-extrabold text-white"
                onClick={scrollToTop}
              >
                INSPIRATION
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              <img
                src={konsulent}
                alt="Bliv Konsulent"
                className="object-cover object-center w-full h-96 rounded-t-xl"
              />
              <Link
                to="/konsulent"
                className="btn btn-primary btn-block font-extrabold text-white"
                onClick={scrollToTop}
              >
                BLIV KONSULENT
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              <img
                src={HeinrichThermo}
                alt="Thermomix"
                className="object-cover object-center w-full h-96 rounded-t-xl"
              />
              <Link
                to="/om-os"
                className="btn btn-primary btn-block font-extrabold text-white"
                onClick={scrollToTop}
              >
                OM THERMOMIXFAN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Links;
