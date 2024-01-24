import React from 'react';
import { connect } from 'react-redux';
import {removeFav }from "../redux/actions"
import Card from './Card';


function Favorites({myFavorites, onClose}){
    return ( 
    <div>
      {myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
        console.log('ID:', id);  
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
            onClose={() => onClose(id)}
          />
        );
      })}</div>);
}
function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites  || []
    };
}
    
const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
