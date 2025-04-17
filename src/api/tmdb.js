const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const fetchTrending = async () => {
  const response = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  return response.json();
};

export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return response.json();
};

export const fetchPopularTVShows = async () => {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  return response.json();
};

export const fetchTopRated = async () => {
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  return response.json();
};

export const fetchUpcoming = async () => {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  return response.json();
};

export const searchContent = async (query) => {
  const response = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`);
  return response.json();
};

export const getImageUrl = (path, size = 'original') => {
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const fetchOriginals = async () => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`); // Exemplo para filmes da rede 'Netflix' (network ID: 213)
  return response.json();
};