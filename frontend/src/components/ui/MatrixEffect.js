import React, { useEffect, useRef, useState } from "react";
import "./MatrixEffect.css"; // Import SCSS or CSS file

const MatrixEffect = () => {
  const mainRef = useRef(null);

  const lineCount = 40; // Number of lines
  const minCharCount = 20;
  const maxCharCount = 40;
  const [mainDimensions, setMainDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const mainElement = mainRef.current;
    const updateDimensions = () => {
      setMainDimensions({
        width: mainElement.offsetWidth,
        height: mainElement.offsetHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Generate lines
    for (let i = 0; i < lineCount; i++) {
      const index = i;
      const charCount = random(minCharCount, maxCharCount);
      const opacity = random(6, 9);
      
      // Calculate the position based on the index to spread lines evenly
      const position = (mainDimensions.width / lineCount) * index;

      const tick = random(100, 300); // Reduced tick duration for quicker line generation

      generateLine(index, charCount, opacity, position, tick);
    }

    return () => window.removeEventListener("resize", updateDimensions);
  }, [mainDimensions.width, mainDimensions.height]);

  // Random number generator
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Get random characters (01) for the matrix effect
  function getLineChar(length) {
    const characters = "01";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  // Function to animate the falling lines
  function animate(index, charCount, opacity, position, tick) {
    const elem = document.querySelector(`#line${index}`);
    let pos = -mainDimensions.height;

    // Reduced delay in the interval for faster animation
    const id = setInterval(() => {
      const textWidth = getTextWidth(getLineChar(charCount), "bold 16px Consolas");
      if (pos >= mainDimensions.height + (maxCharCount - 1) / 2 * 10) {
        clearInterval(id);
        elem.style.top = -mainDimensions.height + "px";
        animate(index, charCount, opacity, position, tick);
      } else {
        pos += 2; // Move faster by increasing the increment
        elem.style.top = pos + "px";
      }
    }, random(1, 5)); // Reduced maximum interval for faster animation
  }

  // Generate lines and inject into the DOM
  function generateLine(index, charCount, opacity, position, tick) {
    const html = `
      <div class="lines" style="opacity:0.${opacity}; left:${position}px; top:-${(maxCharCount - 1) / 2 * 10}px;" id="line${index}">
        <div></div>
        <span>${getLineChar(charCount)}<span>
      </div>`;
    
    setTimeout(() => {
      mainRef.current.insertAdjacentHTML("beforeend", html);
      animate(index, charCount, opacity, position, tick);
    }, tick + index * 50); // Reduced delay for line generation
  }

  // Get width of text for alignment
  function getTextWidth(text, font) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  return <div className="main" ref={mainRef}></div>;
};

export default MatrixEffect;
