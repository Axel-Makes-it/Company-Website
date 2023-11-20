import React from "react";
import "../styles/Hero.css";

function Hero() {
  const handleClick = () => {
    window.location.href =
      "https://chromewebstore.google.com/detail/click2ai/ccdmhhbpdngohbollmgmplbbdjlphddb?hl=en";
  };
  return (
    <div className="hero_container">
      <div className="hero_container-heading">
        <h2>AI-Powered Excellence.</h2>
        <h2 className="type">With the Click of a Button.</h2>
        <p id="hero-p">
          An invaluable resource designed to streamline and automate your social
          content tasks and workflows.
        </p>
        <button href="axel.dev.com" className="btn1" onClick={handleClick}>
          +Add to browser. It's Free
        </button>
      </div>
    </div>
  );
}

export default Hero;
