import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from './Card';
import axios from 'axios';

export default function Detail({ characters, onSearch, onClose}){


const { id } = useParams();
const [characterDetail, setCharacterDetail] = useState(null);

useEffect(() => {
  onSearch(id, "detail");
}, [onSearch, id]);

useEffect(() => {
  axios(`http://localhost:3001/rickandmorty/character/${id}`)
  .then(({data})=>{
  if(data.name){
    setCharacterDetail(data);
  }else{window.alert("no hat personaje con este ID")

  }
});//const foundCharacter = characters.find((char) => char.id.toString() === id);
  //setCharacter(foundCharacter);
}, [id]);

useEffect(()=>{console.log("characterDetail:" ,characterDetail)}, [characterDetail]);

  return (
    <div>
     {characterDetail ? (
        <Card
          key={characterDetail.id}
          id={characterDetail.id}
          name={characterDetail.name || 'Unknown'}
          status={characterDetail.status || 'Unknown'}
          species={characterDetail.species || 'Unknown'}
          gender={characterDetail.gender || 'Unknown'}
          origin={(characterDetail.origin && characterDetail.origin.name) || 'Unknown'}
          image={characterDetail.image || 'URL de imagen por defecto'}
          onClose={() => onClose(characterDetail.id)}
        />
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );}