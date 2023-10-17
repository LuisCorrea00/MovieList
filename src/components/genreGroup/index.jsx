import React from 'react'
import { Link } from 'react-router-dom'

function GenreGroup() {
  return (
    <div class="btn-group p-2 ps-0">
          <Link to={'/genero/28'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Ação</button>
          </Link>

          <Link to={'/genero/12'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Aventura</button>
          </Link>

          <Link to={'/genero/16'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Animação</button>
          </Link>

          <Link to={'/genero/35'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Comédia</button>
          </Link>

          <Link to={'/genero/99'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Documentário</button>
          </Link>

          <Link to={'/genero/18'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Drama</button>
          </Link>
          
          <Link to={'/genero/878'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Ficção Científica</button>
          </Link>

          <Link to={'/genero/14'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Fantasia</button>
          </Link>

          <Link to={'/genero/27'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Terror</button>
          </Link>

          <Link to={'/genero/9648'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Mistério</button>
          </Link>

          <Link to={'/genero/10749'} className='pe-2'>
            <button type="button" className="btn btn-dark genre">Romance</button>
          </Link>
    </div>
  )
}

export default GenreGroup