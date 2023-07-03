import React from "react";
import ProjectCard from "../ProjectCard";
import nutr from "../../assets/nutr..png";
import express from "../../assets/express.png";
import map from "../../assets/map.png";
import Booking from "../../assets/booking.png";
import Chat from "../../assets/chat-app.png";
import Crypto from "../../assets/crypto.png";
import Netflix from "../../assets/netflix.png";
import Admin from "../../assets/admin.png";

const Projects = () => {
  return (
    <div className="px-96 h-full">
      <span className="uppercase">My Work</span>
      <br />
      <span className="text-6xl font-extrabold">Projects</span>
      <br />
      <br />
      <div className="w-3/4">
        <span>
          {" "}
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </span>
      </div>
      <br />
      <br />
      <div className="flex gap-8 w-full h-full flex-wrap m-5">
        <ProjectCard
          img={nutr}
          title="Nutrition"
          description="It covers a wide range of topics, including macronutrients, micronutrients, dietary guidelines, dietary trends, and debunking common nutrition myths."
          tags="#react #tailwind"
          githublink="https://github.com/punit-mistry/Nutrition-website"
        />
        <ProjectCard
          img={express}
          title="Express Builder"
          description="An Express app is a web application built using the Express.js framework, which is a popular web application framework for Node.js."
          tags="#react #scss #tailwind"
          githublink='https://github.com/punit-mistry/Express_builder_app'
        />
        <ProjectCard
          img={Admin}
          title="Admin Dashboard"
          description="
An admin dashboard is a web-based interface that provides administrative functionality and tools for managing and monitoring a system or application. "
          tags="#react #scss #tailwind"
          githublink=''
        />
        <ProjectCard
          img={Chat}
          title="Chat App"
          description="A chat app allows users to exchange messages in real-time, enabling communication and collaboration."
          tags="#react #scss #tailwind"
          githublink='https://github.com/punit-mistry/chat-app'
        />
        <ProjectCard
          img={'https://static.whatsapp.net/rsrc.php/v3/yI/r/dmsjl8aYsry.png'}
          title="WhatsApp Bot"
          description="WhatsApp bot using Node.js involves integrating with the WhatsApp Business API and implementing the desired bot functionality."
          tags="#react #scss #tailwind"
        />
        <ProjectCard
          img={Booking}
          title="Slot Booking"
          description="Implementing slot booking functionality through a WhatsApp bot involves integrating with the WhatsApp Business API and designing a system to manage and allocate slots."
          tags="#react #scss #tailwind"
        />
        <ProjectCard
          img={map}
          title="Route Map"
          description="Route calculation involves determining the optimal path or directions between two or more locations. It is commonly used in navigation systems, mapping applications, or any scenario where you need to find the most efficient route from a starting point to a destination."
          tags="#react #scss #tailwind"
        />
        <ProjectCard
          img={Crypto}
          title="Cyrpto World"
          description="It encompasses various aspects, including cryptocurrencies, blockchain networks, decentralized finance (DeFi), non-fungible tokens (NFTs), and crypto exchanges."
          tags="#react #scss #tailwind"
          githublink='https://github.com/punit-mistry/coinbase_react'
        />
        <ProjectCard
          img={Netflix}
          title="Netflix Clone"
          description="A Netflix clone is a website or application that emulates the functionalities and features of the popular streaming platform Netflix."
          tags="#react #scss #tailwind"
          githublink='https://github.com/punit-mistry/Netflix_react '
        />
      </div>
    </div>

  );
};

export default Projects;
