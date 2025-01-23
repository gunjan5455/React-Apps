import "./app.css";
import Home from "./Pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import WatchList from "./Pages/watchlist/WatchList";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  function addToWatchlist(movie) {
    console.log("added", movie);
    setWatchlist([...watchlist, movie]);
  }
  function removeFromWatchlist(movie) {
    console.log("removed", movie.title);
    const newWatchlist = watchlist.filter((m) => {
      return m.id !== movie.id;
    });
    setWatchlist(newWatchlist);
  }
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToWatchlist={addToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
                watchlist={watchlist}
              />
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
