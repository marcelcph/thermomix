import React from "react";
import Omoshero from "../components/Omos-hero";
import Faq from "../components/Faq";
import Contactjumbotron from "../components/Contact-jumbotron";

function Omos() {
  return (
    <>
      <div className="bg-gradient-to-tr from-white via-white-700 to-white px-5">
        <Omoshero />
        <Contactjumbotron />
        <Faq />
      </div>
    </>
  );
}

export default Omos;
