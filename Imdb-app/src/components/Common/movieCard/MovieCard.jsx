import { useContext } from "react";
import { WatchListContext } from "../../../App";

const MovieCard = (props) => {
  const { movieobj } = props;
  const watchlistContextValue = useContext(WatchListContext);
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    watchlistContextValue;
  let moviePoster = movieobj.backdrop_path;
  let movietitle = movieobj.title;
  const BannerImage = `url(https://image.tmdb.org/t/p/original${moviePoster})`;
  let isNovieinWatchlist = watchlist.find((watchlistMovie) => {
    return watchlistMovie.id == movieobj.id;
  });
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl flex flex-col justify-between items-end hover:scale-110 duration-300 rounded hover:cursor-pointer "
      style={{ backgroundImage: BannerImage }}
    >
      {!isNovieinWatchlist ? (
        <div
          onClick={() => addToWatchlist(movieobj)}
          className="m-4 flex items-center justify-end bg-gray-900/60 rounded"
        >
          &#128525;
        </div>
      ) : (
        <div
          onClick={() => removeFromWatchlist(movieobj)}
          className="m-4 flex items-center justify-end bg-gray-900/60 h-8 w-8 rounded"
        >
          &#10060;
        </div>
      )}

      <div className="text-xl text-white bg-gray-900 bg-opacity-60 text-center w-full">
        {movietitle}
      </div>
    </div>
  );
};
export default MovieCard;
