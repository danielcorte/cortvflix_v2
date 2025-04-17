import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner';
import ContentRow from '../components/ContentRow';
import SideNav from '../components/SideNav';
import {
  fetchTrending,
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchTopRated,
  fetchUpcoming,
  searchContent
} from '../api/tmdb';
import { useProfile } from './ProfileContext';
import { useNavigate } from 'react-router-dom';

export default function SearchResults() {
  const { currentProfile } = useProfile();
  const navigate = useNavigate();

  const [trending, setTrending] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentProfile) {
      navigate('/');
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const [trendingData, moviesData, tvData, topRatedData, upcomingData] = await Promise.all([
          fetchTrending(),
          fetchPopularMovies(),
          fetchPopularTVShows(),
          fetchTopRated(),
          fetchUpcoming()
        ]);

        setTrending(trendingData.results);
        setPopularMovies(moviesData.results);
        setPopularTVShows(tvData.results);
        setTopRated(topRatedData.results);
        setUpcoming(upcomingData.results);
      } catch (err) {
        setError('Erro ao carregar conteúdo. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentProfile, navigate]);
  
  if (!currentProfile) {
    return null; // Evita renderização indesejada
  }

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    try {
      const data = await searchContent(query);
      setSearchResults(data.results);
    } catch (err) {
      setError('Erro na pesquisa. Por favor, tente novamente.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-600 text-2xl">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar onSearch={handleSearch} currentProfile={currentProfile} />
      <SideNav />
      
      <div className="pl-16">
        {!searchResults && trending.length > 0 && (
          <HeroBanner content={trending} />
        )}

        <div className="pt-4">
          {searchResults ? (
            <ContentRow title="Resultados da Pesquisa" items={searchResults} />
          ) : (
            <>
              <h1 className='flex items-center justify-center text-2xl pb-5'>Pesquise pelo seus Filmes/Series preferidos na barra de pesquisa</h1>
              <h2 className='flex items-center justify-center text-xl'>Sim, a barra de pesquisa funciona</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
