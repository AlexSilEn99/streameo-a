import { useState, useEffect } from "react";
import SearchResults from "../SearchResults/SearchResults";
function SearchBar() {

    let result = {};
    const [resultParameters, setResultParameters] = useState({});
    function handleChange(e) {
        if (e.target.value.length > 0) {
            fetchSearchResults(e.target.value);
        }
    }

    const fetchSearchResults = async (searchText) => {
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc3ZTFhMGRhYmZjNzAxZTcwOTkxZWJmNzdkNmE5YiIsIm5iZiI6MTcyMDY0ODM2OS4xMjc0NSwic3ViIjoiNjM5MTRiMTEwNDg2MzgwMGZiZDcwZjc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8fok5dw4s6GdfA82W4px9B3ULfZJEn-ujpJc1B8zElk'
            }
        };

        await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => result = response.results.filter(i => i.poster_path != null))
        setResultParameters(result);
    };


    return (
      <div>
      
          <div className="input-group input-group-lg p-4 d-flex justify-content-center">
              <span className="input-group-text border-0 bg-transparent">
                  <i className="fa fa-search"></i>
              </span>
              <input id="searchInput" type="text" className="form-control search-input rounded-0" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search for new movies" onChange={handleChange} />
            </div>
            <div>
                {resultParameters && <SearchResults parameters={resultParameters} />}
            </div>
        </div>
  );
}

export default SearchBar;