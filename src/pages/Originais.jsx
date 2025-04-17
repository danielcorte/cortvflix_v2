import { useState, useEffect } from 'react';
import { fetchOriginals } from '../api/tmdb';
import ContentRow from '../components/ContentRow';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import { useProfile } from './ProfileContext';

export default function Movies() {
  const [originals, setOriginals] = useState([]);
  const [loading, setLoading] = useState(true);
    const { currentProfile } = useProfile();

  useEffect(() => {

    const load = async () => {
      const data = await fetchOriginals();
      setOriginals(data.results);
      setLoading(false);
    };
    load();
  }, [currentProfile]);

if (!currentProfile) {
    return null; // Evita renderização indesejada
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentProfile={currentProfile} />
      <SideNav />
      <div className="pl-16 pt-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Filmes Populares</h1>
        {loading ? (
          <div className="text-red-600">Carregando...</div>
        ) : (
              <div className="flex flex-wrap gap-4 pl-60">
                  {originals.map((item, index) => (
                      <div key={index} className="w-1/4">
                          <ContentRow title={item.title} items={[item]} hideArrows />
                      </div>
                  ))}
              </div>
        )}
      </div>
    </div>
  );
}
