import React from "react";
import benchPic from "../assets/bench-photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCpu, BsJoystick, BsKeyboard } from "react-icons/bs";

const About = () => {
  const iconFormat = "w-12 h-12 mb-2";
  const iconLayout = "flex flex-col items-center align-top px-8";

  return (
    <div
      name="about"
      className="max-w-screen-lg py-68 mx-auto flex flex-col justify-center w-full h-full align-center"
    >
      <div name="body-text">
        <h1 className="flex justify-center items-center uppercase text-title font-250 p-8">
          A Little Bit About Me
        </h1>

        <div className="flex justify-center items-center">
          <img src={benchPic} alt="Photo Icon" className="w-44 rounded-full" />
        </div>

        <div
          name="about-me"
          className="flex flex-col justify-center items-center text-center my-10 mx-48 leading-7 text-base font-body"
        >
          <text>
            Hello! My name is Kenny Dang, and I am currently a fourth year
            undergraduate student at Old Dominion University pursuing a degree
            in computer science. I am currently seeking a full-time software
            engineering position after graduation in Spring 2023. In the future,
            I hope to be a well-rounded software developer that provides real
            world solutions.
          </text>
          <br />
          <text className="pb-0">
            My hobbies and interest include playing video-games, watching anime,
            weightlifting, building computers and keyboards, and basically
            anything tech related.
          </text>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="align-center p-6 h-48 w-634 font-body font-thin bg-summaryGray">
            <h3 className="flex justify-center uppercase mb-10 text-summary font-250">
              Summary:
            </h3>
            <div className="flex flex-row justify-between">
              <div className={iconLayout}>
                <div className="inline-block">
                  <BsKeyboard className={iconFormat} />
                </div>
                <h5 className="text-iconLabel font-250">Web Developer</h5>
              </div>
              <div className={iconLayout}>
                <div className="inline-block">
                  <BsCpu className={iconFormat} />
                </div>
                <h5 className="text-iconLabel font-250">Tech Enthusiast</h5>
              </div>
              <div className={iconLayout}>
                <div className="inline-block">
                  <BsJoystick className={iconFormat} />
                </div>
                <h5 className="text-iconLabel font-250">Video Games</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;