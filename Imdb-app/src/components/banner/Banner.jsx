import { useEffect, useState } from "react";
import axios from "axios";
const Banner = () => {
  const fetchMoviData = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=a271441f00ab65804138eacbcccc5fea"
    );
    console.log(res);
    const requireMovieIndex = getRandomInt(0, 19);
    let movie = res.data.results[requireMovieIndex];
    let moviePoster = movie.backdrop_path;
    let movietitle = movie.title;
    setBannerImage(`https://image.tmdb.org/t/p/original${moviePoster}`);
    setMovieTitle(movietitle);
  };
  useEffect(() => {
    fetchMoviData();
  }, []);
  const [bannerImage, setBannerImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
  );
  const [movieTitle, setMovieTitle] = useState("");
  return (
    <div
      className="h-[75vh] bg-cover bg-center flex items-end justify-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="text-white text-xl">{movieTitle.toUpperCase()}</div>
    </div>
  );
};
function getRandomInt(min, max) {
  //Will return a number inside the given range, inclusive of both minimum and maximum
  //i.e. if min=0, max=20, returns a number from 0-20
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Banner;
