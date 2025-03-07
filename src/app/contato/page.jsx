"use client";
import React, { useState } from "react";
import HamburgerMenu from "../sandwichMenu";

export default function Contato() {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    reason: "",
  });

  // Estado para mensagem de sucesso/erro
  const [statusMessage, setStatusMessage] = useState("");

  // Handler para atualizar campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Enviar formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Enviando...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage("E-mail enviado com sucesso!");
        // Limpar formulário
        setFormData({
          name: "",
          lastName: "",
          phone: "",
          email: "",
          reason: "",
        });
      } else {
        setStatusMessage("Falha ao enviar e-mail. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatusMessage("Erro ao enviar formulário.");
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white"
      style={{ fontFamily: "Helvetica, sans-serif" }}
    >
      {/* Menu lateral fixo */}
      <HamburgerMenu />

      <div className="flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-6">Contato</h1>

        {/* Suas informações de contato */}
        <div className="bg-gray-700 bg-opacity-30 p-4 rounded-md mb-8 max-w-md w-full">
          <h2 className="text-xl mb-2">Meus Contatos</h2>
          <p className="text-sm">
            <strong>E-mail:</strong> <a href="mailto:eduardohcvm@gmail.com" className="underline">eduardohcvm@gmail.com</a>
          </p>
          <p className="text-sm">
            <strong>Telefone:</strong> <a href="tel:+5583996896050" className="underline">+55 83 99689-6050</a>
          </p>
          <p className="text-sm">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/eduardohcvm/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              linkedin.com/in/eduardohcvm
            </a>
          </p>
          <p className="text-sm">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/eduardohcvm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              github.com/eduardohcvm
            </a>
          </p>
        </div>

        {/* Formulário de contato */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 bg-opacity-30 p-4 rounded-md max-w-md w-full"
        >
          <h2 className="text-2xl mb-4 font-serif">Se preferir, pode preencher o formulário e eu entrarei em contato</h2>
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Sobrenome"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
            <textarea
              name="reason"
              placeholder="Motivo do contato"
              value={formData.reason}
              onChange={handleChange}
              rows={4}
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-md transition-colors duration-300"
            >
              Enviar
            </button>
          </div>
          {statusMessage && (
            <p className="mt-4 text-sm">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
