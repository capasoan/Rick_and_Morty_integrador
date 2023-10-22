import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from './Card';

export default function Detail({character, onSearch, onClose}){


const { id } = useParams();
console.log('ID de useParams:', id);
    useEffect(()=>{
        onSearch(id, "detail" );
       
    }, [id]);

  useEffect(()=>{console.log("Character:" ,character)}, [character]);

  return (
    <div>
      {character ? (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin ? character.origin.name : 'Unknown'} // Verificación de origin
          image={character.image}
          onClose={() => onClose(character.id)}
        />
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );}