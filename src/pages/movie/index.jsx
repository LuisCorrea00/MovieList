import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill, BsFillPlayCircleFill } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go"
import MovieList from "../../components/movieList";
import Crew from "../../components/crew";
import 'dotenv/config'

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [trailer, setTrailer] = useState([]);
  const [movie, setMovie] = useState([]);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR&append_to_response=videos,credits`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        if (data.videos.results) {
          const trailerVideo = data.videos.results.find(
            (video) => video.type === "Trailer"
          );
          if (trailerVideo) {
            setTrailer(trailerVideo.key);
          } else setTrailer(null)
        }
      });
  }, [KEY, id, trailer]);

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-3">
          <img
            src={`${imagePath}${movie.poster_path}`}
            className="img-fluid rounded"
            alt={movie.title}
          />
        </div>
        <div className="col-9">
          <h2>{movie.title}</h2>
          <div className="d-flex align-items-center" style={{ fontSize: '0.9rem' }}>
            <p className="me-4 mb-0">{movie.runtime} min</p>
            <p className="me-4 mb-0">
              {movie.release_date ? movie.release_date.slice(0, 4) : ""}
            </p>
            <BsFillStarFill color="yellow" />
            <p className="ms-1 mb-0">
              {movie.vote_average ? movie.vote_average.toFixed(1) : ""}
            </p>
          </div>
          <div className="my-4 fs-5">
            <p>{movie.overview}</p>
          </div>
          <div className="">
            {trailer ? (
              <a
                href={`https://www.youtube.com/embed/${trailer}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillPlayCircleFill size={40} color="#ff5733" />
              </a>
            ) : (
                <div className="d-flex align-items-center">
                    <GoAlertFill size={30} color="ff5733"/>
                    <span className="ms-3">Trailer indisponível</span>
                </div>
            )}
          </div>
        </div>
      </div>
      <MovieList
        url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${KEY}&language=pt-BR`}
        title={`Similares com ${movie.title}`}
        limite={10}
      />

      <Crew movie={movie}/>

    </div>
  );
};

export default Movie;
