import { useEffect, useState } from "react";
import Spinner from "../Common/spinner/Spinner";
import axios from "axios";
import MovieCard from "../Common/movieCard/MovieCard";
import Pagination from "../../components/pagination/Pagination";

const Movies = (props) => {
  const { addToWatchlist, removeFromWatchlist, watchlist } = props;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const prevclick = function () {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextclik = function () {
    setCurrentPage(currentPage + 1);
  };
  const fetchMoviData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a271441f00ab65804138eacbcccc5fea&page=${currentPage}`
    );
    console.log(res);
    let movies = res.data.results;
    setMovies(movies);
    setLoading(false);
  };
  useEffect(() => {
    fetchMoviData();
  }, [currentPage]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="text-2xl font-bold m-5">
        <h3>Trending Movies</h3>
        <div className="flex flex-wrap gap-8 justify-center align-center mt-5">
          {movies.map((movieobj) => {
            return (
              <MovieCard
                movieobj={movieobj}
                addToWatchlist={addToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
                watchlist={watchlist}
              />
            );
          })}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        prevclick={prevclick}
        nextclik={nextclik}
      />
    </div>
  );
};
export default Movies;
