import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Nav from './components/Nav';
import About from "./components/About";
import Home from './components/Home';
import Detail from './components/Detail';
import MyForm from './components/Form';
const EMAIL = "capasoan@hola.com";
const PASSWORD = "12345c";



function App() {
   
   let location=useLocation();
   let navigate= useNavigate();
   const [character, setCharacter] = useState({});
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
    useEffect(()=>{console.log(location)}, [location]);

    const onClose = (id) => {
      const filterId = characters.filter((char) => char.id !== id);
      setCharacters(filterId);
   };

    useEffect(() => { !access && navigate('/');}, [access]);

   function onSearch(characterID, string="all") {
      
      axios(`https://rickandmortyapi.com/api/character/${characterID}`).then(
         ({ data }) => {
      
            if (data.name) {
               if(string !== "all"){}
                  setCharacters([...characters, data]);
               }else{
                  setCharacters(data);
               }
               
            } 
      ).catch((error) => {
         window.alert(error.response.data.error);
      });
   }
   function login({email, password}) {
      if (password === PASSWORD && email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   return (
      <div className='App'>
        {location.pathname !== "/" && <Nav onSearch={onSearch} />} 
         <Routes>
         <Route path="/" element={<MyForm login={login}/>}/>       
         <Route path="/home" element={<Home characters={characters} onClose={onClose} />} />
         <Route path="/about" element={<About />} />
         <Route path="/detail/:id" element={<Detail character={character} characters={characters} onSearch={onSearch} onClose={onClose} />} />        
         </Routes>
      </div>
   );
}

export default App;
