import axios from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponseModel} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefresh} from "../models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/helpers";
import {CarPaginatedModel} from "../models/CarPaginatedModel";

let axiosInstanse=axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v2/'
});

axiosInstanse.interceptors.request.use(requestObject=>{

    if(localStorage.getItem('tokenPair') && (requestObject.url !=='/auth' && requestObject.url !== '/auth/refresh')){
        requestObject.headers.set('Authorization','Bearer '+ retriveLocalStorageData<TokenRefresh>('tokenPair').access);
    }
    return requestObject;
})

const userService={
    createUser: async (data: UserModel):Promise<boolean> =>{
        let response = await axiosInstanse.post<UserResponseModel>('/users', data);
        return !!response.data.id || false;
    }
}

const authService={
    authenticate: async (data:TokenObtainPairModel):Promise<void> =>{
        const response = await axiosInstanse.post<TokenRefresh>('/auth', data);
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },
    refresh: async (): Promise<void> =>{
        const refreshToken = retriveLocalStorageData<TokenRefresh>('tokenPair').refresh;
        const response = await axiosInstanse.post<TokenRefresh>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
}

const carService={
    getCars: async (page : string ='1'):Promise<CarPaginatedModel> =>{
        const response = await axiosInstanse.get<CarPaginatedModel>('/cars', {params:{page}});
        return response.data;
    }
}

export{userService, authService, carService}