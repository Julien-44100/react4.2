interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const previous = () => setPokemonIndex(pokemonIndex - 1);

  const next = () => setPokemonIndex(pokemonIndex + 1);

  return (
    <nav>
      {pokemonIndex > 0 ? <button onClick={previous}>Précédant</button> : null}
      {pokemonIndex < pokemonList.length ? (
        <button onClick={next}>suivant</button>
      ) : null}
    </nav>
  );
}

export default NavBar;
