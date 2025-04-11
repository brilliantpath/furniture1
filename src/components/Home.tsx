import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Menu, User, X } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    const searchQuery = (document.getElementById('search') as HTMLInputElement).value;
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center">
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
              <h1 className="text-2xl font-bold text-blue-600 ml-2 lg:ml-0">Brilliant Path</h1>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#kitchen" className="text-gray-600 hover:text-blue-600 transition-colors">Cozinha</a>
              <a href="#living-room" className="text-gray-600 hover:text-blue-600 transition-colors">Sala de Estar</a>
              <a href="#toilet" className="text-gray-600 hover:text-blue-600 transition-colors">Banheiro</a>
              <a href="#bedroom" className="text-gray-600 hover:text-blue-600 transition-colors">Quarto</a>
              <a href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
            </div>

            <div className="flex items-center">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100">
              <nav className="px-4 py-2">
                <div className="space-y-2">
                  <a href="#kitchen" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    Cozinha
                  </a>
                  <a href="#living-room" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    Sala de Estar
                  </a>
                  <a href="#toilet" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    Banheiro
                  </a>
                  <a href="#bedroom" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    Quarto
                  </a>
                  <a href="#blog" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    Blog
                  </a>
                  <hr className="my-2 border-gray-100" />
                  <a href="#contact" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    Contato
                  </a>
                  <a href="#about" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                    Sobre Nós
                  </a>
                </div>
              </nav>
            </div>
          )}

          <div className="px-4 pb-4">
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="O que você quer comprar?"
                className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={handleKeyPress}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="relative h-[600px] mb-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
              alt="Interior design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold mb-6">Transforme sua casa em um lar dos sonhos</h2>
              <p className="text-xl mb-8">Descubra as melhores soluções em decoração e móveis para criar ambientes únicos e acolhedores.</p>
              <a href="#categories" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Explorar Categorias
              </a>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Categorias em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Cozinha', 'Sala de Estar', 'Banheiro', 'Quarto'].map((category, index) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(' ', '-')}`}
                className="group relative h-64 overflow-hidden rounded-lg"
              >
                <img
                  src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{category}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={`https://images.unsplash.com/photo-${item}?auto=format&fit=crop&q=80`}
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Produto {item}</h3>
                  <p className="text-gray-600 mb-4">Descrição breve do produto {item}</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <article key={post} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${post + 10}?auto=format&fit=crop&q=80`}
                  alt={`Blog post ${post}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Dicas de Decoração {post}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Ler mais →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="bg-gray-100 py-16 mb-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Depoimentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((review) => (
                <div key={review} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <img
                      src={`https://i.pravatar.cc/40?img=${review}`}
                      alt={`Cliente ${review}`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <h4 className="font-semibold">Cliente {review}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Excelente experiência de compra! Os produtos são de alta qualidade e o atendimento foi excepcional."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-7xl mx-auto px-4 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">📍</span> Rua da Criatividade, 123 - São Paulo, SP
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">📞</span> +55 11 1234-5678
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">✉️</span> contato@brilliantpath.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Brilliant Path é sua parceira na criação de ambientes únicos e acolhedores.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categorias</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cozinha</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sala de Estar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Banheiro</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quarto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Receba nossas novidades e ofertas exclusivas.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Assinar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Brilliant Path. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;