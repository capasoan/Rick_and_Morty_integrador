import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';


function Favorites({myFavorites}){
    return ( 
    <div>
      {myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
        console.log('ID:', id);  // Agrega esta línea para imprimir el ID en la consola
        return (
          <Card
            key={id}
            id={id}
            name={name || 'Unknown'}
            status={status || 'Unknown'}
            species={species || 'Unknown'}
            gender={gender || 'Unknown'}
            origin={origin?.name || 'Unknown'}
            image={image || 'URL de imagen por defecto'}
          />
        );
      })}</div>);
}
function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites  || []
    };
}
    
export default connect(mapStateToProps)(Favorites);
