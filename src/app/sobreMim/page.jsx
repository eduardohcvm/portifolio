"use client";
import React, { useState } from "react";
import HamburgerMenu from "../sandwichMenu";
import Image from "next/image";

const SobreMim = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white"
      style={{ fontFamily: "Helvetica, sans-serif" }}
    >
      {/* Menu fixo na lateral */}
      <HamburgerMenu />

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-center px-4 py-8 space-y-8">
        {/* Foto maior, centralizada e com animação de brilho */}
        <div
          className={`relative w-64 h-64 border-2 border-gray-300 rounded-md overflow-hidden photo-glow transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/foto_perfil.jpg" // Ajuste para o caminho real da sua foto
            alt="Foto de Eduardo Henrique"
            fill
            className="object-cover"
          />
        </div>

        {/* Título */}
        <h1 className="text-4xl font-mono">Sobre mim</h1>

        {/* Container de balões de texto */}
        <div className="flex flex-col space-y-4 max-w-2xl">
          {/* Balão 1 */}
          <div className="relative bg-gray-700 bg-opacity-30 p-6 rounded-md">
            <p className="text-2xl font-serif">
              Me chamo <strong>Eduardo Henrique</strong>, tenho 24 anos e sou de 
              João Pessoa, Paraíba. Estou terminando o curso de <strong>Ciência 
              da Computação na UNIPE</strong> e já cursei Engenharia da Computação 
              na UFPB.
            </p>
            <div
              className="absolute left-0 top-6 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8"
              style={{ borderRightColor: "rgba(75,85,99,0.3)" }}
            ></div>
          </div>

          {/* Balão 2 */}
          <div className="relative bg-gray-700 bg-opacity-30 p-6 rounded-md ">
            <p className="font-bold">
              Tive a oportunidade de atuar no <strong>Laboratório LUMO da UFPB</strong>, 
              criando dashboards e gráficos interativos utilizando <strong>Python, 
              Power BI e Grafana</strong>. Fui responsável pela manipulação, análise 
              e visualização de dados, desenvolvendo soluções personalizadas que 
              facilitaram a interpretação das informações e contribuíram para tomadas 
              de decisões estratégicas. Automatizei processos de análise e trabalhei 
              em colaboração com equipes multidisciplinares, entregando dashboards 
              que melhoraram a clareza dos dados e impulsionaram a eficiência nos 
              projetos do laboratório.
            </p>
            <div
              className="absolute left-0 top-6 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8"
              style={{ borderRightColor: "rgba(75,85,99,0.3)" }}
            ></div>
          </div>

          {/* Balão 3 */}
          <div className="relative bg-gray-700 bg-opacity-30 p-6 rounded-md font-helvetica">
            <p>
              Além disso, atuei como <strong>Desenvolvedor Web na Inovathys</strong>, 
              desenvolvendo aplicações escaláveis e eficientes, utilizando 
              <strong> React</strong> no frontend e <strong>Django Rest</strong> 
              no backend. Contribuí para a implementação de interfaces responsivas, 
              integração de APIs robustas e otimização do desempenho das aplicações, 
              garantindo uma experiência de usuário fluida e intuitiva. 
              As soluções entregues resultaram em melhorias significativas na usabilidade 
              e na satisfação dos clientes, fortalecendo o impacto dos projetos desenvolvidos.
            </p>
            <div
              className="absolute left-0 top-6 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8"
              style={{ borderRightColor: "rgba(75,85,99,0.3)" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Animação de brilho em vermelho/roxo */}
      <style jsx>{`
        .photo-glow {
          animation: photoGlow 2s ease-in-out infinite;
        }
        @keyframes photoGlow {
          0%, 100% {
            box-shadow: 0 0 20px #ff0080, 0 0 40px #ff0080;
          }
          50% {
            box-shadow: 0 0 40px #8000ff, 0 0 80px #8000ff;
          }
        }
      `}</style>
    </div>
  );
};

export default SobreMim;
