import React from "react";
import styles from './RerenderSignal.module.scss'

const RerenderSignal = (): JSX.Element => {
    const now = Date.now();

    return (
        <div className={styles.container} >
            <div className={styles.inner} key={`${now}-key1`} ></div>
        </div>
    )
}

export default RerenderSignal;
