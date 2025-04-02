import { useEffect, useState } from "react";

function PokemonCard({index, handleClick}) {
    const [pokemon, setPokemon] = useState({});
    
    useEffect(() => {
        (async function () {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+index);
            const pokemonObj = await response.json();
            setPokemon({
                name: pokemonObj.name.toUpperCase(),
                id: pokemonObj.id,
                imgUrl: pokemonObj.sprites.other["official-artwork"].front_default
            });
        })();

    }, [index]);


    return (
        <button className="pokemon" id={pokemon.id} onClick={handleClick}>
            <img src={pokemon.imgUrl} alt="" />
            <h2>{pokemon.name}</h2>
        </button>
    );
}

export default PokemonCard;