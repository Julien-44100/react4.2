interface PropsType {
  pokemon: {
    name: string;
    imgSrc: string;
  };
}

function Pokemoncard({ pokemon }: PropsType) {
  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
    </figure>
  );
}

export default Pokemoncard;
