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
          bg-white
          min-h-screen
          pl-2
          md:pl-4
          pr-4
          md:px-6
          py-10
        "
      >

        <div
          className="
            max-w-full
            mx-0
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-4
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
                style={{
                  fontFamily: '"Roboto", Sans-serif',
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "var(--e-global-color-astglobalcolor8)",
                }}
                className="mb-5 leading-none"
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

            {/* MOBILE PRICE CARD */}

            <div className="block lg:hidden mb-12">

              <div
                className="
                  bg-white
                  rounded-[40px]
                  shadow-[0_15px_40px_rgba(0,0,0,0.22)]
                  px-6
                  py-8
                  w-full
                "
              >

                {/* PRICE */}

                <div className="mb-6">

                  <h2
                    className="
                      text-[30px]
                      font-black
                      leading-none
                      text-black
                    "
                    style={{
                      fontFamily: '"Roboto Slab", serif',
                    }}
                  >
                    ₹{trip.price}

                    <span className="text-[26px] font-bold">
                      {" "} / person
                    </span>

                  </h2>

                </div>

                <hr className="mb-6 border-black" />

                {/* INCLUDES */}

                <h3
                  className="
                    text-[24px]
                    font-extrabold
                    mb-6
                    text-black
                  "
                  style={{
                    fontFamily: '"Roboto Slab", serif',
                  }}
                >
                  Includes
                </h3>

                <div className="space-y-5">

                  <div className="flex items-center gap-4">

                    <FaBus
                      className="
                        text-orange-500
                        text-[32px]
                      "
                    />

                    <span
                      className="
                        text-[18px]
                        text-black
                      "
                    >
                      Travelling
                    </span>

                  </div>

                  <div className="flex items-center gap-4">

                    <FaHotel
                      className="
                        text-orange-500
                        text-[30px]
                      "
                    />

                    <span
                      className="
                        text-[18px]
                        text-black
                      "
                    >
                      Stay
                    </span>

                  </div>

                  <div className="flex items-center gap-4">

                    <FaUserTie
                      className="
                        text-orange-500
                        text-[30px]
                      "
                    />

                    <span
                      className="
                        text-[18px]
                        text-black
                      "
                    >
                      Guide
                    </span>

                  </div>

                </div>

                <hr className="my-8 border-black" />

                {/* BUTTON */}

                <div className="flex justify-center">

                  <a
                    href={`https://wa.me/919769657378?text=Hello Samarth Tours, I want booking information for ${trip.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >

                    <button
                      className="
                        w-full
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        py-3
                        rounded-full
                        text-[18px]
                        font-bold
                        transition-all
                        duration-300
                      "
                    >
                      BOOK NOW
                    </button>

                  </a>

                </div>

              </div>

            </div>

            {/* DATES */}

            <div className="mb-9">

              <h2
                style={{
                  fontFamily: '"Roboto", Sans-serif',
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "var(--e-global-color-astglobalcolor8)",
                }}
                className="mb-8 leading-none"
              >
                Dates of Departure
              </h2>

              {/* MOBILE VIEW */}

              <div className="block md:hidden">
                {months.map((month, index) => (
                    <div key={index} className="mb-5">

                        {/* MONTH BUTTON */}

                        <button
                            onClick={() => {
                                setActiveMonth(month);
                                setActiveDate("");
                            }}

                            className={`
                                w-full
                                h-[40px]
                                rounded-[25px]
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
                                    selectedMonth === month
                                        ? "bg-orange-500 text-white"
                                        : "bg-white text-orange-500"
                                }
                            `}
                        >
                            {month}
                        </button>   
                        {/* DATE BUTTONS */}

                        {selectedMonth === month && (

                            <div
                                className="
                                    pt-5
                                    flex
                                    flex-wrap
                                    gap-5
                                "
                            >

                                {(departureDates[month] || []).map((date, dateIndex) => (
                                    <button
                                        key={dateIndex}
                                        onClick={() => setActiveDate(date)}
                                        className={`
                                            w-[65px]
                                            h-[42px]
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

                        )}

                    </div>
                ))}
              </div>

              {/* DESKTOP VIEW */}

              <div className="hidden md:block">
            

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

        </div>

            {/* ITINERARY */}

            <div className="mt-2 pb-9">

              <div className="w-full flex justify-start">

                <div className="w-full max-w-[700px] ml-0 md:ml-10 lg:ml-16">

                  <h2
                    style={{
                      fontFamily: '"Roboto", Sans-serif',
                      fontSize: "25px",
                      fontWeight: 600,
                      color: "var(--e-global-color-astglobalcolor8)",
                    }}
                    className="mb-8 leading-none"
                  >
                    Itinerary
                  </h2>

                  {/* MOBILE VIEW */}

                  <div className="block md:hidden">
                    

                    {itinerary.map((item, index) => (

                      <div key={index} className="mb-6">

                        <button
                          onClick={() =>
                            setActiveDay(index)
                          }
                          className={`
                            w-full
                            h-[43px]
                            rounded-[25px]
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
                                : "bg-white text-orange-500"
                            }
                          `}
                        >

                          {item.day}

                        </button>

                        {activeDay === index && (

                          <div className="pt-8 px-3 text-center">

                            <h3
                              className="
                                text-[22px]
                                font-semibold
                                text-black
                                mb-6
                              "
                              style={{
                                fontFamily: '"Roboto", Sans-serif',
                              }}
                            >
                              {item.title}
                            </h3>

                            <div
                              className="
                                text-black
                                text-[16px]
                                leading-[40px]
                                whitespace-pre-line
                              "
                            >
                              {item.description}
                            </div>

                          </div>

                        )}

                      </div>

                    ))}

                  </div>

                  {/* DESKTOP VIEW */}

                  <div className="hidden md:block">

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-5
                        mb-10
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

                    {itinerary.length > 0 && (

                      <div className="w-full flex justify-start">

                        <div className="w-full max-w-[800px] ml-0 md:ml-32 lg:ml-40">

                          <h3
                            style={{
                              fontFamily: '"Roboto", Sans-serif',
                              fontSize: "25px",
                              fontWeight: 600,
                              color: "var(--e-global-color-astglobalcolor8)",
                            }}
                            className="mb-8 leading-none"
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
                            "
                          >

                            {
                              itinerary[
                                activeDay
                              ].description
                            }

                          </div>

                        </div>

                      </div>

                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex lg:justify-end lg:-mt-40">

            <div
              className="
                sticky
                top-0
                relative
                lg:right-0
                bg-white
                rounded-[40px]
                shadow-[0_15px_40px_rgba(0,0,0,0.22)]
                pl-24
                px-8
                py-8
                max-h-[470px]
                w-full
                lg:w-[850px]
                lg:-ml-[200px]
                h-fit
                mr-0
                lg:translate-x-40
                lg:-mt-0
              "
            >

              {/* PRICE */}

              <div className="mb-6">

                <h2
                  className="
                    text-[42px]
                    font-black
                    leading-none
                    text-black
                  "
                  style={{
                    fontFamily: '"Roboto Slab", serif',
                  }}
                >
                  ₹{trip.price}

                  <span className="text-[26px] font-bold">
                    {" "} / person
                  </span>

                </h2>

              </div>

              <hr className="mb-6 border-black" />

              {/* INCLUDES */}

              <h3
                className="
                  text-[24px]
                  font-extrabold
                  mb-6
                  text-black
                "
                style={{
                  fontFamily: '"Roboto Slab", serif',
                }}
              >
                Includes
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-4">

                  <FaBus
                    className="
                      text-orange-500
                      text-[32px]
                    "
                  />

                  <span
                    className="
                      text-[18px]
                      text-black
                    "
                  >
                    Travelling
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaHotel
                    className="
                      text-orange-500
                      text-[30px]
                    "
                  />

                  <span
                    className="
                      text-[18px]
                      text-black
                    "
                  >
                    Stay
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaUserTie
                    className="
                      text-orange-500
                      text-[30px]
                    "
                  />

                  <span
                    className="
                      text-[18px]
                      text-black
                    "
                  >
                    Guide
                  </span>

                </div>

              </div>

              <hr className="my-8 border-black" />

              {/* BUTTON */}

              <div className="flex justify-start ml-20">

                <a
                  href={`https://wa.me/919769657378?text=Hello Samarth Tours, I want booking information for ${trip.title}`}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button
                    className="
                      w-[260px]
                      bg-orange-500
                      hover:bg-orange-600
                      text-white
                      py-3
                      rounded-full
                      text-[18px]
                      font-bold
                      transition-all
                      duration-300
                    "
                  >
                    BOOK NOW
                  </button>

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