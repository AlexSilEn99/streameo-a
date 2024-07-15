function Poster(parameters) {
  return (
      <div className="col col-lg-4 text-center m-4">
          <img className="img-fluid" key={"Movie_poster"} src={"https://image.tmdb.org/t/p/original" + parameters.parameters.posterPath} />
      </div>
  );
}

export default Poster;