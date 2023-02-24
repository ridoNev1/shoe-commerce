import React from "react";
import Carousel from "nuka-carousel";
import PropType from "prop-types";

const CarrouselComponent = ({ imageData, slideActive, setSlideActive }) => {
  return (
    <Carousel
      slideIndex={slideActive}
      renderBottomCenterControls={false}
      renderCenterLeftControls={({ _, previousSlide }) =>
        slideActive > 0 && (
          <button
            onClick={() => {
              previousSlide();
              setSlideActive(slideActive - 1);
            }}
            className="inline-block text-[#7b7b7b] cursor-pointer bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )
      }
      renderCenterRightControls={({ _, nextSlide }) =>
        slideActive < imageData?.length - 1 && (
          <button
            onClick={() => {
              nextSlide();
              setSlideActive(slideActive + 1);
            }}
            className="text-[#7b7b7b] inline-block cursor-pointer bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )
      }
    >
      {imageData?.map((el, index) => (
        <img
          src={el}
          className="w-full max-h-[400px] object-contain"
          key={index}
          alt="carousel-thumbnail"
        />
      ))}
    </Carousel>
  );
};

CarrouselComponent.propTypes = {
  imageData: PropType.array,
  slideActive: PropType.number,
  setSlideActive: PropType.func,
};

export default CarrouselComponent;
