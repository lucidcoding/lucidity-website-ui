import React, { useState, useCallback } from "react";
import styles from './MemoizedParent.module.scss'
import DumbComponent from "../DumbComponent/DumbComponent";

const MemoizedParent = (props) => {
    const [exampleValue, setExampleValue] = useState(0)

    const handleClick = () => {
        setExampleValue(exampleValue + 1);
    };

    const now = Date.now();

    const memoizedExampleValue = useCallback([exampleValue])

    return (
        <div className={styles.container}>
            <h1>MemoizedParent</h1>
            <div>exampleValue: {exampleValue}
                &nbsp;
                <button onClick={handleClick}>Increment!</button>
            </div>
            <div>
                Time: {now}
            </div>
            <DumbComponent></DumbComponent>
        </div>
    )
}

export default MemoizedParent;
