import { useEffect, useState } from "react";
import Spinner from "../Common/spinner/Spinner";
import axios from "axios";
import MovieCard from "../Common/movieCard/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/slice/moviesSlice";
const Movies = () => {
  const { movies, loading, currentPage } = useSelector(
    (state) => state.moviesState
  );
  const dispatch = useDispatch();
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  const prevclick = function () {
    if (currentPage > 1) {
      dispatch(prevclick());
    }
  };
  const nextclik = function () {
    dispatch(nextclik());
  };
  // const fetchMoviData = async () => {
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/trending/movie/day?api_key=a271441f00ab65804138eacbcccc5fea&page=${currentPage}`
  //   );
  // console.log(res);
  // let movies = res.data.results;
  // setMovies(movies);
  // setLoading(false);
  //};
  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="text-xl font-bold m-5">
        <h3>TRENDING MOVIES</h3>
        <div className="flex flex-wrap gap-8 justify-center align-center mt-5">
          {movies.map((movieobj) => {
            return <MovieCard movieobj={movieobj} />;
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
