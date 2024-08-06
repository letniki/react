import {IPost} from "../../models/IPost";
import {createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {loadPost, loadPosts} from "../reducers/post/post.extra.reducers";

export type PostSliceType = {
    posts: IPost[],
    postsIsLoaded:boolean,
    post:IPost | null,
    error: string | null
}
const postInitState:PostSliceType ={
    posts:[],
    postsIsLoaded: false,
    post:null,
    error:''
}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers:{},
    extraReducers: builder =>builder.addCase(loadPosts.fulfilled, (state, action)=>{
    state.posts =action.payload;
    state.postsIsLoaded =true
    }).addCase(loadPosts.rejected, (state, action)=>{
        state.postsIsLoaded=false;
    }).addCase(loadPost.fulfilled, (state, action)=>{
        state.post = action.payload;
    }).addMatcher(isRejected(loadPosts, loadPost), (state, action)=>{
        state.error= action.payload as string;
}),
});

export const postActions ={
    ...postSlice.actions,
    loadPosts,
    loadPost
}