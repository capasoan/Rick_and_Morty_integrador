import Cards from './Cards';

export default function Home ({characters, onClose}){
    return(

        <div>
            <h1>Home</h1>
        <Cards characters={characters} onClose = {onClose}/>
    </div>
    )
}
