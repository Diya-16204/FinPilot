import React, { useState } from "react";
import "./blogSlider.scss";
import loginImg from "../assets/Images/Login.png";
import signInImg from "../assets/Images/SignIn.png";
import continueImg from "../assets/Images/ContinueWithoutRegistering.png";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";
import Top from "./Top";


const cards = [
  {
    date: "Login",
    title: "Welcome Back 👋",
    text: "Log in to access your account, pick up where you left off, and keep everything in sync across devices.",
    img: loginImg
  },
  {
    date: "Sign Up",
    title: "Create Your Account",
    text: "Sign up in seconds to save your progress, personalize your experience, and unlock all features.",
    img: signInImg
  },
  {
    date: "Guest Access",
    title: "Continue Without Registering",
    text: "Jump right in and explore the app without creating an account. You can sign up anytime later. But your details won’t be saved for now.",
    img: continueImg
  }
];

const BlogSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();   // ✅ CORRECT PLACE

  const card = cards[current];

  return (
    <div className="blog-slider">
      {/* 🔹 TOP HEADING */}
      <Top/>
      <br></br>
      <Heading text="Your Personal Expense Manager" />
      <div className="blog-slider__item">
        <div className="blog-slider__img">
          <img src={card.img} alt={card.title} />
        </div>

        <div className="blog-slider__content">
          <span className="blog-slider__code">{card.date}</span>
          <div className="blog-slider__title">{card.title}</div>
          <div className="blog-slider__text">{card.text}</div>

          <buttonn
            className="blog-slider__button"
            onClick={() => {
              if (card.date === "Login") navigate("/login");
              if (card.date === "Sign Up") navigate("/register");
              if (card.date === "Guest Access") navigate("/dashboard");
            }}
          >
            {card.date}
          </buttonn>

          {/* pagination dots */}
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
      </div>
    </div>
  );
};

export default BlogSlider;
