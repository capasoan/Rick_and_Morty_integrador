import Card from './Card';

export default function Cards({characters, onClose}) {
  
   return ( 
   <div>
      {characters.map(function({id, name, 
      status, species, gender, origin, image})
      { 
         
      return(
         <Card
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin ? origin.name : 'Unknown'}
         image={image}
         onClose={onClose}
         />
      )
   })}</div>);
}
