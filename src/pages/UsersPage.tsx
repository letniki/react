import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {usersApiService} from "../services/api.service";
import UsersComponent from "../components/Users/UsersComponent";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const UsersPage : FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    let [searchParams] = useSearchParams();
    let page=searchParams.get('page');
    useEffect(() => {
        let skip;
        if(page){
            skip=Number(page)*2-2;
            usersApiService.getUsers(skip.toString()).then(value =>{
                setUsers(value.data);
            })
        }else {
            usersApiService.getAllUsers().then(value => {
                setUsers(value.data);
            })
        }

    }, [page]);
    const [disablePrev] = useState<number>(1);
    const [disableNext] = useState<number>(5);
    return (
        <div>
           <UsersComponent users={users}/>
            <PaginationComponent isDisabled={{disablePrev, disableNext}}/>
        </div>
    );
};

export default UsersPage;