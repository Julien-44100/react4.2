import PokemonCard from "./PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = () => {
    setPokemonIndex(pokemonIndex);
    console.log(pokemonList);
  };

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      <div>
        <button onClick={handleClick}>{pokemonIndex}précédant</button>

        <button onClick={handleClick}>{pokemonIndex}suivant</button>
      </div>
      <section>
        <PokemonCard pokemon={pokemonList[1]} />
      </section>
    </>
  );
}
export default App;
