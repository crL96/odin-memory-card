import './App.css';
import PokemonList from './components/PokemonList';
import ScoreBoard from './components/ScoreBoard';
import {useState } from 'react';


function App() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [highScore, setHighScore] = useState(0);

  function newRound() {
    if (selectedPokemons.length > highScore) {
        setHighScore(selectedPokemons.length);
    }
    setSelectedPokemons([]);
}

  function handleClick(e) {
    if (selectedPokemons.includes(e.target.parentNode.id)) {
        newRound();
        return;
    }
    setSelectedPokemons([ ...selectedPokemons, e.target.parentNode.id])
    }

  return (
    <>
      <ScoreBoard currentScore={selectedPokemons.length} highScore={highScore}/>
      <PokemonList currentScore={selectedPokemons.length} handleClick={handleClick}/>
    </>
  );
}

export default App;