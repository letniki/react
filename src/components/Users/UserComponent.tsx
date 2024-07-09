import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProps{
    user:IUser;
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <ul>
            <li>{user.id} - {user.name} - {user.username} - {user.email}</li>
        </ul>
    );
};

export default UserComponent;