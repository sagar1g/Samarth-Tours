import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import { FaWhatsapp } from "react-icons/fa";

import Home from "./pages/Home";
import Domestic from "./pages/Domestic";
import International from "./pages/International";
import PackageDetails from "./pages/PackageDetails";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Policy from "./pages/Policy";
import TermsConditions from "./pages/TermsConditions";

function ScrollToHash() {

  const location = useLocation();

  useEffect(() => {

    if (location.hash) {

      const element = document.querySelector(location.hash);

      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }, 100);

      }

    } else {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  }, [location]);

  return null;

}

function App() {

  return (

    <>

      {/* Scroll Fix */}

      <ScrollToHash />

      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* Domestic */}

        <Route
          path="/domestic"
          element={<Domestic />}
        />

        {/* International */}

        <Route
          path="/international"
          element={<International />}
        />

        {/* Package Details */}

        <Route
          path="/package/:slug"
          element={<PackageDetails />}
        />

        {/* About */}

        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* Contact */}

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* Privacy Policy */}

        <Route
          path="/privacy-policy"
          element={<Policy />}
        />

        {/* Terms */}

        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

      </Routes>

      {/* WhatsApp Button */}

      <a
        href="https://wa.me/919167008686?text=Hello%20Samarth%20Tours,%20I%20want%20tour%20information"
        target="_blank"
        rel="noreferrer"
        className="
          fixed
          bottom-4
          right-4
          md:bottom-6
          md:right-6
          bg-green-500
          hover:bg-green-600
          text-white
          p-3
          md:p-4
          rounded-full
          shadow-2xl
          z-50
          transition
          duration-300
        "
      >

        <FaWhatsapp
          className="
            text-[28px]
            md:text-[40px]
          "
        />

      </a>

    </>

  );

}

export default App;