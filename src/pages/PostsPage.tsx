import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const {posts, postsIsLoaded, error} = useAppSelector(state => state.postStore);
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            {!postsIsLoaded && <p>Posts are loading</p>}
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;