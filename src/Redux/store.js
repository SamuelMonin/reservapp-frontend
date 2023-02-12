import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservations";

export default configureStore({
  reducer: {
    reservations: reservationReducer
  }
});
