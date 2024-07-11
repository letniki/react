import React, {FC, useEffect, useState} from 'react';
import {postsApiService} from "../services/api.service";
import PostsComponent from "../components/Posts/PostsComponent";
import {IPost} from "../models/IPost";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    let [searchParams] = useSearchParams();
    let page=searchParams.get('page');
    useEffect(() => {
        let skip;
        if(page){
            skip=+(page)*20-20;
            postsApiService.getPosts(skip.toString()).then(value => setPosts(value.data));
        }else{
        postsApiService.getAllPosts().then(value =>setPosts(value.data));
        }
    }, [page]);
    const [disablePrev] = useState<number>(1);
    const [disableNext] = useState<number>(5);
    return (
        <div>
            <PostsComponent posts={posts}/>
            <PaginationComponent isDisabled={{disablePrev, disableNext}}/>
        </div>
    );
};

export default PostsPage;