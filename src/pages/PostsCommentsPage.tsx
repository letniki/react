import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentService} from "../services/api_service";
import {commentActions} from "../redux/slices/commentSlice";
import {useParams} from "react-router-dom";
import CommentComponent from "../components/CommentComponent";
import {postActions} from "../redux/slices/postSlice";

const PostsCommentsPage = () => {
    const dispatch= useAppDispatch();
    const {postId} = useParams();
    const {comments} = useAppSelector(state => state.commentStore);
    const {post, postsIsLoaded} = useAppSelector(state => state.postStore);
    useEffect(() => {
        if(postId){
            dispatch(commentActions.loadCommentsByPostId(+postId));
            dispatch(postActions.loadPost(+postId))
        }
    }, [postId]);
    return (
        <div>
            {!postsIsLoaded && <p>Posts is loading</p>}
            {post &&<h3>{post.id} - {post.title}</h3>}
            {comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostsCommentsPage;