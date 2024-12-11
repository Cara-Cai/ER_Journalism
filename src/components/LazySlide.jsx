import { useState, useEffect, useRef } from "react";

function LazySlide({ title, children, viewportPosition }) {
  const [isVisible, setIsVisible] = useState(false);
  const slideRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "50px", // Pre-load slides slightly before they are in view
        threshold: 0.1,
      }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={slideRef}
      style={{
        fontFamily: "Arial",
        position: "absolute",
        top: `${viewportPosition}vh`,
        maxWidth: "40vw",
        left: "10%",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "40px",
        paddingTop:"40px",
        backgroundColor: isVisible ? "rgba(158, 86, 209, 0.8)" : "transparent",
        borderRadius: "10px",
        color: isVisible ? "yellow" : "transparent", // Hide content until loaded
        transition: "color 0.3s ease, background-color 0.3s ease",
        zIndex: "50",
        lineHeight: "1.5",
      }}
    >
      {isVisible && title && (
        <div
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {title}
        </div>
      )}
      {isVisible && children}
    </div>
  );
}

export default LazySlide;
