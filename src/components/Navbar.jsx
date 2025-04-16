import { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Navbar({ onSearch, currentProfile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 0);
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-2xl font-bold">CorTVflix</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Títulos, pessoas, gêneros"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-black/40 text-white placeholder-gray-400 px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </form>
            
            <button className="text-white hover:text-gray-300 transition">
              <Bell className="w-6 h-6" />
            </button>
            
            <div className="relative group">
              <button className="flex items-center space-x-2">
                {currentProfile?.avatar ? (
                  <img
                    src={currentProfile.avatar}
                    alt={currentProfile.name}
                    className="w-8 h-8 rounded"
                  />
                ) : (
                  <User className="w-8 h-8 text-gray-400" />
                )}
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-black/95 rounded shadow-lg py-2 invisible group-hover:visible">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">
                  Perfil
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">
                  Conta
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">
                  Sair
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}