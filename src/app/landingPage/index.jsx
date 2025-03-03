"use client";
import React, { useState } from 'react';
import HamburgerMenu from '../sandwichMenu';

const LandingPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <HamburgerMenu />
      <div 
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-gray-800 text-white"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        <h1 
          className={`text-6xl transition-transform duration-500 cursor-pointer ${hovered ? "scale-105" : "scale-100"}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Olá, sou{" "}
          <span className="glow-letter text-8xl inline-block">E</span>duardo{" "}
          <span className="glow-letter text-8xl inline-block">H</span>enrique,
          <br /> desenvolvedor Web full-stack
        </h1>
        
        <p className="mt-32 text-lg text-center max-w-2xl">
          Bem-vindo ao meu portfólio! Aqui você encontrará meus projetos, habilidades e experiências que me definem como desenvolvedor.
        </p>

        <button className="mt-8 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-300">
          Veja meus projetos
        </button>

        <style jsx>{`
          .glow-letter {
            animation: glow 2s ease-in-out infinite;
          }
          @keyframes glow {
            0%, 100% {
              text-shadow: 0 0 8px #ff0080, 0 0 16px #ff0080;
            }
            50% {
              text-shadow: 0 0 46px #8000ff, 0 0 82px #8000ff;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default LandingPage;
