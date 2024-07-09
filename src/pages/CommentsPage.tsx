import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {commentsApiService} from "../services/api.service";
import CommentsComponent from "../components/Comments/CommentsComponent";

const CommentsPage :FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentsApiService.getAllComments().then(value => setComments(value.data));
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;