import './App.css';
import axios from "axios";
import { useEffect, useState} from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Nav from './components/Nav';
import About from "./components/About";
import Home from './components/Home';
import Detail from './components/Detail';
import MyForm from './components/Form';
import Favorites from './components/Favorites';
//const EMAIL = "capasoan@hola.com";
//const PASSWORD = "12345c";



function App() {
   
   let location=useLocation();
   let navigate= useNavigate();
   const [character, setCharacter] = useState({});
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      })
   }
/*   function login(userData) {
      const { email, password } = userData;
      if (password === PASSWORD && email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }*/

   
    useEffect(()=>{console.log(location)}, [location]);

    const onClose = (id) => {
      const filterId = characters.filter((char) => char.id !== id);
      setCharacters(filterId);
   };

   /*const navigateToHome = useCallback(() => {
      !access && navigate('/');
    }, [access, navigate]);
  
    useEffect(() => {
      navigateToHome();
    }, [navigateToHome]); */
  
useEffect(() => { !access && navigate('/');}, [access, navigate]);

    function onSearch(id, string = "all") {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               if (string !== "all") {
                  // Si string no es "all", no hace nada (puedes agregar lógica adicional aquí si es necesario)
               } else {
                  setCharacters([...characters, data]);
                  setCharacter(data);  // Actualiza el estado del personaje
               }
            }
         })
         .catch((error) => {
            window.alert(error.response.data.error);
         });
   }
 
   return (
      <div className='App'>
  
         { location.pathname !== "/" &&  <Nav onSearch={onSearch} />} 
         <Routes >
         <Route path="/" element={<MyForm login={login}/>}/>       
         <Route path="/home" element={<Home characters={characters} onClose={onClose} />} />
         <Route path="/about" element={<About />} />
         <Route path='/favorites' element={<Favorites/>}/> 
         <Route path="/detail/:id" element={<Detail character={character} characters={characters} onSearch={onSearch} onClose={onClose} />} />  
         </Routes>
      </div>
   );
}

export default App;
