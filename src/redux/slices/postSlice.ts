import {IPost} from "../../models/IPost";
import {createSlice} from "@reduxjs/toolkit";
import {loadPosts} from "../reducers/user/user.extra.reducers";


export type PostSliceType ={
    posts:IPost[],
    postsIsLoaded:boolean
}
const postInitialState:PostSliceType={
    posts:[],
    postsIsLoaded:false
};

export const postSlice=createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers:{},
    extraReducers:(builder)=>builder.addCase(loadPosts.fulfilled, (state,action)=>{
        state.posts=action.payload;
        state.postsIsLoaded=true;
    })
});

export const postActions ={
    ...postSlice.actions,
    loadPosts
}