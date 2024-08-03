import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {findAllByDisplayValue} from "@testing-library/react";
import {postActions} from "./redux/slices/postSlice";

const App: FC = ()=> {
    let {userSlice:{users, usersIsLoaded}, postSlice:{posts, postsIsLoaded }}=useAppSelector(state => state);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts());
    }, []);
    return (
    <div>
        {!usersIsLoaded && <div>Loading users in process</div>}
        {users.map(user=><div key={user.id}>{user.name}</div>)}
        {!postsIsLoaded && <div>Loading posts in process</div>}
        {posts.map(post=><div key={post.id}><h4>{post.title}</h4><p>{post.body}</p></div>)}
    </div>
  );
}

export default App;
