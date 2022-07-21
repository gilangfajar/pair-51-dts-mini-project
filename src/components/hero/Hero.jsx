import React, {useState, useEffect} from 'react'
import "./hero.scss";
import instance from '../../instance';
import requests from '../../requests';
import Box from '@mui/material/Box';



export default function Hero() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await instance.get(requests.fetchTopRated);
            console.log(request);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    ]
                );
            return request;
        }

        fetchData();
    }, []);

  return (
    <Box  className="hero">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/>
    </Box>
    // <div>
    //     <header 
    //     className='hero' 
    //     style={{
    //         backgroundSize: 'cover',
    //         backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    //         backgroundPosition: 'center center',

    //     }}>

    //         <div className='hero__contents'>
    //             <h1 className='hero__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

    //             <div className='hero__buttons'>
    //                 <button className='hero__button'>Play</button>
    //                 <button className='hero__button'>My List</button>
    //             </div>
    //         </div>
        
    //     </header>
    // </div>
  )
}