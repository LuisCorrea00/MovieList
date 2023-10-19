import MovieCarousel from "../../components/carousel";
import MovieList from "../../components/movieList";

function Home() {

    const KEY = process.env.REACT_APP_KEY;
    const URL = 'https://api.themoviedb.org/3/';

    return (
        <div>

            <div >
                <MovieCarousel/>
            </div>
            
            <div style={{padding:'2rem'}}>
                <MovieList url={`${URL}trending/movie/week?api_key=${KEY}&language=pt-BR`} title={'Em alta'} numbers={true} limite={10}/>

                <MovieList url={`${URL}movie/top_rated?api_key=${KEY}&language=pt-BR`} title={'Aclamados pela crítica'} limite={15}/>

                <MovieList url={`${URL}discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28`} title={'Ação de perder o fôlego'} genre={28} limite={15}/>

                <MovieList url={`${URL}discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=35`} title={'Para morrer de rir'} genre={35} limite={15}/>

                <MovieList url={`${URL}discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10751`} title={'Para a família toda'} genre={10751} limite={15}/>

                <MovieList url={`${URL}discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=18`} title={'Dramas incríveis'} genre={18} limite={15}/>

                <MovieList url={`${URL}discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=27`} title={'De arrepiar'} genre={27} limite={15}/>
            </div>

        </div>
    );
}

export default Home;
