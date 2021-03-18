import React from "react";

export default function PokemonList({ pokemon }) {


  return <div>
    {pokemon.map(p => (
      <div key={p}>
        <h3>{p}</h3>
      </div>
    ))}
  </div>;
}
