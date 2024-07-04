import React, {Component} from 'react';
import {getUsers} from "../services/apiService";
import {IUser} from "../models/IUser";
import User from "./User";

interface UsersState{
    users:IUser[]
}
interface UsersProps{
onSelectUser:(userId:number)=>void;
}

class Users extends Component<UsersProps,UsersState> {
    state:UsersState={
        users:[]
    }
componentDidMount() {
    getUsers().then(users=>{
        this.setState({users});
    })
}

    render() {
        const {users}=this.state;
        const {onSelectUser}=this.props;
        return (
            <div>
                {users.map(user=>(<User key={user.id} user={user} onSelectUser={onSelectUser}/>

            ))}
            </div>
        );
    }
}

export default Users;