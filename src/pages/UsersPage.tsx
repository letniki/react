import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {usersApiService} from "../services/api.service";
import UsersComponent from "../components/Users/UsersComponent";

const UsersPage : FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        usersApiService.getAllUsers().then(value => setUsers(value.data));
    }, []);
    return (
        <div>
           <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;