import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';

interface SearchItem {
  name: string;
  link: string;
  image: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
}

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchItem[]>([]);

  const availableItems: SearchItem[] = [
    { 
      name: "Conjunto Moderno para Cozinha", 
      link: "https://amzn.to/3FX5t8s",
      image: "https://m.media-amazon.com/images/I/61AFXRTCuFL._AC_SX569_.jpg",
      description: "Conjunto completo com design contemporâneo, perfeito para cozinhas modernas",
      price: "R$ 1.299,90",
      rating: 4.5,
      reviews: 128
    },
    { 
      name: "Mesa de Jantar Extensível", 
      link: "https://amzn.to/42gNC3X",
      image: "https://m.media-amazon.com/images/I/81Adw6-1UiL._AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Mesa extensível em madeira maciça, ideal para reuniões em família",
      price: "R$ 2.499,90",
      rating: 4.8,
      reviews: 256
    },
    // Add more items as needed
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newQuery = formData.get('search') as string;
    setSearchParams({ q: newQuery });
  };

  useEffect(() => {
    const filteredItems = availableItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredItems);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Voltar</span>
            </Link>
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <input
                  type="search"
                  name="search"
                  defaultValue={query}
                  placeholder="O que você está procurando?"
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {results.length} resultados para "{query}"
          </h1>
        </div>
        
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h2>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(item.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({item.reviews})</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <SearchIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Nenhum resultado encontrado</h2>
            <p className="text-gray-600 mb-6">
              Não encontramos nenhum produto correspondente à sua busca.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar para página inicial
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default Search;