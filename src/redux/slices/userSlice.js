import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser:(state,action)=> {
            state.users = [...state.users, action.payload];
        },
        removeUser:(state,action)=> {
            const newSetofUsers = state.users.filter((user) => user.id !== action.payload);
            state.users = newSetofUsers;
        },
        setUser:(state,action) => {
            state.users = [...action.payload];
        }
    }
})

export const { addUser, removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;


