import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";

const Slider = ({ data }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [firstCardWidth, setFirstCardWidth] = useState(0);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const firstCard = carousel.querySelector(".card");
    if (firstCard) {
      setFirstCardWidth(firstCard.offsetWidth);
    }
  }, []);

  const dragStart = (e) => {
    setIsDragging(true);
    const carousel = document.querySelector(".carousel");
    carousel.classList.add("dragging");
    setStartX(e.pageX);
    setStartScrollLeft(carousel.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const carousel = document.querySelector(".carousel");
    const newScrollLeft = startScrollLeft - (e.pageX - startX);
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      setIsDragging(false);
      return;
    }
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    setIsDragging(false);
    const carousel = document.querySelector(".carousel");
    carousel.classList.remove("dragging");
  };

  const autoPlay = () => {
    if (window.innerWidth < 800) return;
    const carousel = document.querySelector(".carousel");
    const totalCardWidth = carousel.scrollWidth;
    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
    if (carousel.scrollLeft >= maxScrollLeft) return;
    setTimeoutId(
      setTimeout(() => {
        const carousel = document.querySelector(".carousel");
        carousel.scrollLeft += firstCardWidth;
      }, 2500)
    );
  };

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
    };
  }, [dragStart, dragging, dragStop]);

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
    return () => {
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, [timeoutId, autoPlay]);

  const arrowClicked = (direction) => {
    const carousel = document.querySelector(".carousel");
    carousel.scrollLeft +=
      direction === "left" ? -firstCardWidth : firstCardWidth;
  };

  return (
    <div className="wrapper">
      <i
        id="left"
        className="fa-solid fas fa-angle-left"
        onClick={() => arrowClicked("left")}
      ></i>
      <ul className="carousel" id="carousel">
        {data.map((item, index) => (
          <li key={index} className="card">
            <div className="img">
              <img src={item.imageURL} alt="" draggable="false" />
            </div>
            <h2 style={{ color: "green", fontWeight: "bold" }}>{item.title}</h2>
            <span style={{ fontWeight: "200" }}>{item.category}</span>
            <Link href="/" className="btn">
              Invest Now
            </Link>
          </li>
        ))}
      </ul>
      <i
        id="right"
        className="fa-solid fas fa-angle-right"
        onClick={() => arrowClicked("right")}
      ></i>
    </div>
  );
};

export default Slider;
