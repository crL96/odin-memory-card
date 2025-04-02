import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({currentScore, handleClick}) {
    const [indexOrder, setIndexOrder] = useState([10, 2, 6, 8, 5, 3, 12, 4, 9, 1, 11, 7]);
  
    useEffect(() => {
      setIndexOrder(indexOrder => indexOrder.sort(() => 0.5 - Math.random()))
    }, [currentScore]);
  
    const pokemons = [];
    for (let i = 0; i < 12; i++) {
      pokemons.push(<PokemonCard index={indexOrder[i]} key={indexOrder[i]} handleClick={handleClick}/>)
    }
  
    return (
      <div className="pokemonList">
        {pokemons}
      </div>
    );
  }