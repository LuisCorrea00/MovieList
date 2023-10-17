import React from 'react'
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom";
import "./styles.css";
import GenreGroup from '../../components/genreGroup';

function Search() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);


  const KEY = process.env.REACT_APP_KEY;

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${search}&include_adult=false&language=pt-BR`)
    .then((response) => response.json())
    .then((data) => {
       setMovies(data.results)
    });
  },[KEY, search])

  return (
    <div style={{padding:'2rem', minHeight:'70vh'}}>
      <div className='d-flex justify-content-center mb-5'>
      <form className="input-group w-75">
          <span className="input-group-text">
            <BsSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="O que você está procurando?"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div>
        <h4>Explore por gêneros</h4>
        <GenreGroup/>
      </div>
      {search &&(
        <div className='mt-5 d-grid column-gap-4 row-gap-4'style={{gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))'}}>
        {movies.map((movie,index) => {
          return (
            <div key={index} className='d-flex flex-column align-items-center justify-content-space-evenly'>
                <Link to={`/${movie.id}`}>
                  <img
                    src={`${imagePath}${movie.poster_path}`}
                    alt="{movie.title}"
                    className='mb-3 rounded imgItem'
                  />
                </Link>
            </div>
          );
        })}      
    </div>
      )}
      
    </div>
  )
}

export default Search;