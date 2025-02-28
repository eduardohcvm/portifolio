// src/app/landingpage/page.tsx

export default function LandingPage() {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Cabeçalho */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="text-xl font-bold text-blue-600">MinhaLogo</div>
            <div className="space-x-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Preços
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </div>
          </nav>
        </header>
  
        {/* Conteúdo Principal */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center py-20 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h1 className="text-5xl font-bold mb-4">Bem-vindo(a) à Minha Landing Page</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin at dui eu metus ullamcorper gravida. 
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors">
              Chamar para Ação
            </button>
          </section>
  
          {/* Seção de Features */}
          <section id="features" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Principais Recursos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Recurso 1</h3>
                  <p className="text-gray-600">
                    Descrição breve do recurso 1...
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Recurso 2</h3>
                  <p className="text-gray-600">
                    Descrição breve do recurso 2...
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Recurso 3</h3>
                  <p className="text-gray-600">
                    Descrição breve do recurso 3...
                  </p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Seção de Preços */}
          <section id="pricing" className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Planos e Preços</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Básico</h3>
                  <p className="text-2xl font-bold mb-4">R$ 49/mês</p>
                  <ul className="text-gray-600 mb-4 space-y-1">
                    <li>- Recurso A</li>
                    <li>- Recurso B</li>
                    <li>- Suporte via E-mail</li>
                  </ul>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Assinar
                  </button>
                </div>
  
                <div className="p-6 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Profissional</h3>
                  <p className="text-2xl font-bold mb-4">R$ 99/mês</p>
                  <ul className="text-gray-600 mb-4 space-y-1">
                    <li>- Recurso A</li>
                    <li>- Recurso B</li>
                    <li>- Recurso C</li>
                    <li>- Suporte 24/7</li>
                  </ul>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Assinar
                  </button>
                </div>
  
                <div className="p-6 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Premium</h3>
                  <p className="text-2xl font-bold mb-4">R$ 199/mês</p>
                  <ul className="text-gray-600 mb-4 space-y-1">
                    <li>- Todos os recursos</li>
                    <li>- Suporte VIP</li>
                  </ul>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Assinar
                  </button>
                </div>
              </div>
            </div>
          </section>
  
          {/* Seção de Contato */}
          <section id="contato" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Entre em Contato</h2>
              <p className="text-gray-600 mb-8">
                Tem alguma dúvida ou precisa de ajuda? Fale conosco!
              </p>
              <a
                href="mailto:exemplo@seudominio.com"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Enviar E-mail
              </a>
            </div>
          </section>
        </main>
  
        {/* Rodapé */}
        <footer className="bg-white py-4 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    );
  }
  