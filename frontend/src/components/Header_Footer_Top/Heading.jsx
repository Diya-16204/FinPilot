import { useEffect, useRef } from "react";
import "./Heading.css";

const Heading = ({ text }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const range = { min: 1, max: 9 };
    const chars = text.split("");

    // Clear existing content
    el.innerHTML = "";

    chars.forEach((char) => {
      const delay =
        Math.floor(Math.random() * (range.max - range.min + 1)) +
        range.min;

      const span = document.createElement("span");
      span.className = `letterDrop ld${delay}`;
      span.innerHTML = char === " " ? "&nbsp;" : char;

      el.appendChild(span);
    });
  }, [text]);

  return <h1 className="heading" ref={headingRef}></h1>;
};

export default Heading;
