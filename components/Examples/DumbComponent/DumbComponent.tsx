import React, { useEffect, useRef, useState } from "react";
import styles from './DumbComponent.module.scss';

const DumbComponent = (): JSX.Element => {
    const now = Date.now();

    useEffect(() => {
        console.log("DumbComponent.useEffect - every time");
    });

    return (
        <div className={styles.container} key={`${now}-key1`} >
            <h1>DumbComponent</h1>
            <div suppressHydrationWarning>
                Time: {now}
            </div>
        </div>
    )
}

export default DumbComponent;
