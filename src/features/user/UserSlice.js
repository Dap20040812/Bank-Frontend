import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    name: "",
    lastName: "",
    document: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.lastName = action.payload.lastName;
            state.document = action.payload.document;
        },
        setSignOut: (state) => {
            state.name = null;
            state.lastName = null;
            state.document = null;
        }
    }
})

export const { setUserLogin, setSignOut} = userSlice.actions;
export const selecUserName = (state) => state.user.name;
export const selecUserLastName = (state) => state.user.lastName;
export const selecUserDocument = (state) => state.user.document;

export default userSlice.reducer;