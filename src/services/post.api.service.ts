import axios, {AxiosResponse} from "axios";
import {IForm} from "../models/IForm";

let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})

const postPost=async (data:IForm): Promise<AxiosResponse>=>{
   const response= await axiosInstance.post<IForm>('/posts',{
        userId:data.userId,
        title: data.title,
        body:data.body
    });
    console.log(response.data);
    return response
}
export{postPost}