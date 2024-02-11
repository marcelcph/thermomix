import React from "react";
import Contactjumbotron from "../components/Contact-jumbotron";
import Contacthero from "../components/Contacthero";
function Kontakt() {
  return (
    <>
      <div className=" bg-gradient-to-bl from-blue-300 via-blue-700 to-secondary pt-32 md:pt-32 px-5 ">
        <Contacthero />
        <Contactjumbotron />
      </div>
    </>
  );
}

export default Kontakt;
