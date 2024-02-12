import { Link } from "react-router-dom";
import Thermo1 from "../assets/images/thermomix_img/thermomix_bage.webp";
import { Animate } from "./InView";

function Links() {
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="font-extrabold">Læs mere</h1>
      </div>
      <section className="container mx-auto text-center pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              {" "}
              <img
                src={Thermo1}
                alt="Thermomix"
                className="img-fluid w-full rounded-t-xl"
              />
              <a
                href="https://www.thermomix.dk/"
                className="btn btn-primary btn-block font-extrabold"
              >
                THERMOLINK 1
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              {" "}
              <img
                src={Thermo1}
                alt="Thermomix"
                className="img-fluid w-full rounded-t-xl"
              />
              <a
                href="https://www.thermomix.dk/"
                className="btn btn-primary btn-block font-extrabold"
              >
                THERMOLINK 1
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              {" "}
              <img
                src={Thermo1}
                alt="Thermomix"
                className="img-fluid w-full rounded-t-xl"
              />
              <a
                href="https://www.thermomix.dk/"
                className="btn btn-primary btn-block font-extrabold"
              >
                THERMOLINK 1
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Links;
