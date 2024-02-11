import React from "react";
import { Animate } from "./InView";
function FAQ() {
  return (
    <>
      <Animate />
      <div
        className="container px-2 md:px-24 mx-auto py-8 "
        data-aos="zoom-in-down"
        data-aos-offset="200"
      >
        <h2 className=" font-bold py-3 text-center">F.A.Q</h2>
        <div className="collapse collapse-arrow bg-primary ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvem er vi, og hvad gør vi?
          </div>
          <div className="collapse-content">
            <p>
              Vi er CleverReply, og vi er specialiseret i effektiv
              leadgenerering. Vores mission er at øge dit kundenetværk gennem
              kvalitetsleads.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvordan kan jeg komme i kontakt med jer?
          </div>
          <div className="collapse-content">
            <p>
              Du kan kontakte os ved at udfylde kontaktformularen på vores
              hjemmeside, sende os en e-mail på{" "}
              <a className="underline" href="mailto:kontakt@cleverreply.dk">
                kontakt@CleverReply.dk
              </a>
              . Vores team er klar til at besvare dine spørgsmål og hjælpe dig
              med at komme i gang.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvordan fungerer jeres leadgenereringsproces?
          </div>
          <div className="collapse-content">
            <p>
              Vores leadgenereringsproces er skræddersyet til dine specifikke
              behov. Vi bruger en kombination af avancerede teknologier og
              ekspertise inden for dit leadgenerering for at identificere og
              kvalificere potentielle kunder. Vi leverer dig derefter de mest
              lovende leads, så du kan fokusere på at konvertere dem til kunder.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvad er jeres priser og betalingsmuligheder?
          </div>
          <div className="collapse-content">
            <p>
              Vores priser varierer afhængigt af den specifikke tjeneste, du
              vælger, og omfanget af dit projekt. Kontakt os for at få en
              skræddersyet prisfastsættelse. Vi tilbyder forskellige
              betalingsmuligheder for at imødekomme dine behov.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Er mine data og oplysninger sikre hos jer?
          </div>
          <div className="collapse-content">
            <p>
              Ja, vi tager datasikkerhed meget alvorligt. Vi følger strenge
              sikkerhedsprotokoller og bruger avancerede teknologier for at
              beskytte dine data. Dine oplysninger er fortrolige, og vi deler
              dem ikke med tredjeparter uden dit samtykke.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvordan kan jeg komme i gang med jeres tjenester?
          </div>
          <div className="collapse-content">
            <p>
              For at komme i gang skal du kontakte os via vores kontaktformular,
              e-mail eller telefon. Vores team vil derefter tage kontakt til dig
              for at diskutere dine behov og oprette en skræddersyet plan for
              dig.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium text-white">
            Hvilke resultater kan jeg forvente at opnå med jeres tjenester?
          </div>
          <div className="collapse-content">
            <p>
              Vores mål er at levere resultater, der overstiger dine
              forventninger. Resultaterne kan variere afhængigt af din branche
              og målgruppe, men vi arbejder hårdt for at sikre, at du opnår en
              stærkere tilstedeværelse, flere kvalificerede leads og øget salg
              og indtjening.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
