import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {commentsApiService} from "../services/api.service";
import CommentsComponent from "../components/Comments/CommentsComponent";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CommentsPage :FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    let [searchParams]= useSearchParams();
    let page=searchParams.get('page');
    useEffect(() => {
        let skip;
        if(page){
            skip=+(page)*25-25;
            commentsApiService.getComments(skip.toString()).then(value => setComments(value.data));
        }else{
            commentsApiService.getAllComments().then(value => setComments(value.data));
        }

    }, [page]);
    const [disablePrev] = useState<number>(1);
    const [disableNext] = useState<number>(20);
    return (
        <div>
            <CommentsComponent comments={comments}/>
            <PaginationComponent isDisabled={{disablePrev, disableNext}}/>
        </div>
    );
};

export default CommentsPage;