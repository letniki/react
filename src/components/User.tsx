import React, {Component} from 'react';
import {IUser} from "../models/IUser";

interface UserProps{
    user:IUser;
    onSelectUser:(userId:number)=>void;
}

class User extends Component <UserProps, {}>{
choseSelectUser=()=>{
    this.props.onSelectUser(this.props.user.id);
}
    render() {
    const {user}=this.props;
        return (
            <div>
                <h2>{user.lastName} {user.firstName}</h2>
                <p>Email: {user.email}</p>
                <button onClick={this.choseSelectUser}> User posts</button>
            </div>
        );
    }
}

export default User;