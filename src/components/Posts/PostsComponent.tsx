import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import PostComponent from "./PostComponent";

interface IProps{
    posts:IPost[] | undefined;
}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts?.map(post=><PostComponent key={post.id} post={post}></PostComponent>)}
        </div>
    );
};

export default PostsComponent;