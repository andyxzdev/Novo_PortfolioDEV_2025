import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./carrosselLogos.css";

import ReactIcon from "../../assets/icons/iconesLoop/react.svg";
import Java from "../../assets/icons/iconesLoop/java.svg";
import Node from "../../assets/icons/iconesLoop/node.svg";
import Html from "../../assets/icons/iconesLoop/html.svg";
import Css from "../../assets/icons/iconesLoop/css.svg";
import Figma from "../../assets/icons/iconesLoop/figma.svg";
import Bootstrap from "../../assets/icons/iconesLoop/bootstrap.svg";
import Caneta from "../../assets/icons/iconesLoop/caneta.svg";
import Video from "../../assets/icons/iconesLoop/video.svg";

const logos = [
  { src: ReactIcon, alt: "React" },
  { src: Java, alt: "Java" },
  { src: Node, alt: "Node" },
  { src: Html, alt: "HTML" },
  { src: Css, alt: "CSS" },
  { src: Figma, alt: "Figma" },
  { src: Bootstrap, alt: "Bootstrap" },
  { src: Caneta, alt: "Caneta" },
  { src: Video, alt: "Video" },

  { src: ReactIcon, alt: "React" },
  { src: Java, alt: "Java" },
  { src: Node, alt: "Node" },
  { src: Html, alt: "HTML" },
  { src: Css, alt: "CSS" },
  { src: Figma, alt: "Figma" },
  { src: Bootstrap, alt: "Bootstrap" },
  { src: Caneta, alt: "Caneta" },
  { src: Video, alt: "Video" },
];

export default function InfiniteCarousel() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // animação contínua (loop infinito)
  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 130,
      },
    });
  };

  // pausa e retoma a animação
  React.useEffect(() => {
    if (!isPaused) startAnimation();
    else controls.stop();
  }, [isPaused]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div className="carousel-track" animate={controls}>
        {[...logos, ...logos].map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
