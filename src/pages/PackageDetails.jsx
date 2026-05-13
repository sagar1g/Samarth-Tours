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

  if (!trip) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-4xl
          font-bold
        "
      >
        Package Not Found
      </div>

    );

  }

  const itinerary =
    trip.itinerary || [];

  return (

    <>

      <Header />

      {/* Hero Section */}

      <div className="relative">

        <img
          src={trip.image}
          alt={trip.title}
          className="
            w-full
            h-[300px]
            md:h-[650px]
            object-cover
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-black/45
          "
        />

        {/* Hero Content */}

        <div
          className="
            absolute
            bottom-8
            md:bottom-14
            left-5
            md:left-14
            z-10
            text-white
          "
        >

          <p
            className="
              uppercase
              tracking-[4px]
              text-orange-300
              text-sm
              md:text-base
              font-semibold
              mb-3
            "
          >
            
          </p>

          <h1
            className="
              text-4xl
              md:text-7xl
              font-extrabold
              leading-tight
              max-w-5xl
            "
          >
            {trip.title}
          </h1>

        </div>

      </div>

      {/* Main Section */}

      <section
        className="
          bg-[#f4f4f5]
          min-h-screen
          px-4
          md:px-10
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

          {/* LEFT SIDE */}

          <div className="lg:col-span-2">

            {/* Subtitle */}

            <p
              className="
                text-orange-500
                text-xl
                md:text-3xl
                font-bold
                mb-10
              "
            >
              Explore Beautiful Destinations
              with Samarth Tours
            </p>

            {/* Info Cards */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-6
                mb-14
              "
            >

              {/* Duration */}

              <div
                className="
                  bg-white
                  rounded-[28px]
                  p-6
                  shadow-lg
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                  "
                >

                  <FaCalendarAlt
                    className="
                      text-orange-500
                      text-3xl
                    "
                  />

                </div>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    Duration
                  </h3>

                  <p
                    className="
                      text-gray-600
                      text-lg
                    "
                  >
                    {trip.duration}
                  </p>

                </div>

              </div>

              {/* Difficulty */}

              <div
                className="
                  bg-white
                  rounded-[28px]
                  p-6
                  shadow-lg
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                  "
                >

                  <FaMap
                    className="
                      text-orange-500
                      text-3xl
                    "
                  />

                </div>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    Difficulty
                  </h3>

                  <p
                    className="
                      text-gray-600
                      text-lg
                    "
                  >
                    {trip.difficulty}
                  </p>

                </div>

              </div>

              {/* Age */}

              <div
                className="
                  bg-white
                  rounded-[28px]
                  p-6
                  shadow-lg
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                  "
                >

                  <FaUsers
                    className="
                      text-orange-500
                      text-3xl
                    "
                  />

                </div>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    Age Group
                  </h3>

                  <p
                    className="
                      text-gray-600
                      text-lg
                    "
                  >
                    {trip.age}
                  </p>

                </div>

              </div>

            </div>

            {/* About Section */}

            <div
              className="
                bg-white
                rounded-[30px]
                shadow-xl
                p-6
                md:p-10
                mb-16
              "
            >

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-orange-500
                  font-semibold
                  mb-3
                "
              >
                About Tour
              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  mb-8
                "
              >
                Discover The Journey
              </h2>

              <p
                className="
                  text-gray-700
                  text-lg
                  md:text-2xl
                  leading-9
                  md:leading-[46px]
                "
              >
                {trip.about}
              </p>

            </div>

            {/* Itinerary Section */}

            <div
              className="
                bg-white
                rounded-[30px]
                shadow-xl
                p-6
                md:p-10
              "
            >

              {/* Heading */}

              <div className="mb-10">

                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-orange-500
                    font-semibold
                    mb-3
                  "
                >
                  Travel Plan
                </p>

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-extrabold
                  "
                >
                  Tour Itinerary
                </h2>

              </div>

              {/* Day Buttons */}

              <div
                className="
                  flex
                  gap-4
                  overflow-x-auto
                  scrollbar-hide
                  pb-4
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
                      min-w-fit
                      whitespace-nowrap
                      px-7
                      py-4
                      rounded-full
                      text-lg
                      font-bold
                      transition-all
                      duration-300

                      ${
                        activeDay === index
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-gray-100 hover:bg-orange-500 hover:text-white"
                      }
                    `}
                  >

                    {item.day}

                  </button>

                ))}

              </div>

              {/* Active Day Content */}

              {itinerary.length > 0 && (

                <div
                  className="
                    relative
                    bg-white
                    rounded-[20px]
                    overflow-hidden
                    border
                    border-gray-200
                    shadow-sm
                  "
                >

                  {/* Orange Side Line */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[4px]
                      bg-orange-500
                    "
                  />

                  <div
                    className="
                      p-5
                      md:p-7
                    "
                  >

                    {/* Header */}

                    <div
                      className="
                        flex
                        items-start
                        gap-3
                        border-b
                        border-gray-200
                        pb-4
                        mb-5
                      "
                    >

                      {/* Calendar Icon */}

                      <div
                        className="
                          text-[22px]
                          mt-[2px]
                          flex-shrink-0
                        "
                      >
                        🗓️
                      </div>

                      {/* Title */}

                      <div>

                        <h3
                          className="
                            text-[20px]
                            md:text-[32px]
                            font-bold
                            text-[#09093d]
                            leading-tight
                          "
                        >
                          {
                            itinerary[
                              activeDay
                            ].title
                          }
                        </h3>

                      </div>

                    </div>

                    {/* Description Section */}

                    <div
                      className="
                        flex
                        items-start
                        gap-5
                      "
                    >

                      {/* Route Icon */}

                      <div
                        className="
                          hidden
                          md:block
                          flex-shrink-0
                          pt-2
                        "
                      >

                        <img
                          src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                          alt="route"
                          className="
                            w-14
                            h-14
                            object-contain
                          "
                        />

                      </div>

                      {/* Text */}

                      <div
                        className="
                          text-gray-700
                          text-lg
                          md:text-[18px]
                          leading-9
                          md:leading-[44px]
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

                </div>

              )}

            </div>

          </div>

          {/* RIGHT SIDEBAR */}

          <div>

            <div
              className="
                bg-white
                rounded-[30px]
                shadow-2xl
                p-8
                sticky
                top-24
              "
            >

              {/* Price */}

              <div className="mb-10">

                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-orange-500
                    font-semibold
                    mb-3
                  "
                >
                  Starting From
                </p>

                <h2
                  className="
                    text-5xl
                    md:text-6xl
                    font-extrabold
                  "
                >
                  ₹{trip.price}
                </h2>

                <p
                  className="
                    text-gray-500
                    text-lg
                    mt-3
                  "
                >
                  per person
                </p>

              </div>

              <hr className="mb-10" />

              {/* Includes */}

              <h3
                className="
                  text-3xl
                  font-bold
                  mb-8
                "
              >
                Includes
              </h3>

              <div className="space-y-8">

                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <FaBus
                      className="
                        text-orange-500
                        text-2xl
                      "
                    />

                  </div>

                  <span className="text-2xl">
                    Travelling
                  </span>

                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <FaHotel
                      className="
                        text-orange-500
                        text-2xl
                      "
                    />

                  </div>

                  <span className="text-2xl">
                    Stay
                  </span>

                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <FaUserTie
                      className="
                        text-orange-500
                        text-2xl
                      "
                    />

                  </div>

                  <span className="text-2xl">
                    Guide
                  </span>

                </div>

              </div>

              {/* Button */}

              <a
                href={`https://wa.me/919167008686?text=Hello Samarth Tours, I want booking information for ${trip.title}`}
                target="_blank"
                rel="noreferrer"
              >

                <button
                  className="
                    w-full
                    mt-10
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    py-5
                    rounded-2xl
                    text-2xl
                    font-bold
                    transition
                    duration-300
                    shadow-lg
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