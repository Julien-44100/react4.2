interface PropsType {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: PropsType) {
  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
    </figure>
  );
}

export default PokemonCard;
