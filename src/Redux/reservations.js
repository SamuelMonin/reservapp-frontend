import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservations",
  initialState: {
    nameByHour: {},
    nameByHourBackend: {},
    selectedDate: new Date().toISOString().split('T')[0],
  },
  reducers: {

    updateNameByHour: (state, action) => {
      state.nameByHour[action.payload.startTime] = action.payload.name
    },

    setBothNameByHour: (state, action) => {
      state.nameByHour = action.payload
      state.nameByHourBackend = action.payload
    },

    resetNameByHour: (state, action) => {
      state.nameByHour[action.payload] = state.nameByHourBackend[action.payload]
    },

    updateNameByHourBackend: (state, action) => {
      state.nameByHourBackend[action.payload] = state.nameByHour[action.payload]
    },

    convertSelectedDate : (state, action) => {
      state.selectedDate = action.payload
    }

  }
});

// Action creators are generated for each case reducer function
export const { updateNameByHour, setBothNameByHour, resetNameByHour, updateNameByHourBackend, convertSelectedDate } = reservationSlice.actions;

export default reservationSlice.reducer;
