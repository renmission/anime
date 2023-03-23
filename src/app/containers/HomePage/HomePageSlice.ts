import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./types";

const initialState: IHomePageState = {
  animePage: null,
};

const HomePageSlice = createSlice({
  name: "HomePage",
  initialState,
  reducers: {
    setAnimePage: (state, action) => {
        state.animePage = action.payload
    }
  },
});

export const {setAnimePage} = HomePageSlice.actions;
export default HomePageSlice.reducer;
