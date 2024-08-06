import React, {FC} from 'react';
import {IComment} from "../models/IComment";
import CommentComponent from "./CommentComponent";

interface IProps{
    comments: IComment[]
}
const CommentsComponent :FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment =><CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;