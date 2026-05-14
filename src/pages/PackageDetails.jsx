import { useState } from "react";

import { useParams } from "react-router-dom";

import {
  FaCalendarAlt,
  FaMap,
  FaUsers,
  FaBus,
  FaHotel,
  FaUserTie,
} from "react-icons/fa";

import packages from "../data/packages";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PackageDetails() {

  const { slug } = useParams();

  const trip = packages.find(
    (item) => item.slug === slug
  );

  const [activeDay, setActiveDay] =
    useState(0);

  const [activeMonth, setActiveMonth] =
    useState("");

  const [activeDate, setActiveDate] =
    useState("");

  if (!trip) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-3xl
          font-bold
        "
      >
        Package Not Found
      </div>

    );

  }

  const itinerary =
    trip.itinerary || [];

  const departureDates =
    trip.departureDates || {};

  const months =
    Object.keys(departureDates);

  const selectedMonth =
    activeMonth || months[0];

  const currentDates =
    departureDates[selectedMonth] || [];

  return (

    <>

      <Header />

      {/* HERO */}

      <div className="relative">

        <img
          src={trip.image}
          alt={trip.title}
          className="
            w-full
            h-[220px]
            md:h-[420px]
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/40
          "
        />

        <div
          className="
            absolute
            bottom-5
            md:bottom-10
            left-5
            md:left-12
            z-10
            text-white
          "
        >

          <h1
            className="
              text-3xl
              md:text-5xl
              font-extrabold
            "
          >
            {trip.title}
          </h1>

        </div>

      </div>

      {/* MAIN */}

      <section
        className="
          bg-[#f3f3f3]
          min-h-screen
          px-4
          md:px-8
          py-10
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-10
          "
        >

          {/* LEFT */}

          <div className="lg:col-span-2">

            {/* TOP TEXT */}

            <p
              className="
                text-orange-500
                text-base
                md:text-lg
                font-medium
                mb-8
              "
            >
              Explore Beautiful Destinations with Samarth Tours
            </p>

            {/* INFO */}

            <div
              className="
                flex
                flex-wrap
                gap-8
                border-b
                border-gray-300
                pb-8
                mb-10
              "
            >

              <div className="flex items-center gap-3">

                <FaCalendarAlt
                  className="
                    text-orange-500
                    text-xl
                  "
                />

                <div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Duration
                  </h3>

                  <p
                    className="
                      text-gray-600
                      text-base
                    "
                  >
                    {trip.duration}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaMap
                  className="
                    text-orange-500
                    text-xl
                  "
                />

                <div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Difficulty
                  </h3>

                  <p
                    className="
                      text-gray-600
                      text-base
                    "
                  >
                    {trip.difficulty}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaUsers
                  className="
                    text-orange-500
                    text-xl
                  "
                />

                <div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Age Group
                  </h3>

                  <p
                    className="
                      text-gray-600
                      text-base
                    "
                  >
                    {trip.age}
                  </p>

                </div>

              </div>

            </div>

            {/* ABOUT */}

            <div
              className="
                border-b
                border-gray-300
                pb-10
                mb-12
              "
            >

              <h2
                className="
                  text-[25px]
                  md:text-[35px]
                  font-black
                  text-black
                  mb-5
                  leading-none
                "
              >
                About
              </h2>

              <p
                className="
                  text-orange-500
                  text-[16px]
                  md:text-[18px]
                  leading-[34px]
                  max-w-5xl
                "
              >
                {trip.about}
              </p>

            </div>

            {/* DATES */}

            <div className="mb-16">

              <h2
                className="
                  text-[25px]
                  md:text-[35px]
                  font-black
                  text-black
                  mb-8
                  leading-none
                "
              >
                Dates of Departure
              </h2>

              {/* MONTH BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-5
                  mb-8
                "
              >

                {months.map((month, index) => (

                  <button
                    key={index}
                    onClick={() => {

                      setActiveMonth(month);

                      setActiveDate("");

                    }}
                    className={`
                      min-w-[70px]
                      md:min-w-[70px]
                      h-[30px]
                      md:h-[50px]
                      px-3
                      rounded-full
                      border
                      border-orange-500
                      text-[16px]
                      md:text-[20px]
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        selectedMonth === month
                          ? "bg-orange-500 text-white"
                          : "bg-transparent text-orange-500"
                      }
                    `}
                  >

                    {month}

                  </button>

                ))}

              </div>

              {/* DATE BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-5
                "
              >

                {currentDates.map((date, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setActiveDate(date)
                    }
                    className={`
                      w-[40px]
                      h-[30px]
                      md:w-[60px]
                      md:h-[60px]
                      rounded-full
                      border
                      border-orange-500
                      text-[20px]
                      md:text-[25px]
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        activeDate === date
                          ? "bg-orange-500 text-white"
                          : "bg-transparent text-orange-500"
                      }
                    `}
                  >

                    {date}

                  </button>

                ))}

              </div>

            </div>

            {/* ITINERARY */}

            <div className="mt-16 pb-10 md:pl-16">

              <h2
                className="
                  text-[25px]
                  md:text-[35px]
                  font-black
                  text-black
                  leading-none
                  mb-8
                "
              >
                Itinerary
              </h2>

              {/* DAY BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-5
                  mb-10
                  w-full
                "
              >

                {itinerary.map((item, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setActiveDay(index)
                    }
                    className={`
                      min-w-[100px]
                      h-[40px]
                      rounded-full
                      border
                      border-orange-500
                      text-[18px]
                      font-semibold
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300

                      ${
                        activeDay === index
                          ? "bg-orange-500 text-white"
                          : "bg-transparent text-orange-500"
                      }
                    `}
                  >

                    {item.day}

                  </button>

                ))}

              </div>

              {/* CONTENT */}

              {itinerary.length > 0 && (

                <div className="mt-6">

                  <h3
                    className="
                      text-[22px]
                      md:text-[30px]
                      font-semibold
                      text-black
                      mb-5
                    "
                  >
                    {
                      itinerary[
                        activeDay
                      ].title
                    }
                  </h3>

                  <div
                    className="
                      text-black
                      text-[16px]
                      md:text-[18px]
                      leading-[34px]
                      whitespace-pre-line
                      max-w-5xl
                    "
                  >

                    {
                      itinerary[
                        activeDay
                      ].description
                    }

                  </div>

                </div>

              )}

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
                sticky
                top-20
                bg-white
                rounded-[32px]
                shadow-xl
                p-8
              "
            >

              <div className="mb-8">

                <p
                  className="
                    uppercase
                    tracking-[3px]
                    text-orange-500
                    font-semibold
                    mb-2
                  "
                >
                  Starting From
                </p>

                <h2
                  className="
                    text-4xl
                    font-black
                  "
                >
                  ₹{trip.price}
                </h2>

                <p
                  className="
                    text-gray-500
                    text-base
                    mt-2
                  "
                >
                  per person
                </p>

              </div>

              <hr className="mb-8" />

              {/* INCLUDES */}

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-6
                "
              >
                Includes
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">

                  <FaBus
                    className="
                      text-orange-500
                      text-xl
                    "
                  />

                  <span className="text-lg">
                    Travelling
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaHotel
                    className="
                      text-orange-500
                      text-xl
                    "
                  />

                  <span className="text-lg">
                    Stay
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaUserTie
                    className="
                      text-orange-500
                      text-xl
                    "
                  />

                  <span className="text-lg">
                    Guide
                  </span>

                </div>

              </div>

              {/* BUTTON */}

              <a
                href={`https://wa.me/919769657378?text=Hello Samarth Tours, I want booking information for ${trip.title}`}
                target="_blank"
                rel="noreferrer"
              >

                <button
                  className="
                    w-full
                    mt-8
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    py-3
                    rounded-full
                    text-lg
                    font-bold
                    transition
                    duration-300
                  "
                >
                  BOOK NOW
                </button>

              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}