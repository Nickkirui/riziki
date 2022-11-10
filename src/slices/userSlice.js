import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState: { user: localStorage.getItem("user")},
    reducers: {
        getUser(state, action){
            console.log(action.payload.email)
            state.user = action.payload
        }
    }
})


export const { getUser } = userSlice.actions
export default userSlice.reducer