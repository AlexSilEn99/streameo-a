import Title from "./Title/Title";
import Recommendations from "../Movie/Recommendations/Recommendations";
import { useEffect, useState } from "react";

function Discover() {
    let result = {};

    const [actionAdventureParameters, setActionAdventureParameters] = useState({});
    const [comedyParameters, setComedyParameters] = useState({});
    const [animatedParameters, setAnimatedParameters] = useState({});
    const [dramaParameters, setDramaParameters] = useState({});
    const [HorrorParameters, setHorrorParameters] = useState({});
    const [scienceFictionParameters, setScienceFictionParameters] = useState({});
    const [thrillerParameters, setThrillerParameters] = useState({});
    const [romanceParameters, setRomanceParameters] = useState({});

    const fetchMovieDetails = async () => {
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc3ZTFhMGRhYmZjNzAxZTcwOTkxZWJmNzdkNmE5YiIsIm5iZiI6MTcyMDY0ODM2OS4xMjc0NSwic3ViIjoiNjM5MTRiMTEwNDg2MzgwMGZiZDcwZjc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8fok5dw4s6GdfA82W4px9B3ULfZJEn-ujpJc1B8zElk'
            }
        };

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28%2C%2012', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setActionAdventureParameters(result);

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setComedyParameters(result);

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setAnimatedParameters(result);

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setDramaParameters(result);

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setHorrorParameters(result);

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setScienceFictionParameters(result);

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=53', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setThrillerParameters(result);

        await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setRomanceParameters(result);
    };

    useEffect(() => {
        fetchMovieDetails();
    }, []);

  return (
      <div className="d-flex bg-black-transparent-fade justify-content-center">
          <div className="w-50">
              <Title />
              <div className="custom-scrollbar-css" style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "70vh" }}>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Looking for adventure and action?</b></p>
                      {actionAdventureParameters && <Recommendations parameters={actionAdventureParameters} />}
                  </div>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Maybe some laughing?</b></p>
                      {comedyParameters && <Recommendations parameters={comedyParameters} />}
                  </div>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Imagine the future</b></p>
                      {scienceFictionParameters && <Recommendations parameters={scienceFictionParameters} />}
                  </div>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Maybe some tension?</b></p>
                      {thrillerParameters && <Recommendations parameters={thrillerParameters} />}
                  </div>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Animation and joy</b></p>
                      {animatedParameters && <Recommendations parameters={animatedParameters} />}
                  </div>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Feeling like drama?</b></p>
                      {dramaParameters && <Recommendations parameters={dramaParameters} />}
                  </div>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Want to get a little scared?</b></p>
                      {HorrorParameters && <Recommendations parameters={HorrorParameters} />}
                  </div>
                  <div className="mb-4 mt-4">
                      <p className="h5 text-start"><b>Cry. Go ahead.</b></p>
                      {romanceParameters && <Recommendations parameters={romanceParameters} />}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Discover;