"use client";
import React, { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "../sandwichMenu";

export default function Trabalhos() {
  // Lista de projetos
  const projects = [
    {
      name: "Inovathys",
      description: `
        Projeto focado em desenvolvimento de aplicações escaláveis e eficientes, 
        utilizando React no frontend e Django Rest no backend. Interfaces responsivas, 
        integração de APIs robustas e otimização de desempenho.
      `,
      images: [
        "/images/inovathys1.png",
        "/images/inovathys2.png",
        "/images/inovathys3.png",
        "/images/inovathys4.png",
      ],
      technologies: [
        { name: "React", image: "/react.png" },
        { name: "Django", image: "/django.jpg" },
        { name: "Tailwind", image: "/tailwind.png" },
      ],
    },
    {
      name: "Mibe_soluções",
      description: `
        Plataforma voltada para soluções de gestão, 
        integrando serviços de backend e frontend em Node.js, 
        com foco em otimização de processos empresariais.
      `,
      images: [
        "/images/mibe1.png",
        "/images/mibe2.png",
        "/images/mibe3.png",
        "/images/mibe4.png",
      ],
      technologies: [
        { name: "Node", image: "/node.png" },
        { name: "React", image: "/react.png" },
        { name: "Css", image: "/css.png" },
      ],
    },
    {
      name: "Caju_fit",
      description: `
        Aplicativo para acompanhamento fitness, com dashboards 
        e métricas personalizadas, facilitando o controle de atividades físicas e dieta.
      `,
      images: [
        "/images/caju1.png",
        "/images/caju2.png",
        "/images/caju3.png",
        "/images/caju4.png",
      ],
      technologies: [
        { name: "Javascript", image: "/js_logo.png" },
        { name: "Tailwind", image: "/tailwind.png" },
        { name: "Html", image: "/html.png" },
      ],
    },
    {
      name: "Headers",
      description: `
        Sistema de gerenciamento de conteúdo e estrutura de cabeçalhos web, 
        facilitando a organização e padronização de sites e aplicativos.
      `,
      images: [
        "/images/headers1.png",
        "/images/headers2.png",
        "/images/headers3.png",
        "/images/headers4.png",
      ],
      technologies: [
        { name: "Typescript", image: "/ts_logo.png" },
        { name: "React", image: "/react.png" },
        { name: "Node", image: "/node.png" },
      ],
    },
    {
      name: "Identificador de Famosos",
      description: `
        Aplicação que identifica rostos de pessoas famosas em imagens, 
        utilizando Python e bibliotecas de Machine Learning/IA, 
        auxiliando em reconhecimento facial e classificação de imagens.
      `,
      images: [
        "/images/famosos1.png",
        "/images/famosos2.png",
        "/images/famosos3.png",
        "/images/famosos4.png",
      ],
      technologies: [
        { name: "Python", image: "/python.jpg" },
        { name: "Django", image: "/django.jpg" },
      ],
    },
  ];

  // Um estado para cada projeto controlar o slide atual
  // Se temos 5 projetos, criamos um array de 5 posições, cada uma iniciando em 0
  const [currentSlides, setCurrentSlides] = useState(projects.map(() => 0));

  // Função para ir ao slide anterior
  const handlePrev = (projIndex) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      const totalImages = projects[projIndex].images.length;
      newSlides[projIndex] = (prev[projIndex] - 1 + totalImages) % totalImages;
      return newSlides;
    });
  };

  // Função para ir ao slide seguinte
  const handleNext = (projIndex) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      const totalImages = projects[projIndex].images.length;
      newSlides[projIndex] = (prev[projIndex] + 1) % totalImages;
      return newSlides;
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white"
      style={{ fontFamily: "Helvetica, sans-serif" }}
    >
      {/* Menu fixo na lateral */}
      <HamburgerMenu />

      <div className="py-8 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Meus Trabalhos</h1>

        {projects.map((project, index) => (
          <div key={project.name} className="mb-12">
            {/* Carousel */}
            <div className="relative w-full h-64 bg-gray-700 bg-opacity-30 rounded-md overflow-hidden">
              <Image
                src={project.images[currentSlides[index]]}
                alt={`${project.name} slide`}
                fill
                className="object-cover"
              />

              {/* Botão anterior */}
              <button
                onClick={() => handlePrev(index)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
              >
                ◀
              </button>

              {/* Botão próximo */}
              <button
                onClick={() => handleNext(index)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
              >
                ▶
              </button>
            </div>

            {/* Card grande explicando o projeto */}
            <div className="bg-gray-700 bg-opacity-30 mt-4 p-6 rounded-md">
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="text-sm mb-4 whitespace-pre-line">{project.description}</p>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                {/* Lista de tecnologias */}
                <div className="md:w-2/3">
                  <h3 className="text-lg font-bold mb-2">Tecnologias Utilizadas:</h3>
                  <ul className="list-disc list-inside text-sm">
                    {project.technologies.map((tech) => (
                      <li key={tech.name} className="mb-1">
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card com as fotos das tecnologias (com RGB glow) */}
                <div className="mt-4 md:mt-0 md:w-1/3 md:ml-4 p-3 rounded-md rainbow-border">
                  <h4 className="text-md font-semibold mb-2">Ícones das Stacks</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="relative w-16 h-16 bg-gray-600 rounded-md overflow-hidden"
                      >
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS para o RGB glow ao redor do card */}
      <style jsx>{`
        .rainbow-border {
          position: relative;
          animation: rgbGlow 2s linear infinite;
        }

        @keyframes rgbGlow {
          0% {
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.7);
          }
          25% {
            box-shadow: 0 0 10px rgba(223, 10, 10, 0.27), 0 0 20px rgba(219, 23, 16, 0.7);
          }
          50% {
            box-shadow: 0 0 10px rgba(0, 0, 255, 0.7), 0 0 20px rgba(0, 0, 255, 0.7);
          }
          75% {
            box-shadow: 0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.7);
          }
          100% {
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.7);
          }
        }
      `}</style>
    </div>
  );
}
