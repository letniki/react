import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {loadUsers} from "../reducers/user/user.extra.reducers";


export type UserSliceType={
    users:IUser[],
    usersIsLoaded: boolean
}

const userInitState: UserSliceType ={
    users:[],
    usersIsLoaded: false
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers:{},
    extraReducers: (builder) => builder.addCase(loadUsers.fulfilled, (state, action) => {
        state.users=action.payload;
        state.usersIsLoaded = true;
    })
})

export const userActions ={
    ...userSlice.actions,
    loadUsers
}
