import React, {FC, useEffect, useState} from 'react';
import {postsApiService} from "../services/api.service";
import PostsComponent from "../components/Posts/PostsComponent";
import {IPost} from "../models/IPost";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postsApiService.getAllPosts().then(value =>setPosts(value.data));
    }, []);
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;