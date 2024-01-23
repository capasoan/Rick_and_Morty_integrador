import React from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from './Card';

export default function Detail({character, onSearch, onClose}){


const { id } = useParams();
console.log('ID de useParams:', id);
    useEffect(()=>{
        onSearch(id, "detail" );
       
    }, [onSearch, id]);

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