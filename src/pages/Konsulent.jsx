import Konsulenthero from "../components/Konsulenthero";
import Konsulentcards from "../components/Konsulentcards";

function Konsulent() {
  return (
    <>
      <div className="bg-gradient-to-tr from-white via-white-700 to-white px-5">
        <Konsulenthero />
        <Konsulentcards />
      </div>
    </>
  );
}

export default Konsulent;
