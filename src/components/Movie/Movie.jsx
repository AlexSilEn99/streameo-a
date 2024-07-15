import { useEffect, useState } from "react";
import Poster from "./Poster/Poster";
import Top from "./Top/Top";
import Overview from "./Overview/Overview";
import Details from "./Details/Details";
import WebsiteButton from "./WebsiteButton/WebsiteButton";
import Recommendations from "./Recommendations/Recommendations";
import WatchButton from "./WatchButton/WatchButton";
import { useLocation } from 'react-router-dom'
function Movie() {
    let result = {};

    const location = useLocation();

    let [movieId, setMovieId] = useState(location.state != null ? location?.state?.movieId : 9353);
    const [posterParameters, setPosterParameters] = useState({});
    const [topParameters, setTopParameters] = useState({});
    const [overviewParameters, setOverviewParameters] = useState({});
    const [detailsParameters, setDetailsParameters] = useState({});
    const [websiteButtonParameters, setWebsiteButtonParameters] = useState({});
    const [watchButtonParameters, setWatchButtonParameters] = useState({});
    const [recommendationsParameters, setRecommendationsParameters] = useState({});

    const fetchMovieDetails = async (newMovieId) => {
        movieId = newMovieId > 0 ? newMovieId : movieId;
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc3ZTFhMGRhYmZjNzAxZTcwOTkxZWJmNzdkNmE5YiIsIm5iZiI6MTcyMDY0ODM2OS4xMjc0NSwic3ViIjoiNjM5MTRiMTEwNDg2MzgwMGZiZDcwZjc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8fok5dw4s6GdfA82W4px9B3ULfZJEn-ujpJc1B8zElk'
            }
        };

        await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
            .then(response => response.json())
            .then(response => result = response);
        setPosterParameters({ "posterPath": result.poster_path });
        setTopParameters({ "title": result.title, "releaseDate": result.release_date, "genre": genresList(result), "rating": ratingStars(result) });
        setOverviewParameters({ "overview": result.overview });
        setDetailsParameters({ "production": productionList(result), budgetRevenue: budgetRevenue(result)[0], budgetRevenueTotal: budgetRevenue(result)[1] });
        setWebsiteButtonParameters({ "homepage": result.homepage });

        await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => result = response.results)
        if (result.filter(i => i.site == "YouTube").length > 0) setWatchButtonParameters({ trailerKey: result.find(i => i.site == "YouTube").key, id: movieId });

        await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US`, options)
            .then(response => response.json())
            .then(response => result = response.results.filter(i => i.poster_path != null));

        if (result.length < 5) {
            await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
                .then(response => response.json())
                .then(response => result = response.results.filter(i => i.poster_path != null));
        }
        setRecommendationsParameters(result);
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

        let genresNumber = result.genres != undefined? result.genres.length : 0;
        for (let i = 0; i < genresNumber; i++) {
            genre += result.genres[i].name;
            genre += i < genresNumber - 1 ? ",\xa0" : "";
        }

        return genre;
    }

    const productionList = (result) => {
        let production = "";

        let productionsNumber = result.production_companies != undefined ? result.production_companies.length : 0;
        for (let i = 0; i < productionsNumber; i++) {
            production += result.production_companies[i].name;
            production += i < productionsNumber - 1 ? " \u2218\xa0" : "";
        }
        return production;
    }

    const budgetRevenue = (result) => {
        let budgetRevenue = "";
        let budgetRevenueTotal = "";
        if (result?.budget != undefined) {
            budgetRevenue = "-$" + result.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "\xa0" + "+ $" + result.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            budgetRevenueTotal = (result.revenue - result.budget < 0 ? "-" : "") + "$"+ (result.revenue - result.budget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace("-", "");
        }
        return [budgetRevenue, budgetRevenueTotal]
    }

    useEffect(() => {
        fetchMovieDetails(0);
    }, []);

    function getMovieId(newMovieId) {
        setMovieId(newMovieId);
        setMovieId(newMovieId);
        fetchMovieDetails(newMovieId);
    }

  return (
      <div className="d-flex bg-black-transparent-fade justify-content-center">
          <div className="row w-75 p-4">
              {posterParameters && <Poster parameters={posterParameters} />}
              <div className="col mt-4">
                  <div className="container d-flex h-100">
                      <div className="row justify-content-center align-self-center">
                          {topParameters && <Top parameters={topParameters} />}
                          {overviewParameters && <Overview parameters={overviewParameters} />}
                          {watchButtonParameters && <WatchButton parameters={watchButtonParameters} />}
                          {detailsParameters && <Details parameters={detailsParameters} />}
                          {websiteButtonParameters && <WebsiteButton parameters={websiteButtonParameters} />}
                          <hr className="border border-white" />
                          <div className="mb-4 mt-4">
                              <p className="h4 text-start"><b>Recommendations</b></p>
                              {recommendationsParameters && <Recommendations parameters={recommendationsParameters} getMovieId={getMovieId } />}
                          </div>
                      </div>
                  </div>
              </div>              
          </div>
      </div>
  );
}

export default Movie;