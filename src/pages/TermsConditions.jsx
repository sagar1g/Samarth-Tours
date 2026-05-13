import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsConditions() {

  return (

    <>

      <Header />

      <section
        className="
          bg-[#f3f3f5]
          min-h-screen
          py-14
          px-5
          md:px-16
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
          "
        >

          {/* Heading */}

          <div className="mb-12">

            <p
              className="
                text-orange-500
                uppercase
                tracking-[3px]
                font-semibold
                text-sm
                mb-3
              "
            >
              Samarth Tours
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-bold
                text-[#1e3a8a]
              "
            >
              Terms & Conditions
            </h1>

          </div>

          {/* Content */}

          <div
            className="
              space-y-8
              text-gray-700
              text-base
              md:text-xl
              leading-9
            "
          >

            <p>
              All bookings are subject to
              availability and confirmation
              by Samarth Tours.
            </p>

            <p>
              Tour prices may change based
              on hotel availability,
              transportation costs, and
              seasonal demand.
            </p>

            <p>
              Cancellation charges may apply
              depending on the cancellation
              timing before departure.
            </p>

            <p>
              Travelers must carry valid ID
              proof during the entire
              journey.
            </p>

            <p>
              Samarth Tours is not
              responsible for delays,
              weather conditions, natural
              disasters, or circumstances
              beyond our control.
            </p>

            <p>
              By booking a package with us,
              you agree to follow all tour
              rules and travel guidelines.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}