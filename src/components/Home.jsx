import React from "react";
import heroImage from "../assets/mountain.jpg";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="">
      <div
        name="hero"
        className="flex items-center justify-center h-9xl bg-fixed bg-center bg-cover bg-hero pt-4"
      >
        <div className="flex flex-col uppercase absolute items-center font-light">
          <h1 className="text-6xl	text-white tracking-0.08 pb-8">
            Hi, I'm Kenny
          </h1>
          <p class="capitalize text-white pb-8">
            Software Engineer &amp; Web Developer
          </p>
          <a href="#about">
            <FaChevronDown className="text-white font-extrabold" />
          </a>
        </div>
      </div>

      <div
        name="#about"
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div>
          <h2>I'm a Front-End Developer</h2>
          <p>
            Hello! My name is Kenny Dang and I am currently a fourth year
            undergraduate student at
            <a href="https://www.odu.edu/" target="_blank">
              Old Dominion University
            </a>
            pursuing a degree in computer science. I am currently seeking a
            full-time software engineer/front-end job after graduation in Spring
            2023. In the future, I hope to be a software developer that solves
            real world problems or a web-developer that creates creative
            websites.
          </p>
          <div>
            <button>
              Portfolio
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
