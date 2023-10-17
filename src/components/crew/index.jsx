import React from 'react'


function Crew(props) {
  return (
      <div className="mt-5 row">
            <div className="col-6">
                <h3 className="mb-4">Elenco</h3>
                {props.movie.credits &&
                    props.movie.credits.cast.slice(0, 10).map((cast, index) => (
                    <div key={index} className="d-flex justify-content-between">
                        <p>{cast.character}</p>
                        <p>{cast.name}</p>
                    </div>
                    ))}
            </div>
  
            <div className="col-6">
                <h3 className="mb-4">Roteiristas</h3>
                {props.movie.credits &&
                // eslint-disable-next-line
                    props.movie.credits.crew.map((crew, index) => {
                    if (crew.job === 'Writer') {
                        return (
                        <div key={index} className="d-flex justify-content-between">
                            <p>Roteirista</p>
                            <p>{crew.name}</p>
                        </div>
                        );
                    }
                })}
            </div>

            <div className="col-6">
                <h3 className="mb-4">Produtores</h3>
                {props.movie.credits &&
                // eslint-disable-next-line
                    props.movie.credits.crew.map((crew, index) => {
                    if (crew.job === 'Executive Producer') {
                        return (
                        <div key={index} className="d-flex justify-content-between">
                            <p>Produtor Executivo</p>
                            <p>{crew.name}</p>
                        </div>
                        );
                    }
                    else if (crew.job === 'Producer'){
                        return(
                            <div key={index} className="d-flex justify-content-between">
                            <p>Produtor</p>
                            <p>{crew.name}</p>
                            </div>
                        );
                    }
                })}
            </div>

            <div className="col-6">
                <h3 className="mb-4">Diretores</h3>
                {props.movie.credits &&
                // eslint-disable-next-line
                    props.movie.credits.crew.map((crew, index) => {
                    if (crew.job === 'Director') {
                        return (
                        <div key={index} className="d-flex justify-content-between">
                            <p>Diretor</p>
                            <p>{crew.name}</p>
                        </div>
                        );
                    }
                })}
            </div>
        </div>

  )
}

export default Crew