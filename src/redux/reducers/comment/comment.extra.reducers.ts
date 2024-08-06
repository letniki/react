import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {commentService} from "../../../services/api_service";

export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI)=>{
        try{
           const comments = await commentService.getComments();
           return thunkAPI.fulfillWithValue(comments);
        }catch(e){
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err?.response?.data);
        }
    }
);
export const loadCommentsByPostId = createAsyncThunk(
    'commentSlice/loadCommentsByPostId',
    async (postId:number, thunkAPI)=>{
        try{
        const comments = await commentService.getCommentsByPostId(postId);
        return thunkAPI.fulfillWithValue(comments);
    }catch(e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)