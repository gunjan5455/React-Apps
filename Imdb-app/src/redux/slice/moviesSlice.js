import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (currentPage) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a271441f00ab65804138eacbcccc5fea&page=${currentPage}`
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loding: null,
    currentPage: 1,
  },
  reducers: {
    prevclick: (state) => {
      state.currentPage -= 1;
    },
    nextclick: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loding = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loding = false;
        state.movies = action.payload.results;
      })
      .addCase(fetchMovies.rejected, () => {
        console.log("rejected");
      });
  },
});
export const { prevclick, nextclick } = movieSlice.actions;
export default movieSlice.reducer;
