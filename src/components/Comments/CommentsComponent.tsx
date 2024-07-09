import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import CommentComponent from "./CommentComponent";

interface IProps{
    comments:IComment[] |undefined;
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments?.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;