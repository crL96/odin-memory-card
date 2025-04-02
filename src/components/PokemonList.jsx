import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({selectedPokemons, handleClick}) {
    const [indexOrder, setIndexOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  
    useEffect(() => {
      setIndexOrder(indexOrder => indexOrder.sort(() => 0.5 - Math.random()))
    }, [selectedPokemons.length]);
  
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