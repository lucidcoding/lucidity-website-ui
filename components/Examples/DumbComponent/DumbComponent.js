import styles from './DumbComponent.module.scss'

const DumbComponent = (props) => {
    const now = Date.now();

    return (
        <div className={styles.container}>
            <h1>DumbComponent</h1>
            <div>
                Time: {now}
            </div>
        </div>
    )
}

export default DumbComponent;
