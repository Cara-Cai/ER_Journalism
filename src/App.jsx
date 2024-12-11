import { useEffect, useState } from "react";
import Scene from "./components/Scene";
import LazySlide from "./components/LazySlide";
import useScrollProgress from "./components/useScrollProgress";
import FlourishEmbed from "./components/Flourishone";
import { AnimationTimeline } from "./components/AnimationTimeline";

import "./App.css";

function App() {
  const [showCover, setShowCover] = useState(true); // State to toggle cover page
  const progress = useScrollProgress();

  useEffect(() => {
    AnimationTimeline.progress(progress);
  }, [progress]);

  return (
    <div>
    {/* Show cover page if `showCover` is true */}
    {showCover ? (
        <div className="cover-page"
        style={{
          background: "url('../image.png') no-repeat center center/cover",
        }}
        
        >
          <h1>Check It Out: ITP Historical Stories Untold</h1>
          <p>Based on ER System Checkout Data 2011-2024</p>
          <button onClick={() => setShowCover(false)}>Enter</button>
        </div>
    ) : (
      <div id="article_wrapper">
         {/* Lazy Loaded Slides */}
    {/* Lazy Loaded Slides */}
  <LazySlide title="Overview" viewportPosition={30}>
    Situated within the Tisch School of the Arts at NYU, the Interactive Telecommunications Program (ITP) has a nearly half-century history of exploring the possibilities of interactive technologies and creative participatory experiences since its founding in 1979.<br/><br/>The Equipment Room (ER) at ITP has been a cornerstone of this exploration since its establishment in 2011. It stands as a living testament to the evolution of technology and creativity, providing students with tools to bring their ideas to life. Thanks to Daniel Tsadok for compiling the dataset of ER checkout records spanning 2011-2024. This invaluable resource offers a glimpse into the history of ITP’s creative journey.
  </LazySlide>

  {/* <LazySlide viewportPosition={100}>
    The Equipment Room (ER) at ITP has been a cornerstone of this exploration since its establishment in 2011. It stands as a living testament to the evolution of technology and creativity, providing students with tools to bring their ideas to life. Thanks to Daniel Tsadok for compiling the dataset of ER checkout records spanning 2011-2024. This invaluable resource offers a glimpse into the history of ITP’s creative journey.
  </LazySlide> */}

  <LazySlide viewportPosition={100}>
    Below is an interactive visualization of the dataset, showcasing top 5 checkout data over years in trends in ITP’s creative community. The data reflects more than just numbers—it tells a story of innovation, adaptation, and the unrelenting pursuit of new ideas.
  </LazySlide>

  {/* Flourish Embed Inside HTML Div */}
  <FlourishEmbed viewportPosition={200} />

  <LazySlide title="2011: Foundations in DSLR Photography and Digital Media" viewportPosition={400}>
  The journey begins in 2011, a pivotal time for digital media at ITP. DSLR cameras, tripods, and audio recorders emerged as the most sought-after items in the Equipment Room (ER), reflecting a broader societal trend toward the democratization of visual storytelling.  </LazySlide>

  <LazySlide viewportPosition={500}>
  This surge reflects a broader societal trend: the rise of digital photography and online content creation. Platforms like Instagram, launched just a year earlier in 2010, were beginning to change the way we share and perceive visual media. Students at ITP, inspired by this new visual culture, were eager to explore photography and videography, driving up the demand for DSLR cameras and related equipment.

  </LazySlide>

  <LazySlide title="2012: The Shift to Portability" viewportPosition={850}>
    In 2012, ITP made a transformative investment in MacBook Pro Production Laptops. This decision marked a shift from traditional computer labs to portable personal workstations, empowering students to create on the go.
  </LazySlide>

  <LazySlide viewportPosition={1000}>
    This trend mirrored society’s growing reliance on high-powered portable devices. Laptop checkouts began to rise, marking a cultural shift toward flexibility and mobility in creative work.
  </LazySlide>

  <LazySlide title="2015: Enter Virtual Reality and Physical Computing" viewportPosition={1500}>
    By 2015, virtual reality (VR) was capturing public attention, with devices like the Oculus Rift heralding a new era in immersive technology. Responding to this trend, ITP introduced VR-compatible laptops and headsets, making these tools accessible to students.
  </LazySlide>

  <LazySlide viewportPosition={1700}>
    Simultaneously, physical computing began gaining traction. Students started experimenting with Arduino boards, sensors, and microcontrollers, blending physical and digital elements in their projects. This era marked a shift toward immersive and interactive experiences.
  </LazySlide>

  <LazySlide title="2017: The Golden Age of Equipment Demand" viewportPosition={2100}>
  2017 was a milestone year, with checkout counts reaching unprecedented levels. Students were checking out equipment across categories — from VR headsets and laptops to physical computing tools — reflecting a multidisciplinary approach to creation. This year saw VR solidify its place in both industry and education, with VR headsets like the HTC Vive joining the Oculus Rift in popularity. 
  </LazySlide>

  <LazySlide viewportPosition={2200}>
  Around the same time, the world saw a surge in interest in AI and machine learning, sparking curiosity about how these technologies could be applied in art and design. This peak in equipment usage speaks to an increased ambition among students to blend media, technology, and physical interaction in novel ways.

  </LazySlide>

  <LazySlide title="2020: Adapting to Remote Creation" viewportPosition={2400}>
  In 2020, the global shift to remote work and learning due to the pandemic influenced ER checkout patterns. With fewer in-person interactions, some equipment categories, like VR headsets and physical computing kits, saw decreased demand. But other tools—such as laptops—remained crucial, showing how the community adapted by finding new ways to collaborate, experiment, and create, even from a distance. Interestingly, the data also reveals a notable increase in the checkout of dongles and adapters during this period. 
  </LazySlide>

  <LazySlide viewportPosition={2500}>
  This rise reflects the practical challenges of transitioning to remote setups, where connecting devices to various home systems—monitors, external drives, projectors, and more—required versatile solutions. Dongles and adapters became indispensable tools for ensuring compatibility and productivity in these makeshift workspaces. This shift reflects the adaptability of ITP and its students, who found ways to keep the creative momentum going, even from home.
  </LazySlide>

  <LazySlide title="2023-2024: A New Era in Physical Computing" viewportPosition={2800}>
  The data from 2023 and 2024 highlights a significant increase in the checkout of physical computing tools and shop supplies, reflecting a clear shift toward hands-on, hybrid projects. This growth suggests that students are combining traditional fabrication techniques with advanced technological systems, such as sensors and microcontrollers, to create tangible, interactive works. 
  </LazySlide>

  <LazySlide viewportPosition={3000}>
  The rise in woodshop supply usage also indicates a renewed focus on building physical structures or custom casings for these projects, aligning with broader trends emphasizing materiality and sustainability in design. This shift signals the community’s evolving approach to blending digital and physical media, a direction that is shaping the next wave of creative exploration at ITP.
  </LazySlide>

  <LazySlide title="Looking Ahead: Predicting Future Needs Through Past Trends" viewportPosition={3400}>
  Today, as we reflect on these historical patterns, we see more than just the popularity of specific technologies. The data paints a picture of how societal shifts, such as the rise of digital media, VR, and AR, have influenced creative expression at ITP. <br/><br/>By analyzing these trends, we can anticipate future needs: will VR continue its rise, especially as AR and XR enter the field? Will physical computing remain foundational as we move toward more immersive, tangible interactions?
  <br/><br/>Perhaps the next wave will see more demand for tools supporting AI and machine learning projects, or for equipment enabling hybrid physical-digital installations. 
  </LazySlide>

  <LazySlide viewportPosition={3500}>
  In making this data accessible, we’re not just looking back; we’re enabling future planning. This information empowers the ITP community to adapt resources, anticipate trends, and ensure that ITP remains at the forefront of creative technology.<br/><br/>Each item in the ER is a small piece of a larger story — one that tells us where we’ve been and where we’re going. As the creative field continues to evolve, so will the ER, serving as a living record of innovation and inspiration.
  </LazySlide>


        {/* 3D scene container */}
        <Scene />
      </div>
    )}
  </div>
  );
}

export default App;

