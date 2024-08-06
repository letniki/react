import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";
import {useAppSelector} from "../redux/store";

interface IProps{
    user: IUser
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <ul>
            <li><Link to={'/users/'+ user.id}>{user.id}-{user.name}</Link></li>
            </ul>
        </div>
    );
};

export default UserComponent;