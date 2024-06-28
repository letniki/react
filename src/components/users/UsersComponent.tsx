import React, {useEffect, useState} from 'react';
import UserComponent from "../user/UserComponent";
import {IUserModel} from "../../models/IUserModel";
import PostsComponent from "../posts/PostsComponent";
import {IPostModel} from "../../models/IPostModel";
import styles from "../../styles/Users.module.css"
import {getAllPostsByUserId, getAllUsers} from "../../services/api.service";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        getAllUsers()
            .then((users:IUserModel[]) => {
                setUsers([...users]);
            });
    }, []);


    const getPosts = (id: number) => {
        getAllPostsByUserId(id).then(posts => setPosts([...posts]))
    }


    return (
        <div className={styles.twoColumn}>
            <div>
                {
                    users.map((user:IUserModel) =>
                        <UserComponent
                            key={user.id}
                            user={user}
                            getPosts={getPosts}
                        />
                    )
                }
            </div>
            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;