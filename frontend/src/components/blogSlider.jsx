import React from "react";
import "./blogSlider.scss";

const BlogSlider = () => {
  return (
    <div className="blog-slider">
      <div className="blog-slider__item">
        {/* Floating image box */}
        <div className="blog-slider__img">
          <img
            src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
            alt="sidewalk with leaves"
          />
        </div>

        {/* Content area */}
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            voluptate repellendus magni illo ea animi?
          </div>
          <a href="#" className="blog-slider__button">
            READ MORE
          </a>
        </div>

        {/* Pagination dots */}
        <div className="blog-slider__pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
