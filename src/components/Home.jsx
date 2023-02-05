import React from "react";
import heroImage from "../assets/mountain.jpg";
import { FaChevronDown } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    </div>
  );
};

export default Home;
