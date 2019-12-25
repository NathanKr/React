import React from 'react';
import styles from  './Child1.module.css';

function Child1(){
    console.log(styles);
    return <h2 className={styles.child}>this color is red</h2>;
}

export default Child1;