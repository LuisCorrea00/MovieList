import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Genres from "./pages/genre";
import Footer from "./components/footer";
import Search from "./pages/search";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
                <Route path="/genero/:id" exact element={<Genres/>} />
                <Route path="/buscar" exact element={<Search/>} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
