import styles from "./InfographicsRoot.module.scss";

const InfographicsRoot = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
            </div>
            <div className={styles.lozenge}>
                <h1>
                    coming soon...
                </h1>
            </div>
        </div>
    );
};

export default InfographicsRoot;
