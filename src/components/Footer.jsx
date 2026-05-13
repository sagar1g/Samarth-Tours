import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer
      className="
        bg-black
        text-white
        py-6
        px-4
        md:px-10
      "
    >

      {/* Main Footer */}

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-wrap
          justify-between
          items-start
          gap-8
        "
      >

        {/* Quick Links */}

        <div
          className="
            flex-1
            min-w-[140px]
          "
        >

          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-4
            "
          >
            Quick Links
          </h2>

          <div
            className="
              flex
              flex-col
              gap-2
            "
          >

            <Link
              to="/about"
              className="
                text-sm
                md:text-base
                text-gray-300
                hover:text-orange-400
                transition
              "
            >
              About Us
            </Link>

            <Link
              to="/privacy-policy"
              className="
                text-sm
                md:text-base
                text-gray-300
                hover:text-orange-400
                transition
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="
                text-sm
                md:text-base
                text-gray-300
                hover:text-orange-400
                transition
              "
            >
              Terms and Conditions
            </Link>

            <Link
              to="/contact"
              className="
                text-sm
                md:text-base
                text-gray-300
                hover:text-orange-400
                transition
              "
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* Contact Info */}

        <div
          className="
            flex-1
            min-w-[180px]
          "
        >

          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-4
            "
          >
            Contact Info
          </h2>

          <div className="space-y-4">

            <div>

              <h3
                className="
                  text-sm
                  md:text-base
                  font-semibold
                  mb-1
                "
              >
                Call / WhatsApp
              </h3>

              <a
                href="https://wa.me/919769657378"
                target="_blank"
                rel="noreferrer"
                className="
                  text-blue-400
                  text-sm
                  md:text-lg
                  font-semibold
                "
              >
                +91 9769657378
              </a>

            </div>

            <div>

              <h3
                className="
                  text-sm
                  md:text-base
                  font-semibold
                  mb-1
                "
              >
                Office
              </h3>

              <p
                className="
                  text-gray-300
                  text-sm
                  md:text-base
                  leading-6
                "
              >
                Thane, Maharashtra, India
              </p>

            </div>

          </div>

        </div>

        {/* Social */}

        <div
          className="
            flex-1
            min-w-[140px]
          "
        >

          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-4
            "
          >
            Follow Us
          </h2>

          <div
            className="
              flex
              items-center
              gap-4
              text-2xl
              md:text-3xl
            "
          >

            <a
              href="https://www.facebook.com/share/18NnwjCcLD/"
              target="_blank"
              rel="noreferrer"
              className="
                text-orange-500
                hover:scale-110
                transition
              "
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/samarth_tours_ofc?igsh=ZzJzeHV3OGI5ZG1i"
              target="_blank"
              rel="noreferrer"
              className="
                text-orange-500
                hover:scale-110
                transition
              "
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="
                text-orange-500
                hover:scale-110
                transition
              "
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/919769657378"
              target="_blank"
              rel="noreferrer"
              className="
                text-green-500
                hover:scale-110
                transition
              "
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          border-t
          border-gray-800
          mt-6
          pt-4
          text-center
          text-gray-400
          text-xs
          md:text-sm
        "
      >

        © 2026 Samarth Tours Pvt Ltd.
        All Rights Reserved.

      </div>

    </footer>

  );

}