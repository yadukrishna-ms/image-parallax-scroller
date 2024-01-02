import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useState, useEffect } from "react";
import { backgroundImage, images } from "../constants/constants";
import "./../App.css";

const MainContainer = ({ scrollSpeed }) => {
  const parallaxRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [finalPage, setFinalpage] = useState(images.length - 1);
  const [currentScrollSpeed, setCurrentScrollSpeed] = useState(scrollSpeed);

  useEffect(() => {
    setCurrentScrollSpeed(scrollSpeed);
  }, [scrollSpeed]);

  const scrollToNext = () => {
    if (currentPage < finalPage) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      parallaxRef.current.scrollTo(nextPage);
    }
  };

  const scrollToPrevious = () => {
    if (currentPage > 0) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      parallaxRef.current.scrollTo(previousPage);
    }
  };

  return (
    <div className="">
      <div>
        <Parallax
          ref={parallaxRef}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
          factor={finalPage + 2}
          pages={finalPage + 2}
          config={{ scroll: currentScrollSpeed }}
        >
          {images.map((image, index) => (
            <ParallaxLayer key={index} offset={index}>
              {currentPage > 0 && (
                <button
                  className="nav-button prev-button"
                  onClick={scrollToPrevious}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4361/4361429.png?uid=R117016774&ga=GA1.1.1078937099.1694960428"
                    alt="Previous"
                  />
                </button>
              )}
              {image.url && (
                <img
                  className="w-full  object-cover "
                  src={image.url}
                  alt="Image1"
                />
              )}
              {currentPage < finalPage && (
                <button
                  className="nav-button next-button"
                  onClick={scrollToNext}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4361/4361419.png"
                    alt="Next"
                  />
                </button>
              )}
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
      <div></div>
    </div>
  );
};

export default MainContainer;
