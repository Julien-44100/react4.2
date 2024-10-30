interface pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: pokemon[];
  handleClickPos?: () => void;
  handleClickNeg?: () => void;
  pokemonIndex: Number;
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  return (
    <>
      {pokemonList.map((El, index) => {
        return (
          <button
            key={El.name}
            onClick={() => {
              setPokemonIndex(index);
            }}
          >
            {El.name}
          </button>
        );
      })}
    </>
  );
}

export default NavBar;
