import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import UserComponent from "./UserComponent";

interface IProps{
    users:IUser[] | undefined;
}
const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {users?.map(user=><UserComponent key={user.id} user={user}></UserComponent>)}
        </div>
    );
};

export default UsersComponent;