import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export default function Contact() {

  return (

    <section
      id="contact"
      className="
        bg-gray-100
        py-16
        px-4
        md:px-8
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2
          className="
            text-4xl
            md:text-6xl
            font-bold
            text-center
            text-blue-900
            mb-12
          "
        >
          Contact Us
        </h2>

        {/* Main Grid */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
          "
        >

          {/* Contact Information */}

          <div
            className="
              bg-gray-200
              rounded-[35px]
              shadow-xl
              p-8
              border-t-4
              border-orange-500
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-orange-500
                mb-10
              "
            >
              Contact Information
            </h3>

            <div className="space-y-10">

              {/* Phone */}

              <div className="flex gap-5 items-start">

                <FaPhoneAlt
                  className="
                    text-pink-500
                    text-3xl
                    mt-1
                  "
                />

                <div>

                  <h4 className="text-2xl font-semibold">
                    Call / WhatsApp
                  </h4>

                  <a
                    href="https://wa.me/919167008686"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-blue-600
                      text-2xl
                      font-bold
                      hover:underline
                    "
                  >
                    +91 9167008686
                  </a>

                </div>

              </div>

              {/* Email */}

              <div className="flex gap-5 items-start">

                <FaEnvelope
                  className="
                    text-purple-300
                    text-3xl
                    mt-1
                  "
                />

                <div>

                  <h4 className="text-2xl font-semibold">
                    Email Address
                  </h4>

                  <p className="text-gray-700 text-xl">
                    samarthtours@gmail.com
                  </p>

                </div>

              </div>

              {/* Address */}

              <div className="flex gap-5 items-start">

                <FaMapMarkerAlt
                  className="
                    text-pink-500
                    text-3xl
                    mt-1
                  "
                />

                <div>

                  <h4 className="text-2xl font-semibold">
                    Office Address
                  </h4>

                  <p className="text-gray-700 text-xl">
                    Panvel, Maharashtra, India
                  </p>

                </div>

              </div>

              {/* Timing */}

              <div className="flex gap-5 items-start">

                <FaClock
                  className="
                    text-yellow-500
                    text-3xl
                    mt-1
                  "
                />

                <div>

                  <h4 className="text-2xl font-semibold">
                    Working Hours
                  </h4>

                  <p className="text-gray-700 text-xl">
                    Monday - Sunday
                  </p>

                  <p className="text-gray-700 text-xl">
                    9:00 AM - 10:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div
            className="
              bg-white
              rounded-[35px]
              shadow-xl
              p-8
            "
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  p-5
                  text-xl
                  outline-none
                  focus:border-orange-500
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  p-5
                  text-xl
                  outline-none
                  focus:border-orange-500
                "
              />

              <textarea
                rows="7"
                placeholder="Write Your Travel Inquiry..."
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  p-5
                  text-xl
                  outline-none
                  focus:border-orange-500
                "
              ></textarea>

              <button
                className="
                  w-full
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  text-2xl
                  font-bold
                  py-5
                  rounded-2xl
                  transition
                "
              >
                Send on WhatsApp
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

}