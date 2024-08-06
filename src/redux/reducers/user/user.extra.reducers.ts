import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService, userService} from "../../../services/api_service";
import {AxiosError} from "axios";


export const loadUsers = createAsyncThunk(
    'UserSlice/loadUsers',
    async (_, thunkAPI) =>{
        try {
            const users = await userService.getUsers();
        return thunkAPI.fulfillWithValue(users);
        }catch (e){
            const e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1?.response?.data);
        }
    }
);
export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id:number, thunkAPI)=>{
        try{
            const user = await userService.getUserById(id);
            return thunkAPI.fulfillWithValue(user);
        }catch(e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    })
