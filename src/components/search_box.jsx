
import { useState } from "react"
import './SearchBox.css'
import searchMovies from '../backend/api.jsx'
import MovieCard from "./moviecard.jsx";

export default function Box()
{
    const [input, setInput] = useState('');
    const [result, setResults] = useState({ results: [] });
    
    function get_movies()
    {
      searchMovies(input).then(setResults)
    }

    return(
    <div>
        <div className="search-container">
            <input type="text" placeholder="Search movies..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={get_movies}>Search</button>
        </div>
        <MovieCard movies={result.results}/>
    </div>
    );
    let data=result.results;
    return(
    <div>
        <input type="text" placeholder="enter movies" value={input} onChange={((e) => setInput(e.target.value))} />
        <button onClick={get_movies} >Check</button>
        <MovieCard movies={result.results}/>

        
    </div>
    );
}



   
