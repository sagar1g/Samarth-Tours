import { useEffect, useRef, useState } from "react";

import image1 from "../images/image_1.jpeg";
import image2 from "../images/image_2.jpeg";
import image3 from "../images/image_3.jpeg";
import image4 from "../images/image_4.jpeg";
import image5 from "../images/image_5.jpeg";
import image6 from "../images/image_6.jpeg";
import image7 from "../images/image_7.jpeg";
import image8 from "../images/image_8.jpeg";
import image9 from "../images/image_9.jpeg";
import image11 from "../images/image_11.jpeg";

export default function Gallery() {

  const scrollRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [

    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image11,

  ];

  // Infinite Auto Scroll

  useEffect(() => {

    const slider = scrollRef.current;

    const interval = setInterval(() => {

      if (slider && !isDown) {

        slider.scrollLeft += 0.5;

        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth
        ) {

          slider.scrollLeft = 0;

        }

      }

    }, 20);

    return () => clearInterval(interval);

  }, [isDown]);

  // Mouse Drag Start

  const handleMouseDown = (e) => {

    setIsDown(true);

    setStartX(
      e.pageX - scrollRef.current.offsetLeft
    );

    setScrollLeft(
      scrollRef.current.scrollLeft
    );

  };

  // Mouse Leave

  const handleMouseLeave = () => {

    setIsDown(false);

  };

  // Mouse Up

  const handleMouseUp = () => {

    setIsDown(false);

  };

  // Mouse Move

  const handleMouseMove = (e) => {

    if (!isDown) return;

    e.preventDefault();

    const x =
      e.pageX - scrollRef.current.offsetLeft;

    const walk = (x - startX) * 2;

    scrollRef.current.scrollLeft =
      scrollLeft - walk;

  };

  return (

    <section
      id="gallery"
      className="
        bg-gray-100
        py-4
        md:py-6
        overflow-hidden
      "
    >

      <div className="max-w-full mx-auto">

        <h2
          className="
            text-3xl
            md:text-5xl
            font-bold
            text-center
            mb-4
            md:mb-6
            text-blue-900
          "
        >
          Travel Gallery
        </h2>

        {/* Gallery Slider */}

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="
            flex
            gap-4
            md:gap-8
            overflow-x-auto
            scrollbar-hide
            px-4
            md:px-10
            pb-6
            cursor-grab
            active:cursor-grabbing
            select-none
          "
        >

          {[...images, ...images].map(
            (image, index) => (

              <div
                key={index}
                className="
                  min-w-[260px]
                  sm:min-w-[320px]
                  md:min-w-[450px]
                  rounded-[25px]
                  md:rounded-[35px]
                  overflow-hidden
                  shadow-2xl
                  flex-shrink-0
                  transition
                  duration-500
                "
              >

                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  draggable="false"
                  className="
                    w-[260px]
                    h-[220px]
                    sm:w-[320px]
                    sm:h-[260px]
                    md:w-[450px]
                    md:h-[320px]
                    object-cover
                    transition-all
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}