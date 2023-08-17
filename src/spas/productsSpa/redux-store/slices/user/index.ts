import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./user.interface";
import * as extraActions from "../../extra-actions";
import * as selectors from "./user.selectors";
const initialState: userState = {
  email: "",
  address: "",
  phone: "",
  name: "",
};

type userStateType = {
  payload: {
    email: string;
    address: string;
    phone: string;
    name: string;
  };
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUserToState: (state, { payload }: userStateType) => {
      state = { ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.getUser.success, (state, action) => {
      state.name = action.payload.data.data.name;
      state.phone = action.payload.data.data.phone;
      state.address = action.payload.data.data.address;
      state.email = action.payload.data.data.email;
    });
  },
});
export { selectors };
export default userSlice.reducer;
