import axios from "axios";
import {IUser} from "../models/IUser";
import {baseUrl, urls} from "../constants/urls";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
});

const userService = {
    getUsers:async ()=>{
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data
    }
}
const postService ={
    getPosts: async ()=>{
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    }
}

export {
    userService,
    postService
}