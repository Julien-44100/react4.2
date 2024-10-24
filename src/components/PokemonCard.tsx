interface PropsType {
  name: string;
}

function Pokemoncard(props: PropsType) {
  console.log(props);
  const pokemon = {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };
  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
    </figure>
  );
}

export default Pokemoncard;
