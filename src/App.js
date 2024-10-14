
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from './components/PokemonCard';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemons(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app">
      <h1>Pokémon Search</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="pokemon-container">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default App;
