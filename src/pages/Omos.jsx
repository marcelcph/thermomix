import React from "react";
import Omoshero from "../components/Omos-hero";
import Omosteam from "../components/Omos-team";
import Faq from "../components/Faq";
import Contactjumbotron from "../components/Contact-jumbotron";

function Omos() {
  return (
    <>
      <div className="bg-gradient-to-bl from-blue-300 via-blue-700 to-secondary pt-14 md:pt-8 lg:pt-0">
        <Omoshero />
        <Contactjumbotron />
        <Faq />
        <Omosteam />
      </div>
    </>
  );
}

export default Omos;
