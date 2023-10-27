import React from 'react';
import styles from './MemoizedComponent.module.scss'

const MemoizedComponent = () => {
    const now = Date.now();

    return (
        <div className={styles.container}>
            <h1>MemoizedComponent</h1>
            This one uses React.memo to prevent re-rendering when the parent does.
            <div>
                Time: {now}
            </div>
        </div>
    )
}

export default React.memo(MemoizedComponent);