import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    removeTask: (state, action) => {
      console.log("delete action", action.payload);
      state.todoList = state.todoList.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});
export const { addTask, removeTask } = TodoSlice.actions;
export default TodoSlice.reducer;
