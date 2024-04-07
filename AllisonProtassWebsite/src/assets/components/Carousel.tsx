import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap"; // Import the entire Bootstrap library
import { RefObject } from "react";
import "./Carousel.css"; // Import CSS file for carousel styles

interface Props {
  eventPhotos: Array<string>;
}

const Carousel: React.FC<Props> = ({ eventPhotos }) => {
  const carouselRef = useRef<HTMLDivElement>(null); // Ref to the carousel DOM element

  useEffect(() => {
    if (carouselRef.current) {
      // Initialize the carousel component
      const carousel = new bootstrap.Carousel(carouselRef.current, {
        interval: 2, // Specify the interval between slides in milliseconds
      });

      // Cleanup function to destroy the carousel when the component unmounts
      return () => {
        carousel.dispose(); // Dispose the carousel instance
      };
    }
  }, [eventPhotos]); // Re-run this effect whenever eventPhotos change

  return (
    <div
      ref={carouselRef as RefObject<HTMLDivElement>}
      id="carouselExample"
      className="carousel slide custom-carousel" // Added custom-carousel class
    >
      <div className="carousel-inner">
        {eventPhotos.map((photo, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            {photo.endsWith(".mov") ? (
              <video className="d-block w-100" controls>
                <source src={photo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={photo}
                className="d-block w-100 custom-carousel-image" // Added custom-carousel-image class
                alt={`Slide ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
