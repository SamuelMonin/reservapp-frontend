import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    headerUserName: "",
    isConnected: false
  },
  reducers: {
    setHeaderUserName: (state, action) => {
        state.headerUserName = action.payload
    },

    setIsConnected: (state, action) => {
        state.isConnected = action.payload
    }



  }
});

// Action creators are generated for each case reducer function
export const { setHeaderUserName, setIsConnected } = appSlice.actions;

export default appSlice.reducer;
