import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

type IProps = { posts: IPostModel[] };

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => <div><span>id: {post.id}</span>
                    <h2>Title: {post.title}</h2>
                    <p><b>Body:</b> {post.body}</p></div>)
            }
        </div>
    );
};

export default PostsComponent;