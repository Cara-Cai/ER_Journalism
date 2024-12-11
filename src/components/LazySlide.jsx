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
        fontFamily: "Open Sans, light",
        fontSize: "18px",
        position: "absolute",
        top: `${viewportPosition}vh`,
        maxWidth: "40vw",
        left: "10%",
        paddingLeft: "40px",
        paddingRight: "30px",
        paddingBottom: "30px",
        paddingTop:"30px",
        backgroundColor: isVisible ? "rgba(76, 0, 112, 0.8)" : "transparent",
        borderRadius: "10px",
        color: isVisible ? "white" : "transparent", // Hide content until loaded
        transition: "color 0.3s ease, background-color 0.3s ease",
        zIndex: "50",
        lineHeight: "1.5",
      }}
    >
      {isVisible && title && (
        <div
          style={{
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "20px",
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
