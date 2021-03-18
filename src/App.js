import React, { useState, useEffect } from "react";
import PokemonList from "./features/PokemonList";
import Pagination from "./features/Pagination";
//test
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(currentPageUrl).then(res => res.json())
      .then(data => {
        setLoading(false)
        setNextPageUrl(data.next)
        setPrevPageUrl(data.previous)
        setNextPageUrl("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        setPokemon(data.results.map(p => p.name))
      })
  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPrevtPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return <h1>"Loading"</h1>;

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevtPage : null} />
    </div>
  );
}

export default App;
