import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import "./styles.css";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { Swiper,SwiperSlide } from 'swiper/react';
import { FreeMode} from 'swiper/modules'


function MovieList(props) {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [props.url]);

  return (
    <div>
        <div className='d-flex align-items-center'>
        {props.genre ? (
          <Link to={`/genero/${props.genre}`} className='mt-5 d-flex align-items-center text-decoration-none'>
            <h4 className='text-start h4 text-white mb-1'>{props.title}</h4>
            <IoIosArrowForward size={20} color='#fff' className='ms-1 arrow' />
          </Link>
        ) : (
          <h4 className='text-start h4 mt-5'>{props.title}</h4>
        )}
        </div>
        <div className='d-flex align-items-center mt-3'>
            <Swiper
              freeMode={true}
              slidesPerView={6}
              spaceBetween={30}
              modules={[FreeMode]}
            >
              {movies.slice(0, props.limite).map((movie, index) => (
                <SwiperSlide key={index}>
                  <div className='d-flex align-items-center'>
                    { props.numbers && 
                      <h2 className='me-3' style={{fontFamily:'Londrina Shadow', fontSize:'3rem'}}>{index+1}</h2> 
                    }
                    <Link to={`/${movie.id}`}>
                      <img
                        src={`${imagePath}${movie.poster_path}`}
                        alt={movie.title}
                        className='w-100 foto '
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
    </div>
  );
}

export default MovieList;
