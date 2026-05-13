import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

export default function ContactPage() {

  return (

    <>

      <Header />

      <section
        className="
          bg-[#f5f5f7]
          py-10
          md:py-14
          px-5
          md:px-10
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <h1
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#1e3a8a]
              mb-4
              text-center
            "
          >
            Contact Us
          </h1>

          <p
            className="
              text-sm
              md:text-base
              text-gray-700
              leading-7
              mb-10
              text-center
              max-w-4xl
              mx-auto
            "
          >
            We’d love to hear from you!
            Whether you have questions about tours,
            travel plans, or adventure trips —
            our team is here to help.
          </p>

          {/* Main Grid */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              md:gap-10
            "
          >

            {/* Contact Form */}

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="
                bg-white
                p-6
                md:p-8
                space-y-5
              "
            >

              {/* Web3Forms Hidden Inputs */}

              <input
                type="hidden"
                name="access_key"
                value="29c12bfd-e184-44b1-b67f-424239f0757c"
              />

              <input
                type="hidden"
                name="subject"
                value="New Tour Enquiry"
              />

              <input
                type="hidden"
                name="from_name"
                value="Samarth Tours Website"
              />

              <input
                type="hidden"
                name="redirect"
                value="http://localhost:5173/contact"
              />

              {/* Name Fields */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-4
                "
              >

                <input
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                  required
                  className="
                    w-full
                    bg-orange-500
                    text-white
                    placeholder-white
                    px-5
                    py-4
                    rounded-full
                    text-sm
                    md:text-base
                    outline-none
                  "
                />

                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  required
                  className="
                    w-full
                    bg-orange-500
                    text-white
                    placeholder-white
                    px-5
                    py-4
                    rounded-full
                    text-sm
                    md:text-base
                    outline-none
                  "
                />

              </div>

              {/* Contact Number */}

              <input
                type="text"
                name="Contact Number"
                placeholder="Contact Number"
                required
                className="
                  w-full
                  bg-orange-500
                  text-white
                  placeholder-white
                  px-5
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
                  outline-none
                "
              />

              {/* Email */}

              <input
                type="email"
                name="Email"
                placeholder="Email"
                required
                className="
                  w-full
                  bg-orange-500
                  text-white
                  placeholder-white
                  px-5
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
                  outline-none
                "
              />

              {/* Message */}

              <textarea
                rows="6"
                name="Message"
                placeholder="Message"
                required
                className="
                  w-full
                  bg-orange-500
                  text-white
                  placeholder-white
                  px-5
                  py-5
                  rounded-[20px]
                  text-sm
                  md:text-base
                  outline-none
                  resize-none
                "
              ></textarea>

              {/* Submit Button */}

              <button
                type="submit"
                className="
                  w-full
                  border
                  border-orange-500
                  text-orange-500
                  py-4
                  rounded-full
                  text-base
                  md:text-lg
                  font-semibold
                  hover:bg-orange-500
                  hover:text-white
                  transition
                  duration-300
                "
              >
                Send Enquiry
              </button>

            </form>

            {/* Contact Info */}

            <div
              className="
                bg-white
                p-6
                md:p-8
              "
            >

              <h2
                className="
                  text-2xl
                  md:text-4xl
                  font-bold
                  mb-8
                "
              >
                Direct Contact Info
              </h2>

              <div
                className="
                  space-y-7
                  text-sm
                  md:text-lg
                  text-gray-800
                "
              >

                <p className="flex gap-4 items-start">

                  <FaPhoneAlt
                    className="
                      mt-1
                      text-orange-500
                    "
                  />

                  +91 9167008686

                </p>

                <p className="flex gap-4 items-start">

                  <FaEnvelope
                    className="
                      mt-1
                      text-orange-500
                    "
                  />

                  samarthtours@gmail.com

                </p>

                <p className="flex gap-4 items-start">

                  <FaMapMarkerAlt
                    className="
                      mt-1
                      text-orange-500
                    "
                  />

                  Panvel, Maharashtra, India

                </p>

              </div>

              {/* Social Icons */}

              <div
                className="
                  flex
                  gap-6
                  text-3xl
                  md:text-4xl
                  mt-10
                "
              >

                <a href="#">

                  <FaFacebook
                    className="
                      text-orange-500
                      hover:scale-110
                      transition
                      cursor-pointer
                    "
                  />

                </a>

                <a href="#">

                  <FaInstagram
                    className="
                      text-orange-500
                      hover:scale-110
                      transition
                      cursor-pointer
                    "
                  />

                </a>

                <a
                  href="https://wa.me/919167008686"
                  target="_blank"
                  rel="noreferrer"
                >

                  <FaWhatsapp
                    className="
                      text-orange-500
                      hover:scale-110
                      transition
                      cursor-pointer
                    "
                  />

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}