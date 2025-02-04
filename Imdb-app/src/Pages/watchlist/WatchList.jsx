import { useEffect, useState } from "react";
import genreIdMappings from "../../configurations/GenreConfig";
import { WatchListContext } from "../../App";
import { useContext } from "react";
const WatchList = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchListContext);
  console.log(watchlist);
  const genreset = new Set();
  const [movies, setmovies] = useState(watchlist);
  const [searchValue, setSearchValue] = useState(storeInput());
  function handleSearch(e) {
    const seachedValues = e.target.value;
    setSearchValue(seachedValues);
    const filtermovie = watchlist.filter((movie) => {
      return movie.title.toLowerCase().includes(seachedValues.toLowerCase());
    });
    setmovies(filtermovie);
  }
  // function handleGenreSearch(genre) {
  //   const filterMovie = watchlist.filter((movie) => {.
  //     return genreIdMappings[movie.genre[0]] == genre;
  //   });
  //   setmovies(filterMovie);
  // }
  function storeInput() {
    const storeInlocal = JSON.parse(localStorage.getItem("searchValue"));
    if (storeInlocal == null) {
      return [];
    }
    return storeInlocal;
  }
  useEffect(() => {
    localStorage.setItem("searchValue", JSON.stringify(searchValue));
  }, [searchValue]);
  function handleGenreSearch(genre) {
    if (genre === "All genres") {
      setmovies(watchlist);
    } else {
      setmovies(
        watchlist.filter((movie) =>
          movie.genre_ids.some((id) => genreIdMappings[id] === genre)
        )
      );
    }
  }
  useEffect(() => {
    setmovies(watchlist);
  }, [watchlist]);
  movies.forEach((movie) => {
    const genreIds = movie.genre_ids;
    genreIds.forEach((id) => {
      genreset.add(genreIdMappings[id]);
    });
  });
  const genres = Array.from(genreset);
  genres.unshift("All genres");
  console.log("genreIds", genreset);
  console.log(genres);

  return (
    <div className="">
      <div className="flex items-center justify-center m-4">
        {genres.map((genre, index) => {
          return (
            <div
              className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center text-white text-bold rounded-lg cursor-pointer"
              key={index}
              onClick={() => handleGenreSearch(genre)}
            >
              {genre.toString().toUpperCase()}
            </div>
          );
        })}
      </div>
      <div className="my-10">
        <input
          onChange={handleSearch}
          value={searchValue.toUpperCase()}
          className="p-2 h-[3rem] w-[18rem] border-gray-900 bg-gray-400 rounded-lg text-white text-bold placeholder-white"
          placeholder="SEARCH MOVIES"
        />
      </div>
      <div>
        <table className="w-full my-10">
          <thead>
            <tr>
              <th>NAME</th>
              <th>RATING</th>
              <th>POPULARITY</th>
              <th>GENRE</th>
            </tr>
          </thead>
          <tbody className="my-20">
            {movies.map((movie, index) => {
              return (
                <tr className="my-20" key={index}>
                  <td className="flex items-center">
                    <img
                      className="h-[10rem] w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt=""
                    />
                    <div className="px-7 font-medium">
                      {movie.title.toUpperCase()}
                    </div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>
                    {genreIdMappings[movie.genre_ids[0]]
                      .toString()
                      .toUpperCase()}
                  </td>
                  <td
                    className="text-red-500 cursor-pointer"
                    onClick={() => removeFromWatchlist(movie)}
                  >
                    DELETE
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WatchList;
