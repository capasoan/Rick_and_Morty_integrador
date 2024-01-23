import {  useState } from "react";
import validar from "../utils/validar";


export default function MyForm({login}) {
  
const [userData, setUserData ]= useState(
  {email:"", 
  password:"",});
const [errors, setErrrors]=useState({})

function handleChange(event){

  const { id, value}=event.target;
  
  setUserData({...userData, [id]: value,});
  setErrrors(validar({...userData, [id]: value}));
}

function handleSubmit(event){
  event.preventDefault();
  login(userData);
}



    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" autoComplete="email" value={userData.email} onChange={handleChange} />
        {errors.email ? <p>{errors.email}</p> : <p>Bien</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" autoComplete="password" value={userData.password} onChange={handleChange} />
        {errors.password ? <p>{errors.password}</p> : <p>Bien</p>}
      </div>
      <button type="submit">SUBMIT</button>
    </form>
    );
  }
  