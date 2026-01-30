import React, { useState } from "react";
import "./blogSlider.scss";

const cards = [
  {
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
  },
  {
    date: "10 January 2020",
    title: "Second Card",
    text: "Another example of content inside the slider.",
    img: "https://picsum.photos/400/300"
  },
  {
    date: "5 February 2020",
    title: "Third Card",
    text: "Yet another slide with different content.",
    img: "https://picsum.photos/400/301"
  }
];

const BlogSlider = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % cards.length); // cycle through cards
  };

  const card = cards[current];

  return (
    <div className="blog-slider">
      <div className="blog-slider__item" onClick={handleClick}>
        <div className="blog-slider__img">
          <img src={card.img} alt={card.title} />
        </div>

        <div className="blog-slider__content">
          <span className="blog-slider__code">{card.date}</span>
          <div className="blog-slider__title">{card.title}</div>
          <div className="blog-slider__text">{card.text}</div>
          <a href="#" className="blog-slider__button">READ MORE</a>
        </div>
      </div>

      {/* 👇 Pagination dots */}
      <div className="blog-slider__pagination">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;
