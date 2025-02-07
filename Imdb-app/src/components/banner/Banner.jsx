// import { useEffect, useState } from "react";
// import axios from "axios";
// const Banner = () => {
//   // const fetchMoviData = async () => {
//   //   const res = await axios.get(
//   //     "https://api.themoviedb.org/3/trending/movie/day?api_key=a271441f00ab65804138eacbcccc5fea"
//   //   );
//   //   console.log(res);
//   //   const requireMovieIndex = getRandomInt(0, 19);
//   //   let movie = res.data.results[0];
//   //   let moviePoster = movie.backdrop_path;
//   //   let movietitle = movie.title;
//   //   setBannerImage(`https://image.tmdb.org/t/p/original${moviePoster}`);
//   //   setMovieTitle(movietitle);
//   // };
//   // useEffect(() => {
//   //   fetchMoviData();
//   // }, []);

//   const fetchMoviData = async () => {
//     const res = await axios.get(
//       "https://api.themoviedb.org/3/trending/movie/day?api_key=a271441f00ab65804138eacbcccc5fea"
//     );
//     console.log(res);
//     function nextBanner() {
//       let movie = res.data.results[0];
//       if (movie == res.data.results[length - 1]) {
//         movie = res.data.results[0];
//         let moviePoster = movie.backdrop_path;
//         let movietitle = movie.title;
//         setBannerImage(`https://image.tmdb.org/t/p/original${moviePoster}`);
//         setMovieTitle(movietitle);
//       } else {
//         movie = res.data.results[+1];
//         let moviePoster = movie.backdrop_path;
//         let movietitle = movie.title;
//         setBannerImage(`https://image.tmdb.org/t/p/original${moviePoster}`);
//         setMovieTitle(movietitle);
//       }
//     }
//     useEffect(() => {
//       fetchMoviData();
//       const timer = setInterval(() => {
//         nextBanner();
//       }, 2000);
//       return () => clearInterval(timer);
//     }, [bannerImage]);
//   };

//   const [bannerImage, setBannerImage] = useState(
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
//   );
//   const [movieTitle, setMovieTitle] = useState("");
//   return (
//     <div
//       className="h-[75vh] bg-cover bg-center flex items-end justify-center"
//       style={{ backgroundImage: `url(${bannerImage})` }}
//     >
//       <div className="text-white text-xl">{movieTitle.toUpperCase()}</div>
//     </div>
//   );
// };
// function getRandomInt(min, max) {
//   //Will return a number inside the given range, inclusive of both minimum and maximum
//   //i.e. if min=0, max=20, returns a number from 0-20
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export default Banner;

import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
  );
  const [movieTitle, setMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(true);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=a271441f00ab65804138eacbcccc5fea"
        );
        setMovies(res.data.results);
        if (res.data.results.length > 0) {
          setIndex(0);
          updateBanner(res.data.results[0]); // Set the first movie
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovieData();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      nextBanner();
    }, 2000);

    return () => clearInterval(timer);
  }, [index, movies]);

  const updateBanner = (movie) => {
    if (!movie) return;
    setIsFading(false);
    // setBannerImage(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
    // setMovieTitle(movie.title);
    setTimeout(() => {
      setBannerImage(
        `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      );
      setMovieTitle(movie.title);
      setIsFading(true); // Start fade-in effect
    }, 500); // 500ms fade transition
  };
  function nextBanner() {
    let nextIndex;
    if (index == movies.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }
    setIndex(nextIndex);
    updateBanner(movies[nextIndex]);
  }
  function prevBanner() {
    let nextIndex;
    if (index == movies.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = index - 1;
    }
    setIndex(nextIndex);
    updateBanner(movies[nextIndex]);
  }
  return (
    <div
      className={`h-[75vh] bg-cover bg-center flex items-end justify-center text-white text-xl transition-opacity duration-500 ${
        isFading ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="text-white text-xl">
        <i onClick={prevBanner} className="m-16 cursor-pointer">
          <FontAwesomeIcon icon={faArrowLeft} />
        </i>
        {movieTitle.toUpperCase()}{" "}
        <i onClick={nextBanner} className="m-16 cursor-pointer">
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </div>
    </div>
  );
};

export default Banner;
