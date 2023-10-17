import React from 'react'
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs'

function Search() {
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
    <div style={{padding:'2rem'}}>
      <div className='d-flex justify-content-center'>
      <form className="input-group w-75">
          <span className="input-group-text">
            <BsSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="O que você está procurando?"
            // value={search}
            // onChange={search}
          />
        </form>
      </div>
      <div>
        <h2>Explore por gêneros</h2>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Search;