import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function HeroTitle() {
  const el = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(el.current, {
      strings: [
        "Web developer",
        "Creative",
        "Constant learner",
       
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: "|",
      backDelay: 1000,
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <h1 className="hero-title">
      Hi, I'm <span className="highlight">Mónica Coca</span> <br />
      <span ref={el}></span>
    </h1>
  );
}

export default HeroTitle;
