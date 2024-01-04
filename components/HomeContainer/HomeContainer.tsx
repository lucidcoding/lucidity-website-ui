import styles from "./HomeContainer.module.scss";

const HomeContainer = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
            </div>
            <div className={styles.lozenge}>
                <h1>
                    full-stack software developer
                </h1>
                <p>
                    I am a software engineer with 20 years experience.
                    I am proficient in a wide rage of languages but I specialise
                    in C#/.NET &amp; Java for back-end development,
                    and JavaScript/TypeScript &amp; React for front-end.
                </p>
            </div>
        </div>
    );
};

export default HomeContainer;
