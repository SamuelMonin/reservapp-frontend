import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import reservationReducer from "./reservations";


export default configureStore({
  reducer: {
    app: appSliceReducer,
    reservations: reservationReducer
  }
});
