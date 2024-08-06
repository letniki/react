import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    const {users, usersIsLoaded,error} = useAppSelector(state => state.userStore);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);
    return (
        <div>
            {!usersIsLoaded && <p>Users are Loading</p>}
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;