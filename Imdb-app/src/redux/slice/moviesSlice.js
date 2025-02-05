import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
console.log(import.meta.env);
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (currentPage) => {
    const res = await fetch(
      `${import.meta.env.VITE_MOVIES_BACKEND_URL}${currentPage}`
    );
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: null,
    currentPage: 1,
  },
  reducers: {
    prevclick: (state) => {
      state.currentPage -= 1;
    },
    nextclick: (state) => {
      state.currentPage += 1;
      console.log("Next clicked, currentPage:", state.currentPage);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        console.log("Fetch failed:", action.error);
      });
  },
});
export const { prevclick, nextclick } = movieSlice.actions;
export default movieSlice.reducer;
