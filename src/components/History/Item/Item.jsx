import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Item(parameters) {
    let result = {};

    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovieDetails = async () => {
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc3ZTFhMGRhYmZjNzAxZTcwOTkxZWJmNzdkNmE5YiIsIm5iZiI6MTcyMDY0ODM2OS4xMjc0NSwic3ViIjoiNjM5MTRiMTEwNDg2MzgwMGZiZDcwZjc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8fok5dw4s6GdfA82W4px9B3ULfZJEn-ujpJc1B8zElk'
            }
        };

        await fetch(`https://api.themoviedb.org/3/movie/${parameters.parameters.movieId}?language=en-US`, options)
            .then(response => response.json())
            .then(response => result = response);
        setMovieDetails({ "id":result.id, "title": result.title, "posterPath": result.poster_path, "genre": genresList(result), "rating": ratingStars(result) });       
    };

    const ratingStars = (result) => {
        let rating = [];
        let ratingNumber = Math.round(result.vote_average) / 2;

        for (let i = 0; i < ratingNumber; i++) {
            rating.push(<i key={"rating_" + i} className="fa fa-star m-1"></i>);
        }
        return rating;
    }
    const genresList = (result) => {
        let genre = "";

        let genresNumber = result.genres != undefined ? result.genres.length : 0;
        for (let i = 0; i < genresNumber; i++) {
            genre += result.genres[i].name;
            genre += i < genresNumber - 1 ? ",\xa0" : "";
        }

        return genre;
    }

    useEffect(() => {
        fetchMovieDetails();
    }, []);



    return (
        <Link className="text-decoration-none text-white" to="/Movie" state={{ movieId: movieDetails.id }}>
            <div className="row justify-content-center">
                <div className="col col-sm-2 text-center m-2">
                    <img className="img-fluid" key={"Movie_poster"} src={"https://image.tmdb.org/t/p/original" + movieDetails.posterPath} />
                </div>
                <div className="col col-sm-6 bg-black-transparent mt-2 mb-2">
                    <div className="container d-flex h-100">
                        <div className="row justify-content-start align-self-center">
                            <div className="d-flex justify-content-start">
                                <p className="text-start"><b className="h1">{movieDetails.title}</b></p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p className="text-muted">{movieDetails.genre}</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                {movieDetails.rating}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Link>
          
  );
}

export default Item;