import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import PostComponent from "./PostComponent";

interface IProps{
    posts:IPost[]
}
const PostsComponent: FC<IProps>= ({posts}) => {
    return (
        <div>
            {posts.map(post=><PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;