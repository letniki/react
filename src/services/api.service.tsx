import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
});
// let start=+(UsersPage.page);
const usersApiService={
    getAllUsers: ():Promise<AxiosResponse<IUser[]>> =>{
        return axiosInstance.get('users', {
            params:{
                _limit:2
            }
        });
    },
    getUsers: (page:string):Promise<AxiosResponse<IUser[]>> =>{
    return axiosInstance.get('users',{
        params:{
            _start: page,
            _limit:2
        }
    });
}
}
const postsApiService={
    getAllPosts:():Promise<AxiosResponse<IPost[]>> =>{
        return axiosInstance.get('posts',{
            params:{
                _limit:20
            }
        });
    },
    getPosts:(page:string):Promise<AxiosResponse<IPost[]>> =>{
        return axiosInstance.get('posts',{
            params:{
                _start:page,
                _limit:20
            }
        })
    }
}
const commentsApiService={
    getAllComments:() :Promise<AxiosResponse<IComment[]>> =>{
       return axiosInstance.get('comments',{
           params:{
               _limit:25
           }
       });
    },
    getComments:(page:string): Promise<AxiosResponse<IComment[]>> =>{
        return axiosInstance.get('comments',{
            params:{
                _start:page,
                _limit:25
            }
        })
    }
}

export{
    usersApiService,
    postsApiService,
    commentsApiService
};