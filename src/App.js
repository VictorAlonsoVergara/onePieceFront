import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { MoviesPage } from './pages/MoviesPage';
import { CharactersPage } from './pages/CharactersPage';
import { FullCharacterPage } from './pages/FullCharacterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MoviesPage/>}/>
        <Route path='/characters' element={<CharactersPage/>}/>
        <Route path='/fullCharacters' element={<FullCharacterPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
