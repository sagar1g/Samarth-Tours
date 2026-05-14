import { useState } from "react";

import logo from "../assets/logo.png";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaGlobeAsia,
  FaImages,
} from "react-icons/fa";

export default function Header() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [programOpen, setProgramOpen] =
    useState(false);

  // Scroll To Section

  const goToSection = (sectionId) => {

    navigate("/");

    setMenuOpen(false);

    setTimeout(() => {

      const element =
        document.getElementById(sectionId);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
        });

      }

    }, 200);

  };

  // Home Navigation

  const goToHome = () => {

    navigate("/");

    setMenuOpen(false);

    setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }, 200);

  };

  return (

    <>

      {/* Header */}

      <header
        className="
          bg-gradient-to-r
          from-orange-500
          to-orange-700
          text-white
          shadow-xl
          sticky
          top-0
          z-50
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            flex
            justify-between
            items-center
            px-3
            md:px-6
            py-2
          "
        >

          {/* Logo */}

          <div className="flex items-center gap-2">

            <img
              src={logo}
              alt="Samarth Tours Logo"
              className="
                w-10
                h-10
                md:w-12
                md:h-12
                rounded-full
                object-cover
                border-2
                border-white
                shadow-md
              "
            />

            <div>

              <h1
                className="
                  text-lg
                  md:text-2xl
                  font-bold
                  leading-none
                "
              >
                Samarth Tours
              </h1>

              <p
                className="
                  text-[11px]
                  md:text-sm
                  text-orange-100
                "
              >
                Explore Beautiful Destinations
              </p>

            </div>

          </div>

          {/* Desktop Menu */}

          <nav
            className="
              hidden
              md:flex
              items-center
              gap-8
              text-lg
              font-semibold
            "
          >

            <button
              onClick={goToHome}
              className="
                hover:text-yellow-300
                transition
                duration-300
              "
            >
              Home
            </button>

            <Link
              to="/domestic"
              className="
                hover:text-yellow-300
                transition
                duration-300
              "
            >
              Domestic
            </Link>

            <Link
              to="/international"
              className="
                hover:text-yellow-300
                transition
                duration-300
              "
            >
              International
            </Link>

            <button
              onClick={() =>
                goToSection("gallery")
              }
              className="
                hover:text-yellow-300
                transition
                duration-300
              "
            >
              Gallery
            </button>

          </nav>

          {/* Mobile Menu Button */}

          <button
            className="
              md:hidden
              text-2xl
            "
            onClick={() =>
              setMenuOpen(true)
            }
          >

            <FaBars />

          </button>

        </div>

      </header>

      {/* Overlay */}

      <div
        className={`
          fixed
          inset-0
          bg-black/60
          backdrop-blur-md
          z-50
          transition-all
          duration-300

          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
        onClick={() =>
          setMenuOpen(false)
        }
      />

      {/* Modern Sidebar */}

      <div
        className={`
          fixed
          top-0
          right-0
          h-full
          w-[88%]
          max-w-[360px]
          bg-white
          z-50
          shadow-[0_0_40px_rgba(0,0,0,0.25)]
          transform
          transition-transform
          duration-500
          overflow-y-auto
          rounded-l-[30px]

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Top Section */}

        <div
          className="
            bg-gradient-to-r
            from-orange-500
            to-orange-700
            px-3
            py-2
            rounded-bl-[20px]
            text-white
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-2">

              <img
                src={logo}
                alt="logo"
                className="
                  w-10
                  h-10
                  rounded-full
                  border-2
                  border-white
                  object-cover
                  shadow-md
                "
              />

              <div>

                <h2
                  className="
                    text-lg
                    font-bold
                    leading-none
                  "
                >
                  Samarth Tours
                </h2>

                <p
                  className="
                    text-[11px]
                    text-orange-100
                    mt-0.5
                  "
                >
                  Travel With Comfort
                </p>

              </div>

            </div>

            {/* Close */}

            <button
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                text-2xl
                hover:rotate-90
                transition
                duration-300
              "
            >

              <FaTimes />

            </button>

          </div>

        </div>

        {/* Menu */}

        <div
          className="
            px-4
            py-6
            flex
            flex-col
            gap-4
          "
        >

          {/* Home */}

          <button
            onClick={goToHome}
            className="
              flex
              items-center
              gap-3
              bg-gray-50
              hover:bg-orange-500
              hover:text-white
              text-gray-800
              px-4
              py-4
              rounded-2xl
              transition
              duration-300
              shadow-sm
              hover:shadow-lg
              group
            "
          >

            <FaHome
              className="
                text-lg
                text-orange-500
                group-hover:text-white
              "
            />

            <span
              className="
                text-base
                font-semibold
              "
            >
              Home
            </span>

          </button>

          {/* Programs */}

          <div
            className="
              bg-gray-50
              rounded-2xl
              overflow-hidden
              shadow-sm
            "
          >

            <button
              onClick={() =>
                setProgramOpen(
                  !programOpen
                )
              }
              className="
                w-full
                flex
                items-center
                justify-between
                px-4
                py-4
                hover:bg-orange-500
                hover:text-white
                transition
                duration-300
                group
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <FaGlobeAsia
                  className="
                    text-lg
                    text-orange-500
                    group-hover:text-white
                  "
                />

                <span
                  className="
                    text-base
                    font-semibold
                  "
                >
                  Programs
                </span>

              </div>

              <FaChevronDown
                className={`
                  transition-transform
                  duration-300

                  ${
                    programOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

            </button>

            {/* Dropdown */}

            {programOpen && (

              <div
                className="
                  px-3
                  pb-3
                  flex
                  flex-col
                  gap-2
                "
              >

                <Link
                  to="/domestic"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    bg-white
                    hover:bg-orange-500
                    hover:text-white
                    px-4
                    py-3
                    rounded-xl
                    transition
                    duration-300
                    font-medium
                    border
                  "
                >
                  Domestic Tours
                </Link>

                <Link
                  to="/international"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    bg-white
                    hover:bg-orange-500
                    hover:text-white
                    px-4
                    py-3
                    rounded-xl
                    transition
                    duration-300
                    font-medium
                    border
                  "
                >
                  International Tours
                </Link>

              </div>

            )}

          </div>

          {/* Gallery */}

          <button
            onClick={() =>
              goToSection("gallery")
            }
            className="
              flex
              items-center
              gap-3
              bg-gray-50
              hover:bg-orange-500
              hover:text-white
              text-gray-800
              px-4
              py-4
              rounded-2xl
              transition
              duration-300
              shadow-sm
              hover:shadow-lg
              group
            "
          >

            <FaImages
              className="
                text-lg
                text-orange-500
                group-hover:text-white
              "
            />

            <span
              className="
                text-base
                font-semibold
              "
            >
              Gallery
            </span>

          </button>

        </div>

      </div>

    </>

  );

}