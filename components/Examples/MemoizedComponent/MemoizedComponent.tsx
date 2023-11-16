import React, { useEffect, useState } from "react";
import styles from './MemoizedComponent.module.scss'
import RerenderSignal from "../RerenderSignal/RerenderSignal";

const MemoizedComponent = (): JSX.Element => {
    const now = Date.now();

    useEffect(() => {
        console.log("MemoisedComponent.useEffect - every time")
    });

    return (
        <div className={styles.container}>
            <RerenderSignal />
            <h1>MemoizedComponent</h1>
            <div suppressHydrationWarning>
                Time: {now}
            </div>
        </div>
    )
}

export default React.memo(MemoizedComponent);
