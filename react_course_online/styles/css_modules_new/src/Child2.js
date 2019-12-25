import React from 'react';
import styles from './Child2.module.css';

function Child2(){
    console.log(styles);
    return <h2 className={styles.child}>this color is blue</h2>;
}

export default Child2;