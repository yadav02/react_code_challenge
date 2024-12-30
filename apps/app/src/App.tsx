import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "./store/pokemonSlice";
import { RootState } from "./store/store";
import List from "./List";

const App = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        dispatch(setPokemonList(data.results));
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemon();
  }, [dispatch]);

  return <List pokemon={pokemonList} />;
};

export default App;
