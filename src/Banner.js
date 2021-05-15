import { useEffect, useState } from 'react';
import '../src/css/Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => { 
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)       // the number of movies between 0 to result.length will be shown
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    function truncate(string, n) {  // this is when the description is too long 
        return string?.length  > n ? string.substr(0, n-1)  + '...' : string;        // string?. is used because there may be no description for certain movies
        // the above code is turnery operator describing the situation when the string is bigger then n then the string is taken from 0 to n-1 and after that ... is added else the string is printed as it is
    }
    return (
        <header className='banner' style ={{ 
           backgroundSize: "cover",
           backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
           backgroundPosition: "center center",
        }}
        >
        
         <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}    
                    {/* When we use {} then the code is under JSX 
                    here we have declared the description and the character limit which is 150 */}
                </h1>
            </div>
            
            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner;
