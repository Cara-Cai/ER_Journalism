// import React, { useEffect, useRef } from "react";

// export default function Flourishone({ viewportPosition }) {
//   const flourishRef = useRef();

//   useEffect(() => {
//     // Dynamically add the Flourish embed script if it hasn't been added already
//     if (!document.querySelector('script[src="https://public.flourish.studio/resources/embed.js"]')) {
//       const script = document.createElement("script");
//       script.src = "https://public.flourish.studio/resources/embed.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: `${viewportPosition}vh`,
//         left: "10%",
//         width: "40%", // Adjust width of the parent container
//         height: "500px", // Adjust height of the parent container
//         padding: "20px",
//         backgroundColor: "#f9f9f9", // Optional background color for styling
//         borderRadius: "10px", // Optional rounded corners
//         zIndex: "50",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for depth
//         textAlign: "center", // Center the content horizontally
//       }}
//     >
//       <div
//         className="flourish-embed"
//         data-src="story/2768926"
//         style={{
//           width: "100%", // Set to fill parent width
//           maxWidth: "500px", // Limit max width for smaller embed
//           height: "300px", // Adjust height for smaller embed
//           margin: "0 auto", // Center horizontally within the parent div
//         }}
//       >
//         <noscript>
//           <img
//             src="https://public.flourish.studio/story/2768926/thumbnail"
//             width="100%"
//             alt="visualization"
//           />
//         </noscript>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";

export default function FlourishEmbed({ viewportPosition }) {
  const flourishRef = useRef();

  useEffect(() => {
    // Dynamically add the Flourish embed script if it hasn't been added already
    if (!document.querySelector('script[src="https://public.flourish.studio/resources/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://public.flourish.studio/resources/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: `${viewportPosition}%`,
        left: "10%",
        width: "45%",
        height: "600px",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "#rgba(158, 86, 209, 0.8)",
        borderRadius: "10px",
        zIndex: "50",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <div
        className="flourish-embed"
        data-src="visualisation/20729940"
        style={{
          width: "100%",
          maxWidth: "650px",
          height: "100px",
          margin: "0 auto",
        }}
      >
        <noscript>
          <img
            src="https://public.flourish.studio/visualisation/20729940/thumbnail"
            width="100%"
            alt="chart visualization"
          />
        </noscript>
      </div>
    </div>
  );
}


