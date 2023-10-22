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

function handelSubmit(event){
  event.preventDefault();
  login(userData);
}



    return (
      <form onSubmit={handelSubmit}>
        <div>
          <label >Email</label>
          <input type="text" id="email" value={userData.email} onChange={handleChange}/>
          {errors.email ? (<p>{errors.email}</p>) : <p>Bien</p>} 
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={userData.password} onChange={handleChange} />
          {errors.password ? (<p>{errors.password}</p>) : <p>Bien</p>} 
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
  