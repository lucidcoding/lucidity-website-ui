import { RefObject, useRef } from "react";
import styles from "./NavigationBar.module.scss";

const NavigationBar = (): JSX.Element => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                LUCIDITY SOFTWARE
            </div>
            <a className={styles.item}>
                DATA VISUALISATION
            </a>
            <a className={styles.item}>
                CUSTOMISABLE DASHBOARD
            </a>
            <a className={styles.item}>
                ABOUT
            </a>
        </nav>
    );
}

export default NavigationBar;
