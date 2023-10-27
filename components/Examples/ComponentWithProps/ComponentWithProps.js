import styles from './ComponentWithProps.module.scss'

const ComponentWithProps = (props) => {
    const now = Date.now();

    return (
        <div className={styles.container}>
            <h1>ComponentWithProps</h1>
            <div>
                exampleValue from parent: {props.exampleValue}
            </div>
            <div>
                Time: {now}
            </div>
        </div>
    )
}

export default ComponentWithProps;
