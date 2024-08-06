import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import UserComponent from "./UserComponent";
import {Link} from "react-router-dom";

interface IProps{
    users:IUser[]
}
const UsersComponent: FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(user=><UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComponent;