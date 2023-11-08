import React, { useEffect, useRef, useState } from "react";
import styles from './RerenderSignal.module.scss'

const RerenderSignal = (): JSX.Element => {
    const mounted = useRef<boolean>(false);
    const mainDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("RerenderSignal.useEffect - every time")
        if (mainDiv.current) {
            //mainDiv.current.classList.add(`${styles.fade}`);
            mainDiv.current.style.transform = "rotate(180deg)"
        }

        /*return () => {
            if (mainDiv.current) {
                mainDiv.current.classList.remove(`${styles.fade}`);
            }
        }*/
    });

    return (
        <div className={styles.container} ref={mainDiv} style={{ transform: "rotate(0deg)" }}>
            <h1>Test</h1>
        </div>
    )
}

export default RerenderSignal;
