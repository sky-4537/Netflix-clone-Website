import movieTrailer from 'movie-trailer';
import React from 'react'
// import { createRoot } from 'react-dom/client';
import { useState , useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';

const base_URL = "http://image.tmdb.org/t/p/original/";

function Row({title,fetchURL,isLargeRow}) {
    const[movies,setMovies]= useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");

    useEffect(()=> {
      async function fetchData(){
        const requests = await axios.get(fetchURL);
        console.log(requests.data.results);
        setMovies(requests.data.results);
        return requests;
      }
      fetchData();


    },[fetchURL]);
    console.table(movies);
    const opts={
      height:"390",
      width:"100%",
      playerVars: {
        // hhtp://devekopers.google.com/youtube/player_parameters
         
        autoplay: 1,
      },
    }

    const handleClick =(movies) =>{
      if (trailerUrl){
        setTrailerUrl(' ');
      }
       else{
         movieTrailer(movies?.name|| "")
         .then((url)=>{
           const  urlParams = new URLSearchParams( new URL(url).search);
           setTrailerUrl (urlParams.get('v'))

         })
         .catch((error)=> console.log(error))
         

       
    }
  
  }




  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
 
          {movies.map((movies )=>(
            <img 
            key={movies.id}
            onClick={()=> handleClick(movies)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_URL}${isLargeRow ? movies.poster_path: movies.backdrop_path}`} alt={movies.name}/>
          ))}
        </div>
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}


    </div>
  )

          }

export default Row;