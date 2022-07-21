
  import { useEffect, useState } from "react";
  import "./list.scss";
  import instance from "../../instance";
  import YouTube from "react-youtube";
  import movieTrailer from "movie-trailer";

  const base_url = "https://image.tmdb.org/t/p/original/";
  
  export default function List({title, fetchUrl, isLargeList}) {
    
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
      async function fetchData() {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }

      fetchData();
    }, [fetchUrl]);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }

    const handleClick = (movie) => {
      if(trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=<VIDEO_ID>
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
      }
    }
    return (
      <div className="list">
        <h2>{title}</h2>
        <div className="list__posters">
          {movies.map(movie => (
              <img key={movie.id} onClick={() => handleClick(movie)} className={`list__poster ${isLargeList && "list__posterLarge"}`} src={`${base_url}${isLargeList ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    );
  }
  