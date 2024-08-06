import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";

interface IProps{
    post:IPost
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div><Link to={'/posts/' + post.id + '/comments'}>
            <h3>{post.id} - {post.title}</h3>
            <p>{post.body}</p>
        </Link>
        </div>
    );
};

export default PostComponent;