import React, { useEffect } from "react";
import './cardstyle.css';
import cardBg from '../images/cardsBg.jpg'
import cardBg1 from '../images/cardsBg1.jpg'
const Card = () => {
  const angle = 20;

  const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
  };

  const remap = (value, oldMax, newMax) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((e) => {
      e.addEventListener("mousemove", (event) => {
        const rect = e.getBoundingClientRect();
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        const posX = event.pageX - centerX;
        const posY = event.pageY - centerY;
        const x = remap(posX, rect.width / 2, angle);
        const y = remap(posY, rect.height / 2, angle);
        e.dataset.rotateX = x;
        e.dataset.rotateY = -y;
      });

      e.addEventListener("mouseout", () => {
        e.dataset.rotateX = 0;
        e.dataset.rotateY = 0;
      });
    });

    const update = () => {
      cards.forEach((e) => {
        let currentX = parseFloat(e.style.getPropertyValue('--rotateY')?.slice(0, -1)) || 0;
        let currentY = parseFloat(e.style.getPropertyValue('--rotateX')?.slice(0, -1)) || 0;
        const x = lerp(currentX, e.dataset.rotateX, 0.05);
        const y = lerp(currentY, e.dataset.rotateY, 0.05);
        e.style.setProperty("--rotateY", `${x}deg`);
        e.style.setProperty("--rotateX", `${y}deg`);
      });
    };

    const intervalId = setInterval(update, 1000 / 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="centered">
        <div className="card border-left-behind">
          <div
            className="shadow"
            style={{ backgroundImage: `url(${cardBg})` }}
          ></div>
          <div
            className="image background"
            style={{ backgroundImage: `url(${cardBg1})` }}
          ></div>
          <div
            className="image cutout"
            style={{ backgroundImage: `url(${cardBg})` }}
          ></div>
          <div className="content">
            <h2>Hover me!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
