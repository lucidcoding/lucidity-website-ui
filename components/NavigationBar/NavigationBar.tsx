import Link from 'next/link'
import styles from "./NavigationBar.module.scss";

const NavigationBar = (): JSX.Element => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                LUCIDITY SOFTWARE
            </div>
            <Link className={styles.item} href="/">
                HOME
            </Link>
            <Link className={styles.item} href="/infographics">
                INFOGRAPHICS
            </Link>
            <Link className={styles.item} href="/dashboard">
                DASHBOARDS
            </Link>
            <Link className={styles.item} href="/about">
                ABOUT
            </Link>
        </nav>
    );
}

export default NavigationBar;
