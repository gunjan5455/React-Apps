import "./app.css";
import Home from "./Pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import WatchList from "./Pages/watchlist/WatchList";
import { BrowserRouter, Routes, Route } from "react-router";
import React, { useEffect, useState } from "react";
export const WatchListContext = React.createContext();
const App = () => {
  const [watchlist, setWatchlist] = useState(setToLocalStorage());
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
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
  function setToLocalStorage() {
    const watchlistOnStorage = JSON.parse(localStorage.getItem("watchlist"));
    if (watchlistOnStorage == null) {
      return [];
    }
    return watchlistOnStorage;
  }
  return (
    <div className="">
      <WatchListContext.Provider
        value={{ watchlist, addToWatchlist, removeFromWatchlist }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </BrowserRouter>
      </WatchListContext.Provider>
    </div>
  );
};

export default App;
