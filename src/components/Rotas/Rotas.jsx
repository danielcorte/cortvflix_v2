import { Routes, Route } from 'react-router-dom';
import Inicial from '../../pages/Inicial';
import Serie from '../../pages/serie';
import SelectProfile from '../../pages/Perfil';
import Movies from '../../pages/Movies';
import TopRated from '../../pages/TopRated';
import TVShows from '../../pages/TVShows';
import Upcoming from '../../pages/Upcoming';
import Originais from '../../pages/Originais';
import SearchResults from '../../pages/SearchResults';

export function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<SelectProfile />} />
      <Route path='/home' element={<Inicial />} />
      <Route path='/pesquisar' element={<SearchResults />} />
      <Route path='/em-alta' element={<TopRated />} />
      <Route path='/filmes' element={<Movies />} />
      <Route path='/series' element={<TVShows />} />
      <Route path='/em-breve' element={<Upcoming />} />
      <Route path='/originais' element={<Originais />} />
      <Route path='/favoritos' element={<Inicial />} />
    </Routes>
  );
}