import {Link} from "react-router-dom";
import SearchBar from './SearchBar';


export default function Nav({onSearch}){
    return <div>
        <Link to="/home"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to= "/Favorites"> <button>Favorites</button></Link>
       
        
       
        
<SearchBar onSearch={onSearch} />
    </div>
}