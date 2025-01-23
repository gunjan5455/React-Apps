import Banner from "../../components/banner/Banner";
import Movies from "../../components/movies/Movie";

const Home = (props) => {
  const { addToWatchlist, removeFromWatchlist, watchlist } = props;
  return (
    <div className="">
      <Banner />
      <Movies
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
        watchlist={watchlist}
      />
    </div>
  );
};
export default Home;
