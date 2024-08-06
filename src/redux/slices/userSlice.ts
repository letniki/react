import {createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {loadUser, loadUsers} from "../reducers/user/user.extra.reducers";


export type UserSliceType={
    users:IUser[],
    usersIsLoaded: boolean,
    error:string | null,
    user:IUser | null
}

const userInitState: UserSliceType ={
    users: [],
    usersIsLoaded:false,
    error:'',
    user:null
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},
    extraReducers: builder => {builder.addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.usersIsLoaded=true;
    }).addCase(loadUser.fulfilled, (state, action)=>{
        state.user=action.payload;
    }).addMatcher(isRejected(loadUsers, loadUser), (state, action)=>{
        state.error=action.payload as string;
    })}
});

export const userActions ={
    ...userSlice.actions,
    loadUsers,
    loadUser
}