import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Policy() {

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
              Privacy Policy
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
              At Samarth Tours, we value your
              privacy and are committed to
              protecting your personal
              information.
            </p>

            <p>
              We may collect details such as
              your name, phone number, email
              address, and travel preferences
              when you contact us or book a
              tour package.
            </p>

            <p>
              Your information is used only
              for booking, customer support,
              tour updates, and improving our
              services.
            </p>

            <p>
              We do not sell or share your
              information with third parties.
            </p>

            <p>
              Your data is protected with
              appropriate security measures
              and is used only for travel
              related communication.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}