"use client";
import React, { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "../sandwichMenu";

export default function MinhasSkills() {
  // Armazena as últimas 3 skills clicadas (a 0 é a mais recente)
  const [recentSkills, setRecentSkills] = useState([]);

  // Array de todas as skills disponíveis
  const skills = [
    {
      name: "React",
      description:
        "Biblioteca JavaScript para construção de interfaces de usuário de forma reativa.",
      experience: "2 anos de experiência construindo SPAs e aplicações corporativas.",
      image: "/react.png",
    },
    {
      name: "Node",
      description:
        "Runtime JavaScript que permite construir aplicações escaláveis no lado do servidor.",
      experience: "2 anos de experiência criando APIs REST e serviços em tempo real.",
      image: "/node.png",
    },
    {
      name: "Django",
      description:
        "Framework web em Python que segue o padrão MTV e facilita o desenvolvimento rápido.",
      experience: "1 ano de experiência criando aplicações web robustas.",
      image: "/django.png",
    },
    {
      name: "Python",
      description:
        "Linguagem versátil, usada em data science, web, automação e muito mais.",
      experience: "3 anos de experiência, incluindo data science e web development.",
      image: "/python.png",
    },
    {
      name: "ESL",
      description:
        "ESL pode se referir a várias tecnologias (ex.: ESLint). Ajuste conforme necessidade.",
      experience: "Experiência variada, dependendo do contexto do ESL.",
      image: "/esl.png",
    },
    {
      name: "Typescript",
      description:
        "Superset do JavaScript que adiciona tipagem estática, facilitando manutenção e escalabilidade.",
      experience: "1 ano de experiência em projetos front e backend.",
      image: "/typescript.png",
    },
    {
      name: "Javascript",
      description:
        "Linguagem de programação para web, utilizada tanto no front quanto no backend.",
      experience: "3 anos de experiência com diversos frameworks e bibliotecas.",
      image: "/javascript.png",
    },
    {
      name: "Tailwind",
      description:
        "Framework CSS utilitário para criação de interfaces modernas e responsivas.",
      experience: "1 ano de experiência desenvolvendo layouts customizados.",
      image: "/tailwind.png",
    },
    {
      name: "Html",
      description: "Linguagem de marcação base para a estruturação de páginas web.",
      experience: "3 anos de experiência criando sites e aplicações web.",
      image: "/html.png",
    },
    {
      name: "Css",
      description:
        "Linguagem de estilos utilizada para definir aparência e layout de páginas web.",
      experience: "3 anos de experiência em estilização, animações e responsividade.",
      image: "/css.png",
    },
  ];

  // Ao clicar numa skill, colocamos ela no topo do array recentSkills
  // (mantendo no máximo 3 elementos).
  const handleSkillClick = (skill) => {
    setRecentSkills((prev) => {
      // Remove se já existir no array, para evitar duplicação
      const filtered = prev.filter((s) => s.name !== skill.name);
      // Coloca a skill no início do array
      filtered.unshift(skill);
      // Mantém no máximo 3
      return filtered.slice(0, 3);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white">
      <HamburgerMenu />

      {/* Conteúdo principal */}
      <div className="flex items-start justify-center min-h-screen p-6">
        {/* Coluna de Ícones (Centro) */}
        <div className="w-2/3 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Minhas Skills</h1>

          {/* Grid de ícones */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => handleSkillClick(skill)}
                className={`
                  relative w-16 h-16 bg-gray-700 bg-opacity-30
                  rounded-md flex items-center justify-center
                  transition-transform duration-300 hover:scale-105
                `}
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Coluna com a pilha das 3 últimas skills */}
        <div className="w-1/3 ml-4 relative min-h-[300px]">
          {recentSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={`
                absolute p-4 w-64 bg-gray-700 bg-opacity-30 rounded-md
                animate-fadeIn shadow-lg transition-all duration-300
              `}
              style={{
                // Cada card fica levemente deslocado (i=0 é o topo)
                top: `${i * 1.5}rem`,
                left: `${i * 1.5}rem`,
                zIndex: 10 - i,
              }}
            >
              <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
              <p className="text-sm mb-1">{skill.description}</p>
              <p className="text-xs text-gray-300 italic">{skill.experience}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Animação de entrada (fade + slide suave) */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
