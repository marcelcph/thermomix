import Hero from "./components/Hero";
import Features from "./components/Features";
import SliderPc from "./components/Video";
import Link from "./components/Links";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gradient-to-bl from-blue-300 via-blue-700 to-secondary px-5">
        <Hero />
        <Features />
        <Link />
        <SliderPc />
      </div>
    </>
  );
}

export default App;
