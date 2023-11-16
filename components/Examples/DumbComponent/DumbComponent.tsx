import React, { useEffect } from "react";
import styles from './DumbComponent.module.scss';
import RerenderSignal from "../RerenderSignal/RerenderSignal";

const DumbComponent = (): JSX.Element => {
    const now = Date.now();

    useEffect(() => {
        console.log("DumbComponent.useEffect - every time");
    });

    return (
        <div className={styles.container} >
            <RerenderSignal />
            <h1>DumbComponent</h1>
            <div suppressHydrationWarning>
                Time: {now}
            </div>
        </div>
    )
}

export default DumbComponent;
