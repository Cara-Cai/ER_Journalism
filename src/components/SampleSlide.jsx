// function SimpleSlide(props) {
//     const { children, viewportPosition } = props;
//     return (
      
//       <div
//         style={{
//           fontFamily: "Arial",
//          fontSize: "16px",
//          color: "yellow",
//          position: "absolute",
//          maxWidth: "45vw",
//          left: "10%",
//          paddingTop: "30px", // To offset slides a tiny bit from the left side of the screen
//          paddingBottom: "30px", // To offset slides a tiny bit from the left side of the screen
//          paddingLeft: "30px", // To offset slides a tiny bit from the left side of the screen
//          paddingRight: "30px", // To offset slides a tiny bit from the left side of the screen
//          backgroundColor: "rgba(158, 86, 209,0.8)", // Semi-transparent background
//          borderRadius: "10px", // Rounded corners for better visual appeal
//          top: `${viewportPosition}vh`,
//          zIndex: "50",
//          margin: "10px", // Added margin for the text
//         lineHeight: "1.5",
//         }}
//       >
//         {children}
//       </div>
    
//     );
//   }
  
//   export default SimpleSlide;

function SimpleSlide(props) {
  const { title, children, viewportPosition } = props;
  return (
    <div
      style={{
        fontFamily: "Arial",
        fontSize: "16px",
        color: "yellow",
        position: "absolute",
        maxWidth: "45vw",
        left: "10%",
        paddingTop: "10px",
        paddingBottom: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: "rgba(158, 86, 209,0.8)", // Semi-transparent background
        borderRadius: "10px",
        top: `${viewportPosition}vh`,
        zIndex: "50",
        margin: "10px",
        lineHeight: "1.5",
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            // marginBottom: "15px",
            color: "white", // Title color
          }}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export default SimpleSlide;

  