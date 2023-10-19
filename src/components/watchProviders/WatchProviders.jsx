import { useEffect, useState } from "react";
import { GoAlertFill } from "react-icons/go"


function WatchProviders(props) {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [flatrate, setFlatrate] = useState(null);
    const [buy, setBuy] = useState(null);
    const [rent, setRent] = useState(null);
  
    useEffect(() => {
        fetch(props.url)
          .then((response) => response.json())
          .then((data) => {
            if (data.results.BR) {
              const provider = data.results.BR;
              console.log(data.results.BR);
              if (provider.flatrate) setFlatrate(provider.flatrate);             
              if (provider.buy) setBuy(provider.buy);             
              if (provider.rent.provider_name) setRent(provider.rent);
            }
          });
      }, [props.url]);

  return (
    <div>
        {
            buy != null || rent != null || flatrate != null  ? (
                <p className="fs-5 mt-3">Onde assistir:</p>
            ) :
            (
                <div className="d-flex align-items-center mt-4">
                    <GoAlertFill size={30} color="ff5733"/>
                    <span className="ms-3 ">Opções de onde assistir indisponíveis</span>
                </div>
            )
        }
        {
              buy && (
                <div className="p-2 ps-0 ">
                  <span>Comprar: </span>
                  {
                    buy.map((provider, index)=>(
                      <img
                        src={`${imagePath}${provider.logo_path}`}
                        className="rounded mx-1"
                        style={{height:'2rem'}}
                      />
                    ))
                  }
                </div>
              )
            }
            {
              rent && (
                <div className="p-2 ps-0">
                  <span>Alugar: </span>
                  {
                    rent.map((provider, index)=>(
                      <img
                        src={`${imagePath}${provider.logo_path}`}
                        className="rounded mx-1"
                        style={{height:'2rem'}}
                      />
                    ))
                  }
                </div>
              )
            }
            {
              flatrate && (
                <div className="p-2 ps-0">
                  <span>Streaming: </span>
                  {
                    flatrate.map((provider, index)=>(
                      <img
                        src={`${imagePath}${provider.logo_path}`}
                        className="rounded mx-1"
                        style={{height:'2rem'}}
                      />
                    ))
                  }
                </div>
              )
            }   
    </div>
  )
}

export default WatchProviders