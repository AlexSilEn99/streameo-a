import { Link } from 'react-router-dom'
function Recommendations(parameters) {

    const uuid = uuidv4();
    function uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }

    if (parameters.parameters.length > 0)  return (
        <div className="text-center">
            <div className="row">
                <div id={"recommendationsCarousel" + uuid} className="carousel slide w-100" data-bs-ride="carousel">
                    <div className="carousel-indicators" style={{ filter: "invert(1)" }}>
                        <button type="button" data-bs-target={"#recommendationsCarousel" + uuid} data-bs-slide-to="0" className="active" aria-current="true"></button>
                        <button type="button" data-bs-target={"#recommendationsCarousel" + uuid} data-bs-slide-to="1" ></button>
                        <button type="button" data-bs-target={"#recommendationsCarousel" + uuid} data-bs-slide-to="2" ></button>
                    </div>
                    <div className="carousel-inner mb-4" role="listbox">
                        <div className="carousel-item active mb-4">
                            <div className="row">
                                {
                                    parameters.parameters.slice(0,6).map((movie, index) => {
                                        return (
                                            <div key={"recommendation_" + index} className="col-sm-2">
                                                <Link to="/Movie" state={{ movieId: movie.id }}>
                                                    <img className="d-block w-100" id={movie.id} src={"https://image.tmdb.org/t/p/original" + movie.poster_path} onClick={() => {if (parameters.getMovieId != undefined) parameters.getMovieId(movie.id) } } />
                                                </Link>
                                            </div>
                                        )
                                    })
                                }                                        
                            </div>
                        </div>
                        <div className="carousel-item mb-4">
                            <div className="row">
                                {
                                    parameters.parameters.slice(6, 12).map((movie, index) => {
                                        return (
                                            <div key={"reccomendation_" + index} className="col-sm-2">
                                                <Link to="/Movie" state={{ movieId: movie.id }}>
                                                    <img className="d-block w-100" src={"https://image.tmdb.org/t/p/original" + movie.poster_path} onClick={() => { if (parameters.getMovieId != undefined) parameters.getMovieId(movie.id) }} />
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="carousel-item mb-4">
                            <div className="row">
                                {
                                    parameters.parameters.slice(12, 18).map((movie, index) => {
                                        return (
                                            <div key={"reccomendation_" + index} className="col-sm-2">
                                                <Link to="/Movie" state={{ movieId: movie.id }}>
                                                    <img className="d-block w-100" src={"https://image.tmdb.org/t/p/original" + movie.poster_path} onClick={() => {if (parameters.getMovieId != undefined) parameters.getMovieId(movie.id) } } />
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> 
                        <div className="d-flex justify-content-between d-none">
                            <a className="text-white" href={"#recommendationsCarousel" + uuid} role="button" data-slide="prev">
                                <span className="fa fa-arrow-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>

                            <a className="text-white" href={"#recommendationsCarousel" + uuid} role="button" data-slide="next">
                                <span className="fa fa-arrow-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Recommendations;