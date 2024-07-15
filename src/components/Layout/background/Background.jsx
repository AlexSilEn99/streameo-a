import { useEffect, useState } from "react";
import './Background.css'

function Background() {
    let imagePosters = [];
    const [imgList, setImgList] = useState([]);

    const fetchImages = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc3ZTFhMGRhYmZjNzAxZTcwOTkxZWJmNzdkNmE5YiIsIm5iZiI6MTcyMDY0ODM2OS4xMjc0NSwic3ViIjoiNjM5MTRiMTEwNDg2MzgwMGZiZDcwZjc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8fok5dw4s6GdfA82W4px9B3ULfZJEn-ujpJc1B8zElk'
            }
        };

        await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => response.results.forEach((element) => { imagePosters.push(element.poster_path) }));
        setImgList(imagePosters);
    };

    useEffect(() => {
        fetchImages();
    },[]);


    return (
            <div className="background">
                <div className="background-grid">
                {
                    imgList.slice(0, 18).map((posterPath, index) => {
                        return (
                            <img className="poster-img" key={index} src={"https://image.tmdb.org/t/p/original" + posterPath}/>
                        )
                    })
                }
                </div>
            </div>
  );
}

export default Background;