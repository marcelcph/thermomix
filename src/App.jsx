import Hero from "./components/Hero";
import Features from "./components/Features";
import SliderPc from "./components/Video";
import Link from "./components/Links";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gradient-to-tr from-white via-white-700 to-white px-5">
        <Hero />
        <Features />
        <Link />
        <SliderPc />
      </div>
    </>
  );
}

export default App;
