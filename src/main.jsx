// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Omos from "./pages/Omos.jsx";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./components/Contact.jsx";
import Artikler from "./pages/Blog.jsx";
import Konsulent from "./pages/Konsulent.jsx";
import Error404 from "./pages/Error404.jsx";
import CookieConsentBanner from "./components/CookieConsentBanner.jsx";
import Privatlivspolitik from "./pages/Privatlivspolitik.jsx";
import SingleBlog from "./components/SingleBlog.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <div className=" mx-auto">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/artikler" element={<Artikler />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route path="/om-os" element={<Omos />} />
          <Route path="/konsulent" element={<Konsulent />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/privatlivspolitik" element={<Privatlivspolitik />} />
        </Routes>
      </div>
      <Contact />
      <CookieConsentBanner />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
