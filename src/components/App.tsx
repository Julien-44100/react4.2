import PokemonCard from "./PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickInc = () => {
    setPokemonIndex(pokemonIndex + 1);
    console.log(pokemonList);
  };
  const handleClickDec = () => {
    setPokemonIndex(pokemonIndex - 1);
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
      {pokemonIndex > 0 ? (
        <button onClick={handleClickDec}>précédant</button>
      ) : (
        <></>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickInc}>suivant</button>
      ) : (
        <></>
      )}

      <section>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </section>
    </>
  );
}
export default App;
