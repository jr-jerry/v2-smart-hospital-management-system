const useSlides=()=>{
    let slideIndex=1;
    showSlides(slideIndex);

    function showSlides(index){
        
    }
}

/**
 * import { useState } from "react";

export default function ContentSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!slides?.length) return null;

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.3s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} style={{ minWidth: "100%" }}>
            {slide}
          </div>
        ))}
      </div>

      <button type="button" onClick={goToPrevious}>
        Previous
      </button>
      <button type="button" onClick={goToNext}>
        Next
      </button>
    </div>
  );
}

 */