import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProps{
    post:IPost;
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h2>Id: {post.id} - UserId: {post.userId}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;