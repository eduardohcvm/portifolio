"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão do menu hambúrguer */}
      <button
        className="fixed left-4 top-4 z-50 flex flex-col items-center justify-center p-2 bg-black rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontFamily: 'Helvetica, sans-serif' }}
      >
        <div className="w-6 h-0.5 bg-white my-1"></div>
        <div className="w-6 h-0.5 bg-white my-1"></div>
        <div className="w-6 h-0.5 bg-white my-1"></div>
      </button>

      {/* Painel lateral que expande */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40`}
        style={{ fontFamily: 'Helvetica, sans-serif' }}
      >
        <div className="p-4">
          {/* Botão para fechar o menu */}
          <button
            className="mb-12 focus:outline-none text-white"
            onClick={() => setIsOpen(false)}
          >
            
          </button>
          {/* Seção de Identidade */}
          <div className="mb-4 justify-center flex">
            <Link href={"/"} className="flex items-center border margin-auto border-8px rounded-full p-6">
            <span className="glow-letter text-4xl inline-block mr-1">E</span>
            <span className="glow-letter text-4xl inline-block">H</span>
            </Link>          
          </div>
          <div className="mb-6">
            <h2 className="text-xl">Eduardo Henrique</h2>
            <p className="text-sm text-gray-400">desenvolvedor web</p>
          </div>
          {/* Itens de Navegação */}
          <nav className="flex flex-col space-y-4">
            <Link href="/sobreMim" className="hover:text-gray-300 border-b">
              Sobre Mim
            </Link>
            <Link href="/minhasSkills" className="hover:text-gray-300 border-b">
              Minhas Skills
            </Link>
            <Link href="/trabalho" className="hover:text-gray-300 border-b">
              Trabalho
            </Link>
            <Link href="/contato" className="hover:text-gray-300 border-b">
              Contato
            </Link>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .glow-letter {
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 12px #ff0080, 0 0 24px #ff0080;
          }
          50% {
            text-shadow: 0 0 24px #8000ff, 0 0 48px #8000ff;
          }
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;
