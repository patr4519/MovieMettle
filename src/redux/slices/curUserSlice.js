import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const curUserSlice = createSlice({
  name: "curUser",
  initialState,
  reducers: {
    addCurUser: (state, action) => {
      state.items[0] = action.payload;
    },
    clearCurUser: () => {
      return initialState;
    },
  },
});

export const selectCurUser = (state) => state.curUser;

export const { addCurUser, clearCurUser } = curUserSlice.actions;

export default curUserSlice.reducer;
