import React from "react";
import img from "../assets/bench-photo.jpg";
const About = () => {
  return (
    <div
      name="about"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full align-center pt-24"
    >
      <div name="body-text">
        <h1 className="flex justify-center items-center uppercase text-title font-250 pb-11">
          A Little Bit About Me
        </h1>

        <div className="flex justify-center items-center">
          <img src={img} alt="Photo Icon" className="w-44 rounded-full" />
        </div>

        <div
          name="about-me"
          className="flex flex-col justify-center items-center text-center my-10 mx-48 leading-7 "
        >
          <p>
            Hello! My name is Kenny Dang, and I am currently a fourth year
            undergraduate student at Old Dominion University pursuing a degree
            in computer science. I am currently seeking a full-time software
            engineering position after graduation in Spring 2023. In the future,
            I hope to be a well-rounded software developer that provides real
            world solutions.
          </p>
          <br />
          <p>
            My hobbies and interest include playing video-games, watching anime,
            weightlifting, building computers and keyboards, and basically
            anything tech related.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
