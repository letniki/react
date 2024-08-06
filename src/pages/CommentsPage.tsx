import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const {comments, commentsIsLoaded, error} = useAppSelector(state => state.commentStore);
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);
    return (
        <div>
            {!commentsIsLoaded && <p>Comments are loading</p>}
          <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;