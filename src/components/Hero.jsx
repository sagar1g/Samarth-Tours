export default function Hero() {

  return (

    <section
      id="home"
      className="
        relative
        h-[45vh]
        sm:h-[60vh]
        md:h-screen
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        px-4
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop')",
      }}
    >

      {/* Overlay Box */}

      <div
        className="
          bg-black/55
          p-5
          sm:p-8
          md:p-10
          rounded-2xl
          md:rounded-3xl
          text-center
          text-white
          max-w-4xl
          w-full
        "
      >

        {/* Heading */}

        <h2
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            mb-4
          "
        >
          Explore The World
        </h2>

        {/* Subtitle */}

        <p
          className="
            text-lg
            sm:text-xl
            md:text-3xl
            text-gray-200
            font-medium
          "
        >
          Kashmir • Kedarnath • Bhutan
        </p>

      </div>

    </section>
  );
}