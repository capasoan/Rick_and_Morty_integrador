import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from './Card';

export default function Detail({ characters, onSearch, onClose}){


const { id } = useParams();
const [character, setCharacter] = useState(null);

useEffect(() => {
  onSearch(id, "detail");
}, [onSearch, id]);

useEffect(() => {

  const foundCharacter = characters.find((char) => char.id.toString() === id);
  setCharacter(foundCharacter);
}, [characters, id]);

  useEffect(()=>{console.log("Character:" ,character)}, [character]);

  return (
    <div>
     {character ? (
        <Card
          key={character.id}
          id={character.id}
          name={character.name || 'Unknown'}
          status={character.status || 'Unknown'}
          species={character.species || 'Unknown'}
          gender={character.gender || 'Unknown'}
          origin={(character.origin && character.origin.name) || 'Unknown'}
          image={character.image || 'URL de imagen por defecto'}
          onClose={() => onClose(character.id)}
        />
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );}