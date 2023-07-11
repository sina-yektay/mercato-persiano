import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./feedback.selectors";


type feedbackType = {  isOpen: boolean, message: string; type: AlertColor };

const initialState: feedbackType = {
  isOpen: false,
  message: "",
  type: "success",
};

type feedbackAction = {
    payload: { isOpen: boolean , message: string, type: AlertColor};
  }

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
      setFeedback: (state, action: feedbackAction) => {
        state.isOpen = action.payload.isOpen;
        state.message = action.payload.message;
        state.type = action.payload.type;
      },

    },
  });


  export { selectors };
  export default feedbackSlice.reducer;