import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

import "./Review.css";

const Review = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-vert.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data);
      });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-gray-100 pt-8">
      <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-14">
        SOME OF THE REVIEWS
      </h1>
      <div
        id="reviews"
        className="container w-full h-[100%] m-auto py-16 px-4 relative group"
      >
        <div className="testimonial">
          <div className="testi-content">
            <div className="slide">
              <img src={`${slides[currentIndex]?.url}`} className="image" />
              <p>{slides[currentIndex]?.review}</p>
              <FaQuoteLeft className="quote-icon" />
              <div className="details">
                <span className="name">{slides[currentIndex]?.name}</span>
                <span className="job">{slides[currentIndex]?.job}</span>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT ARROW */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* RIGHT ARROW */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Review;
