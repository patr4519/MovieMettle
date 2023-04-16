import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const curUserSlice = createSlice({
  name: "curUser",
  initialState,
  reducers: {
    addCurUser: (state, action) => {
      console.log('Added in state: ' + action.payload.login)
      state.items[0] = action.payload;
    },
  },
});

export const selectCurUser = (state) => state.curUser;

export const { addCurUser } = curUserSlice.actions;

export default curUserSlice.reducer;
