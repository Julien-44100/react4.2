import PokemonCard from "./PokemonCard";

function App() {
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
  const pokemon = pokemonList[0];
  return (
    <>
      <section>
        <PokemonCard name={pokemon.name} />
      </section>
    </>
  );
}

export default App;
