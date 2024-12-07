import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import "./scrollTop.css";
const scrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.addEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <button
        className={`scroll-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
};

export default scrollTop;
