import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { MoviesPage } from './pages/MoviesPage';
import { CharactersPage } from './pages/CharactersPage';
import { FullCharacterPage } from './pages/FullCharacterPage';
import { OnePieceContext } from './context/OnePieceContext';

function App() {
  return (
    <div className="App">
      <OnePieceContext>
        <Routes>
          <Route path='/' element={<MoviesPage/>}/>
          <Route path='/characters/:id' element={<CharactersPage/>}/>
          <Route path='/fullCharacters/:id' element={<FullCharacterPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </OnePieceContext>
    </div>
  );
}

export default App;
