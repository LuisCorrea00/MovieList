import React from 'react'
import "./styles.css";
import 'dotenv/config'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"

function SeeAll() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const { id } = useParams();
    const KEY = process.env.REACT_APP_KEY;
    
    

    
    useEffect(() => {
        if (page > 0) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${id}`)
              .then((response) => response.json())
              .then((data) => {
                setMovies(data.results);
              });
          }
    }, [KEY, id, page]);
    
    const handlePrevPage = () => {
        if (page > 1) {
          setPage(prevPage => prevPage - 1); 
        }
    };
    
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1); 
    };

    return (
        <div className='p-2'>
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
            <div className='d-flex justify-content-center mt-5'>
                <IoIosArrowBack size={30} onClick={handlePrevPage} style={{ cursor: 'pointer' }} />
                <span className='text-decoration-underline fs-5 px-1'>{page}</span>
                <IoIosArrowForward size={30} onClick={handleNextPage} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default SeeAll;