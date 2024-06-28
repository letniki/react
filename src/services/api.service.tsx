import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

const getAllUsers = async () : Promise<IUserModel[]>=> {
    return await axiosInstance.get('/users'+'?limit=0').then((response) => response.data.users)
};

const getAllPostsByUserId = async (id:number) : Promise<IPostModel[]>=> {
    return await axiosInstance.get('/posts/user/'+id).then((response) => response.data.posts)
}

export {getAllUsers,getAllPostsByUserId}