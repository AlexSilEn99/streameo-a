import Description from "./Description/Description";
import Title from "./Title/Title";
import Recommendations from "../Movie/Recommendations/Recommendations";
import { useEffect, useState } from "react";

function AboutUs() {
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
    return (
        <div className="d-flex bg-black-transparent-fade justify-content-center">
            <div className="w-50">
                <Title />
                <Description />
                <div className="mb-4 mt-4">
                    <p className="h6 text-start"><b>Enough talking, here you have some recommended movies</b></p>
                    {recommendationsParameters && <Recommendations parameters={recommendationsParameters} />}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;