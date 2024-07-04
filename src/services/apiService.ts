import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const baseUrl='https://dummyjson.com';

export const getUsers = async (): Promise<IUser[]> => {
    const response = await axios.get<{ users: IUser[] }>(`${baseUrl}/users`);
    return response.data.users;
}

export const getUserPosts = async (userId: number): Promise<IPost[]> => {
    const response = await axios.get<{ posts: IPost[] }>(`${baseUrl}/users/${userId}/posts`);
    return response.data.posts;
}
