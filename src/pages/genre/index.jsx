import React from 'react'
import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SeeAllComponent from '../../components/seeAll';
import MovieList from '../../components/movieList';

export default function Genre() {
    const {id} = useParams();
    const [genero, setGenero] = useState([]);
    const [destaques, setDestaques] = useState(true)
    const [seeAll, setSeeAll] = useState(false)

    const KEY = process.env.REACT_APP_KEY;
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}`;

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
        .then((response) => response.json())
        .then((data) => {
            data.genres.forEach((genre) => {
                // eslint-disable-next-line
                if (genre.id == id) {
                setGenero(genre.name);
                console.log(genero);
                }
            });
        });
    },[KEY, id, genero])

    const handleDestaques = () => {
        setDestaques(true);
        setSeeAll(false);
    }
    const handleSeeAll = () => {
        setDestaques(false);
        setSeeAll(true);
    }

    return (
        <div>
            <div style={{ padding: '2rem' }} className='d-flex align-items-center'>
                <h1 className='my-3 me-5'>{genero}</h1>
                <button onClick={handleDestaques} className={`me-2 btn btn-sm ${destaques ? 'selected' : 'btn-dark'}`}>Destaques</button>
                <button onClick={handleSeeAll} className={`ms-2 btn btn-sm ${seeAll ? 'selected' : 'btn-dark'}`}>Ver todos</button>
            </div>
            {
                seeAll && (
                    <SeeAllComponent/>
                )
            }
            {
                destaques && (
                    <div style={{ padding: '2rem' }}>
                        <MovieList url={`${URL}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${id}`} title={'Populares no momento'} limite={10}/>

                        <MovieList url={`${URL}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=revenue.desc&with_genres=${id}`} title={'Recordistas de bilheteria'} limite={10}/>

                        <MovieList url={`${URL}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=vote_count.desc&with_genres=${id}&with_original_language=pt`} title={'Do Brasil para o brasileiro'} limite={10}/>   

                        <MovieList url={`${URL}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=vote_count.desc&with_genres=${id}`} title={'Clássicos'} limite={10}/>

                    </div>
                )
            }
        </div>
    )
}
