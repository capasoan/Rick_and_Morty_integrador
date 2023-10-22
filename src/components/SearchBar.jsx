import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId]= useState("");
   const handleChange=(event)=>{
    const value= event.target.value;
    setId(value);
   
   }
   return (
      <div>
          <input type='search' onChange={(e)=>handleChange(e)} />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
