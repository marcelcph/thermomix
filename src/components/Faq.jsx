import React from "react";
function FAQ() {
  return (
    <>
      <div className="container px-2 md:px-40 mx-auto py-8 ">
        <h2 className=" font-bold py-3 text-center">F.A.Q</h2>
        <div className="collapse collapse-arrow bg-primary ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvordan fungerer en demonstration af Thermomix (Ikke maskinen)
          </div>
          <div className="collapse-content ">
            <p className="text-black">
              Når du kontakter os for at få en demonstration af Thermomix,
              finder vi en tid, der passer dig. Demonstration koster ikke noget,
              og er helt og aldeles uforpligtende. <br></br> <br></br>Når vi
              laver en aftale, vil jeg vi spørge dig lidt om, hvad du og din
              familie kan lide at spise. Ud fra dine ønsker, vil jeg sende en
              indkøbsliste til dig. Når vi mødes, vil vi så sammen lave den/de
              retter, som du ønsker. Vi har en demonstrationsmaskine med. Hvis
              du samler flere personer til demonstrationen, sørger vi for at
              tilpasse antallet af konsulenter, så alle kan få en god
              vejledning.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvordan fungerer en demonstration af maskinen?
          </div>
          <div className="collapse-content ">
            <p className="text-black">
              Vi er på forskellige messer og events, hvor vi demonstrerer vores
              maskine. Du kan også booke en demonstration hos dig selv, hvor vi
              kommer ud og viser dig, hvordan maskinen fungerer, og hvad den kan
              gøre for dig.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvilke resultater kan jeg forvente….
          </div>
          <div className="collapse-content ">
            <p className="text-black">
              Med en Thermomix i dit køkken, får du en makker, der hjælper dig
              gennem alle faser i tilberedningen af dine retter. Thermomix og
              det tilhørende opskriftunivers fra Cookidoo, giver dig 90.000
              opskrifter at vælge i mellem. Det vil spare tid, give bedre smag
              og konsistens, mindre madspild og mere passion for madlavning.
              Thermomix er designet til at hjælpe dig på dine præmisser og
              hjælper dig med madlavningen på en nem, overskuelig og effektiv
              måde.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
