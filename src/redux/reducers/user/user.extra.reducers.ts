import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService, userService} from "../../../services/api_service";
import {AxiosError} from "axios";

export const loadUsers =createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) =>{
        try {
            const response = await userService.getUsers();
            return thunkAPI.fulfillWithValue(response);
        }
        catch (e){
            let e1=e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)

export const loadPosts =createAsyncThunk(
    'postSlice/loadPosts',
    async(_, thunkAPI)=>{
        try{
            const response = await postService.getPosts();
            return thunkAPI.fulfillWithValue(response);
        }catch(e){
            let e2=e as AxiosError;
            return thunkAPI.rejectWithValue(e2);
        }
    }
)