import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {

  return (

    <>

      <Header />

      <section
        className="
          bg-gray-100
          py-10
          md:py-16
          px-5
          md:px-10
        "
      >

        <div className="max-w-6xl mx-auto">

          {/* Vision */}

          <h2
            className="
              text-3xl
              md:text-6xl
              font-bold
              text-blue-900
              mb-5
              md:mb-10
            "
          >
            Our Vision
          </h2>

          <p
            className="
              text-base
              md:text-2xl
              leading-8
              md:leading-[60px]
              text-gray-800
              mb-10
              md:mb-16
            "
          >
            At Samarth Tours, our vision is to become India’s most trusted
            travel and adventure platform, known for unforgettable journeys,
            nature experiences, and customer happiness.
          </p>

          {/* Mission */}

          <h2
            className="
              text-3xl
              md:text-6xl
              font-bold
              text-blue-900
              mb-5
              md:mb-10
            "
          >
            Our Mission
          </h2>

          <p
            className="
              text-base
              md:text-2xl
              leading-8
              md:leading-[60px]
              text-gray-800
              mb-10
              md:mb-16
            "
          >
            Our mission is simple but powerful:
            To create memorable, affordable, and safe travel experiences
            for every traveler across India and beyond.
          </p>

          {/* Commitment */}

          <h2
            className="
              text-3xl
              md:text-6xl
              font-bold
              text-blue-900
              mb-6
              md:mb-12
            "
          >
            We are committed to:
          </h2>

          <ul
            className="
              list-disc
              pl-6
              md:pl-10
              text-base
              md:text-2xl
              leading-8
              md:leading-[60px]
              text-gray-800
              space-y-3
              md:space-y-6
            "
          >

            <li>
              Providing safe and trusted travel experiences
            </li>

            <li>
              Creating budget-friendly tour packages
            </li>

            <li>
              Helping travelers explore nature and culture
            </li>

            <li>
              Delivering customer satisfaction and support
            </li>

          </ul>

        </div>

      </section>

      <Footer />

    </>

  );

}