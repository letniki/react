import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
});

const usersApiService={
    getAllUsers: ():Promise<AxiosResponse<IUser[]>> =>{
        return axiosInstance.get("/users");
    }
}
const postsApiService={
    getAllPosts:():Promise<AxiosResponse<IPost[]>> =>{
        return axiosInstance.get('/posts');
    }
}
const commentsApiService={
    getAllComments:() :Promise<AxiosResponse<IComment[]>> =>{
       return axiosInstance.get('/comments');
    }
}

export{
    usersApiService,
    postsApiService,
    commentsApiService
};