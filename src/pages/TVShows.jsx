import { useState, useEffect } from 'react';
import { fetchPopularTVShows } from '../api/tmdb';
import ContentRow from '../components/ContentRow';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';

export default function TVShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchPopularTVShows();
      setShows(data.results);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <SideNav />
      <div className="pl-16 pt-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Séries Populares</h1>
        {loading ? (
          <div className="text-red-600">Carregando...</div>
        ) : (
              <div className="flex flex-wrap gap-4 pl-60">
                  {shows.map((item, index) => (
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
