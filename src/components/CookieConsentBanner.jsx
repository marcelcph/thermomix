// CookieConsentBanner.jsx
import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import ReactGA from "react-ga";
import { NavLink } from "react-router-dom";

function CookieConsentBanner() {
  const [cookieConsentGiven, setCookieConsentGiven] = useState(
    Cookies.get("cookieConsent") === "true"
  );

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setCookieConsentGiven(true);
    initializeAnalytics();
  };

  const handleRejectCookies = () => {
    Cookies.remove("cookieConsent");
  };

  const initializeAnalytics = () => {
    ReactGA.initialize("G-RY0RW70LMP");
    ReactGA.pageview(window.location.pathname);
  };

  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      onAccept={handleAcceptCookies}
      onDecline={handleRejectCookies}
      style={{
        background: "rgba(0, 0, 0, 0.7)", // Adjust the opacity value (0.7) as needed
        padding: "2rem",
      }}
      buttonStyle={{
        color: "#ffffff",
        background: "#0b4a81",
      }}
      buttonText="Accepter" // Ændre knappens tekst her
      declineButtonText="Afvis" // Ændre knappens tekst for at afvise cookies
    >
      Vi bruger cookies og lignende teknologier på vores hjemmeside for at
      forbedre din oplevelse. Dette hjælper os med at analysere trafik, tilpasse
      indhold, og levere annoncer, der er relevante for dig. Ved at klikke
      "Accepter" giver du samtykke til brugen af alle cookies. For mere
      information, læs vores{" "}
      <NavLink to="/privatlivspolitik" className="underline">
        Privatlivspolitik.
      </NavLink>
    </CookieConsent>
  );
}

export default CookieConsentBanner;
