import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

interface IProps{
    comment:IComment;
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h2>Id: {comment.id} - PostId: {comment.postId} - Email: {comment.email}</h2>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;