import { useState } from "react";
import PokemonCard from "./PokemonCard.tsx";
import NavBar from "./NavBar.tsx";
import { useEffect } from "react";

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
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <>
      <section>
        <div>
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <p>{pokemonIndex}</p>
          <NavBar
            pokemonIndex={pokemonIndex}
            setPokemonIndex={setPokemonIndex}
            pokemonList={pokemonList}
          />
        </div>
      </section>
    </>
  );
}

export default App;
