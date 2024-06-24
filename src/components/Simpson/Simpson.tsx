import React, {FC} from 'react';
import ISimpson from "../../model/ISimpson";
import styles from './Simpsons.module.css';


const Simpson :FC <ISimpson> = ({name, surname, age, photo, info}) => {
    return (
        <div className={styles.simpsons}>
            <h3>{name} - {surname} - {age} y.o.</h3>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export default Simpson;