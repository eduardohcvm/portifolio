"use client";
import React, { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "../sandwichMenu";

export default function MinhasSkills() {
  // Armazena as últimas 3 skills clicadas (a 0 é a mais recente)
  const [recentSkills, setRecentSkills] = useState([]);

  // Armazena o nome da skill que está ampliada (se houver)
  const [expandedSkillName, setExpandedSkillName] = useState(null);

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
      image: "/django.jpg",
    },
    {
      name: "Python",
      description:
        "Linguagem versátil, usada em data science, web, automação e muito mais.",
      experience: "3 anos de experiência, incluindo data science e web development.",
      image: "/python.jpg",
    },
    {
      name: "Typescript",
      description:
        "Superset do JavaScript que adiciona tipagem estática, facilitando manutenção e escalabilidade.",
      experience: "1 ano de experiência em projetos front-end.",
      image: "/ts_logo.png",
    },
    {
      name: "Javascript",
      description:
        "Linguagem de programação para web, utilizada tanto no front quanto no backend.",
      experience: "3 anos de experiência com diversos frameworks e bibliotecas.",
      image: "/js_logo.png",
    },
    {
      name: "Tailwind",
      description:
        "Framework CSS utilitário para criação de interfaces modernas e responsivas.",
      experience: "1 ano de experiência desenvolvendo layouts customizados.",
      image: "/tailwind.png",
    },
    {
      name: "Html 5",
      description: "Linguagem de marcação base para a estruturação de páginas web.",
      experience: "3 anos de experiência criando sites e aplicações web.",
      image: "/html.png",
    },
    {
      name: "Css 3",
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

  // Limpa todos os cards da pilha
  const handleClearAll = () => {
    setRecentSkills([]);
    setExpandedSkillName(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white">
      <HamburgerMenu />

      {/* Conteúdo principal */}
      <div className="flex items-start justify-center min-h-screen p-6">
        
        {/* Coluna de Ícones (Centro) */}
        <div className="w-2/3 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Minhas Skills Técnicas</h1>

          {/* Grid de ícones */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => handleSkillClick(skill)}
                className={`
                  relative w-32 h-32 bg-gray-700 bg-opacity-30
                  rounded-md overflow-hidden
                  transition-transform duration-300 hover:scale-105
                `}
              >
                {/* Imagem preenche todo o card */}
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Coluna com a pilha das 3 últimas skills */}
        <div className="w-1/3 ml-4 relative min-h-[300px]">
          {/* Botão "X" vermelho para limpar todos os cards */}
          {recentSkills.length > 0 && (
            <button
              onClick={handleClearAll}
              className={`
                absolute top-0 right-0 bg-red-600 text-white p-2
                rounded-full shadow-lg z-50 hover:bg-red-500
              `}
            >
              X
            </button>
          )}

          {recentSkills.map((skill, i) => {
            // Verifica se este card é o do topo (i === 0)
            const isTopCard = i === 0;
            // Verifica se este card está ampliado
            const isExpanded = skill.name === expandedSkillName;

            return (
              <div
                key={skill.name}
                className={`
                  absolute p-4 bg-gray-700 bg-opacity-30 rounded-md
                  animate-fadeIn shadow-lg transition-all duration-300
                  ${isExpanded ? "w-80" : "w-64"}
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

                {/* Botão para ampliar ou voltar ao normal (somente no card do topo) */}
                {isTopCard && (
                  <button
                    onClick={() => {
                      if (isExpanded) {
                        // Se já está expandido, volta ao normal
                        setExpandedSkillName(null);
                      } else {
                        // Expande o card
                        setExpandedSkillName(skill.name);
                      }
                    }}
                    className="mt-2 bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded"
                  >
                    {isExpanded ? "Voltar" : "Ampliar"}
                  </button>
                )}
              </div>
            );
          })}
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
