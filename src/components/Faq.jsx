import React from "react";
function FAQ() {
  return (
    <>
      <div className="container px-2 md:px-24 mx-auto py-8 ">
        <h2 className=" font-bold py-3 text-center">F.A.Q</h2>
        <div className="collapse collapse-arrow bg-primary ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvem er vi, og hvad gør vi?
          </div>
          <div className="collapse-content ">
            <p className="text-black">
              Vi her hos ThermomixFan er et team af madentusiaster, der er
              dedikerede til at hjælpe dig med at få mest muligt ud af din
              Thermomix. Vi tilbyder en bred vifte af tjenester, herunder
              opskrifter, tips og tricks, kurser og meget mere for at hjælpe dig
              med at blive en mester i køkkenet.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvordan kan jeg komme i kontakt med jer?
          </div>
          <div className="collapse-content ">
            <p className="text-black">
              Du kan kontakte os ved at udfylde kontaktformularen på vores
              hjemmeside, sende os en e-mail på{" "}
              <a className="underline" href="mailto:info@thermomixfan.dk">
                info@thermomixfan.dk
              </a>
              . Vores team er klar til at besvare dine spørgsmål og hjælpe dig
              med at komme i gang.
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
            Hvilke resultater kan jeg forvente at opnå med en Thermomix?
          </div>
          <div className="collapse-content ">
            <p className="text-black">
              Med en Thermomix kan du forvente at opnå en række fordele,
              herunder tidsbesparelser, bedre smag og konsistens i dine retter,
              mindre madspild og meget mere. Maskinen er designet til at hjælpe
              dig med at lave mad på en nem og effektiv måde.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
