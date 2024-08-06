import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService} from "../../../services/api_service";
import {AxiosError} from "axios";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getPosts();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err?.response?.data);
        }
    }
);
export const loadPost = createAsyncThunk(
    'postSlice/loadPost',
    async (id:number, thunkAPI)=>{
        try{
        const post = await postService.getPostById(id);
        return thunkAPI.fulfillWithValue(post);
        }catch(e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);