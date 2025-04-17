import { Home, TrendingUp, Film, Tv2, Clock, Heart, Star, Menu, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Início', to: '/' },
    { icon: Search, label: 'Pesquisar', to: '/pesquisar' },
    { icon: TrendingUp, label: 'Em Alta', to: '/em-alta' },
    { icon: Film, label: 'Filmes', to: '/filmes' },
    { icon: Tv2, label: 'Séries', to: '/series' },
    { icon: Clock, label: 'Em breve', to: '/em-breve' },
    { icon: Heart, label: 'Favoritos', to: '/favoritos' },
    { icon: Star, label: 'Originais', to: '/originais' },
  ];
  

  return (
    <div
      className={`fixed left-0 top-16 h-screen bg-black/95 transition-all duration-300 z-40
        ${isExpanded ? 'w-64' : 'w-16'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <button
        className="w-full p-4 flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <Menu className="w-6 h-6" />
        {isExpanded && <span className="ml-4">Menu</span>}
      </button>
      
      <nav className="mt-4">
  {menuItems.map((item, index) => (
    <Link
      to={item.to}
      key={index}
      className="w-full p-4 flex items-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
    >
      <item.icon className="w-6 h-6 flex-shrink-0" />
      {isExpanded && (
        <span className="ml-4 whitespace-nowrap">{item.label}</span>
      )}
    </Link>
  ))}
</nav>
    </div>
  );
}