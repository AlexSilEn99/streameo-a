import Title from "./Title/Title";
import Item from "./Item/Item";
import Recommendations from "../Movie/Recommendations/Recommendations";
import { useEffect, useState } from "react";

function History() {
    let historyList = localStorage.getItem("historyList");
    const movieIds = (historyList != null && historyList != "") ? historyList.split(",").filter(Number).reverse() : [];
    const recommendationsClass = movieIds.length > 0 ? "d-none" : "d-block";

    let result = {};

    const [recommendationsParameters, setRecommendationsParameters] = useState({});

    const fetchMovieDetails = async () => {
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc3ZTFhMGRhYmZjNzAxZTcwOTkxZWJmNzdkNmE5YiIsIm5iZiI6MTcyMDY0ODM2OS4xMjc0NSwic3ViIjoiNjM5MTRiMTEwNDg2MzgwMGZiZDcwZjc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8fok5dw4s6GdfA82W4px9B3ULfZJEn-ujpJc1B8zElk'
            }
        };

        await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setRecommendationsParameters(result);
    };

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    if (movieIds != undefined) return (
        <div className="mt-4 d-flex bg-black-transparent-fade justify-content-center">
            <div className="w-50" >
                <Title />
                <div className="custom-scrollbar-css" style={{overflowX:"hidden", overflowY:"scroll", maxHeight:"70vh"}}>
                {
                    movieIds.map((movieId) => {
                        return (
                            <div key={ movieId}>
                                <Item parameters={{movieId :movieId}} />
                            </div>
                        )
                    })
                    }  
                </div>
                <div className={recommendationsClass}>
                    <p className="h6 text-start"><b>Looks like your history is empty... Go and watch some movies</b></p>
                    {recommendationsParameters && <Recommendations parameters={recommendationsParameters} />}
                </div >
            </div>
        </div>
    );
}
    

export default History;