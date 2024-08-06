import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";

const UserPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userStore);
    useEffect(() => {
        if(id){
            dispatch(userActions.loadUser(+id))
        }
    }, [id]);
    return (
        <ul>
            {user && <li>{user.id} - {user.name} - {user.email}</li> }
        </ul>
    );
};

export default UserPage;