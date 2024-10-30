import { useState } from "react";
import PokemonCard from "./PokemonCard.tsx";
import NavBar from "./NavBar.tsx";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },

    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },

    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },

    {
      name: "mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPos = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleClickNeg = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <>
      <nav></nav>

      <section>
        <div>
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <p>{pokemonIndex}</p>
          <NavBar
            pokemonIndex={pokemonIndex}
            setPokemonIndex={setPokemonIndex}
            pokemonList={pokemonList}
            handleClickNeg={handleClickNeg}
            handleClickPos={handleClickPos}
          />
        </div>
      </section>
    </>
  );
}

export default App;
