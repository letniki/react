import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from "../../styles/User.module.css"

type IProps = { user: IUserModel } & { getPosts: (id: number) => void };

const UserComponent: FC<IProps> = ({user, getPosts}) => {

    return (
        <div className={styles.userBlock}>
            <span>{user.id}</span>
            <h2>{user.firstName} {user.lastName}</h2>
            <p><b>Email:</b> {user.email} - <b>Phone:</b> {user.phone}</p>
            <button onClick={() => {
                getPosts(user.id);
            }} className={styles.postButton}>Вивести публікації користувача
            </button>
        </div>
    );
};

export default UserComponent;