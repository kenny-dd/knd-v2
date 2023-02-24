import React from "react";
import Card from "./components/Card";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "project 1",
      desc: "desc",
      demo: "link",
      code: "link2",
      tools: "nextjs",
    },
    {
      id: 1,
      title: "project 1",
      desc: "desc",
      demo: "link",
      code: "link2",
      tools: "nextjs",
    },
    {
      id: 1,
      title: "project 1",
      desc: "desc",
      demo: "link",
      code: "link2",
      tools: "nextjs",
    },
  ];

  return (
    <section name="projects">
      <div className="flex justify-center items-center uppercase text-title font-250 p-8 tracking-wider">
        What I've Done
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <Card
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="test"
        />
        <Card
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="test"
        />
        <Card
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="test"
        />
      </div>
    </section>
  );
}

export default Projects;
