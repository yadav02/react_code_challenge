import React from "react";
import { useDispatch } from "react-redux";
import { removePokemon } from "./store/pokemonSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./List.css";

interface Pokemon {
  name: string;
  url: string;
}

interface ListProps {
  pokemon: Pokemon[];
}

const List: React.FC<ListProps> = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
    toast.success(`${name} has been removed!`);
  };

  return (
    <>
      <ul className="pokemon-list">
        {pokemon.map((p, index) => (
          <li className="pokemon-item" key={index}>
            <span>{p.name}</span>
            <button className="remove-button" onClick={() => handleRemove(p.name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      {/* Place ToastContainer here */}
      <ToastContainer aria-label={undefined} />
    </>
  );
};

export default List;
