import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import {BsInfoCircleFill} from 'react-icons/bs'


function MovieCarousel() {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 6));
      });
      
  }, [KEY]);

  return (
    <div className='mt-3'>
      <Swiper
      direction="horizontal"
      slidesPerView={1}
      loop={true}
      speed={1000}
      modules={[Autoplay, Pagination]}
      autoplay={{delay:6000,disableOnInteraction:false}}
      pagination={{ clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} custom-pagination-line"></span>`; 
        }, }} 
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index} className='d-flex justify-content-center'>
          <div className="position-relative" style={{height:'90vh'}}>
            <img
              src={`${imagePath}${movie.backdrop_path}`}
              alt={movie.title}
              className="img-fluid rounded w-100 h-100"
            />
            <div className="position-absolute bottom-0 start-0 ms-3 p-3">
              <Link to={`/${movie.id}`} className='text-decoration-none d-flex align-items-center mb-2'>
                <h1 className="text-white me-4 mb-1" style={{ WebkitTextStroke: '1px black' }}>{movie.title}</h1>
                <BsInfoCircleFill size={25} color='#ff5733' />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
    </div>
  );
}

export default MovieCarousel;