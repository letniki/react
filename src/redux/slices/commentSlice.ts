import {createSlice, isRejected} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment";
import {loadComments, loadCommentsByPostId} from "../reducers/comment/comment.extra.reducers";

export type CommentSliceType ={
    comments:IComment[],
    commentsIsLoaded: boolean,
    error: string | null
}
const commentInitState: CommentSliceType={
    comments:[],
    commentsIsLoaded:false,
    error: null
}
export const commentSlice = createSlice({
    name:'commentSlice',
    initialState: commentInitState,
    reducers:{},
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action)=>{
        state.comments = action.payload;
        state.commentsIsLoaded= true;
    }).addCase(loadCommentsByPostId.fulfilled, (state, action)=>{
       state.comments = action.payload;
       state.commentsIsLoaded = true;
    }).addMatcher(isRejected(loadComments, loadCommentsByPostId), (state, action)=>{
        state.error = action.payload as string;
    })
});
export const commentActions={
    ...commentSlice.actions,
    loadComments,
    loadCommentsByPostId
}