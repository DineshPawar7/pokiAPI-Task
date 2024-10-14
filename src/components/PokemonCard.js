
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(url);
        setImage(response.data.sprites.front_default);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchPokemonData();
  }, [url]);

  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
