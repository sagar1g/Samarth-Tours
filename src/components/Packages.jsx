import { Link, useLocation } from "react-router-dom";

import packages from "../data/packages";

export default function Packages() {

  const location = useLocation();

  const domestic = packages.filter(
    (item) => item.category === "domestic"
  );

  const international = packages.filter(
    (item) => item.category === "international"
  );

  // Mobile Cards

  const renderCards = (items) => (

    <>
      {items.map((trip) => (

        <Link
          key={trip.id}
          to={`/package/${trip.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative
            w-[75%]
            sm:w-[45%]
            flex-shrink-0
            snap-center
            rounded-[22px]
            overflow-hidden
            shadow-xl
            group
            bg-white
          "
        >

          <img
            src={trip.image}
            alt={trip.title}
            className="
              w-full
              h-[180px]
              sm:h-[240px]
              md:h-[280px]
              lg:h-[320px]
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/25
              flex
              items-start
              justify-center
              p-3
            "
          >

            <h3
              className="
                text-white
                text-sm
                sm:text-base
                md:text-xl
                lg:text-2xl
                font-bold
                text-center
                leading-tight
              "
            >
              {trip.title}
            </h3>

          </div>

        </Link>

      ))}
    </>

  );

  return (

    <section
      id="packages"
      className="
        bg-gray-100
        py-10
        md:py-16
        overflow-hidden
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Domestic */}

        {location.pathname !== "/international" && (

          <>

            <h2
              className="
                text-2xl
                md:text-5xl
                font-extrabold
                text-orange-500
                mb-8
                uppercase
                text-center
              "
            >
              Domestic Trips
            </h2>

            {/* Mobile Slider */}

            <div
              className="
                flex
                gap-4
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                scrollbar-hide
                pb-4
                md:hidden
              "
            >

              {renderCards(domestic)}

            </div>

            {/* Desktop Grid */}

            <div
              className="
                hidden
                md:grid
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-8
                mb-16
              "
            >

              {domestic.map((trip) => (

                <Link
                  key={trip.id}
                  to={`/package/${trip.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    rounded-[25px]
                    overflow-hidden
                    shadow-xl
                    group
                  "
                >

                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="
                      w-full
                      h-[320px]
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-500
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/25
                      flex
                      items-start
                      justify-center
                      p-4
                    "
                  >

                    <h3
                      className="
                        text-white
                        text-xl
                        lg:text-2xl
                        font-bold
                        text-center
                      "
                    >
                      {trip.title}
                    </h3>

                  </div>

                </Link>

              ))}

            </div>

          </>

        )}

        {/* International */}

        {location.pathname !== "/domestic" && (

          <>

            <h2
              className="
                text-2xl
                md:text-5xl
                font-extrabold
                text-orange-500
                mb-8
                uppercase
                text-center
              "
            >
              International Trips
            </h2>

            {/* Mobile Slider */}

            <div
              className="
                flex
                gap-4
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                scrollbar-hide
                pb-4
                md:hidden
              "
            >

              {renderCards(international)}

            </div>

            {/* Desktop Grid */}

            <div
              className="
                hidden
                md:grid
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-8
              "
            >

              {international.map((trip) => (

                <Link
                  key={trip.id}
                  to={`/package/${trip.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    rounded-[25px]
                    overflow-hidden
                    shadow-xl
                    group
                  "
                >

                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="
                      w-full
                      h-[320px]
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-500
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/25
                      flex
                      items-start
                      justify-center
                      p-4
                    "
                  >

                    <h3
                      className="
                        text-white
                        text-xl
                        lg:text-2xl
                        font-bold
                        text-center
                      "
                    >
                      {trip.title}
                    </h3>

                  </div>

                </Link>

              ))}

            </div>

          </>

        )}

      </div>

    </section>

  );
}