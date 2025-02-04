import "./app.css";
import Home from "./Pages/home/Home";
import Navbar from "./components/navbar/Navbar";
// import WatchList from "./Pages/watchlist/WatchList";
import { BrowserRouter, Routes, Route } from "react-router";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Counter from "./components/counter/Counter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import TodoList from "./Pages/todoList/TodoList";
const WatchList = lazy(() => import("./Pages/watchlist/WatchList"));
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
      <Provider store={store}>
        <WatchListContext.Provider
          value={{ watchlist, addToWatchlist, removeFromWatchlist }}
        >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/watchlist"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <WatchList />
                  </Suspense>
                }
              />
              <Route path="/counter" element={<Counter />} />
              <Route path="/todo" element={<TodoList />} />
            </Routes>
          </BrowserRouter>
        </WatchListContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
