import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.css"
const HeaderComponent = () => {
    return (
        <div className={styles.navBlock}>
            <Link to={'/'}>Home page</Link>
            <Link to={'users'}>Users page</Link>
            <Link to={'posts'}>Posts page</Link>
            <Link to={'comments'}>Comments page</Link>
        </div>
    );
};

export default HeaderComponent;