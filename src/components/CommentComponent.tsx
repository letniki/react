import React, {FC} from 'react';
import {IComment} from "../models/IComment";
import {useAppSelector} from "../redux/store";

interface IProps{
    comment: IComment
}
const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h4>{comment.id}. {comment.name}</h4>
            <p>comment to post № {comment.postId}</p>
           <p> {comment.body} </p>
        </div>
    );
};

export default CommentComponent;