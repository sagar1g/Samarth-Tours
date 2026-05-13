export default function About() {

  return (

    <section
      id="about"
      className="
        bg-gradient-to-r
        from-orange-500
        to-orange-700
        text-white
        py-8
        md:py-16
        px-4
        md:px-6
        mt-4
      "
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}

        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            mb-4
            md:mb-6
          "
        >
          About Samarth Tours
        </h2>

        {/* Description */}

        <p
          className="
            text-base
            sm:text-lg
            md:text-xl
            leading-8
            md:leading-10
            font-medium
            max-w-4xl
            mx-auto
          "
        >
          At Samarth Tours, every journey is a chapter in your life,
          and we’re here to make it extraordinary. From chasing clouds
          in the mountains to sharing stories with locals, we create
          experiences that touch your heart and stay with you forever.
        </p>

      </div>

    </section>

  );

}