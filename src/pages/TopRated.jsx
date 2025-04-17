import { useState, useEffect } from 'react';
import { fetchTopRated } from '../api/tmdb';
import ContentRow from '../components/ContentRow';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';

export default function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImageUrl = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchTopRated();
      setTopRated(data.results);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <SideNav />
        <div className="pl-16 pt-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Mais Bem Avaliados</h1>
            {loading ? (
            <div className="text-red-600">Carregando...</div>
            ) : (
            <div className="flex flex-wrap gap-4 pl-60">
                {topRated.map((item, index) => (
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
