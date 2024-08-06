import axios from "axios";
import {IUser} from "../models/IUser";
import {baseUrl, urls} from "../constants/urls";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
});

const userService = {
    getUsers:async ():Promise<IUser[]>=>{
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data
    },
    getUserById: async (id:number):Promise<IUser>=>{
        const response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
    }
}
const postService ={
    getPosts: async (): Promise<IPost[]>=>{
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getPostById: async (id:number):Promise<IPost>=>{
        const response = await axiosInstance.get<IPost>(urls.posts.byId(id));
        return response.data;

    }
}
const commentService={
    getComments: async ():Promise<IComment[]> =>{
        const response = await axiosInstance.get<IComment[]>(urls.comments.base);
        return response.data;
    },
    getCommentsByPostId: async (postId:number):Promise<IComment[]>=>{
        const response = await axiosInstance.get<IComment[]>(urls.comments.byPostId(postId));
        return response.data;
    }
}

export {
    userService,
    postService,
    commentService
}