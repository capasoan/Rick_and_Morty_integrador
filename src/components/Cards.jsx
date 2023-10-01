import Card from './Card';

export default function Cards({characters, onClose}) {
   return ( 
   <div>
      {characters.map(function({id, name, 
      status, species, gender, origin, image})
      { 
         console.log(onClose);
      return(
         <Card
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={onClose}
         />
      )
   })}</div>);
}