import { Home, TrendingUp, Film, Tv2, Clock, Heart, Star, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Início' },
    { icon: TrendingUp, label: 'Em Alta' },
    { icon: Film, label: 'Filmes' },
    <Link to="series"> icon: Tv2, label: 'Séries' </Link>,
    { icon: Clock, label: 'Minha Lista' },
    { icon: Heart, label: 'Favoritos' },
    { icon: Star, label: 'Originais' },
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
          <a
            key={index}
            href="#"
            className="w-full p-4 flex items-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            {isExpanded && (
              <span className="ml-4 whitespace-nowrap">{item.label}</span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
}