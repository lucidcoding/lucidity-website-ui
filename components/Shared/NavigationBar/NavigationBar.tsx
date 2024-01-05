import Link from "next/link";
import styles from "./NavigationBar.module.scss";

const NavigationBar = (): JSX.Element => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                LUCIDITY
            </div>
            <Link className={styles.item} href="/" data-testid="navigation-bar-home-link">
                HOME
            </Link>
            <Link className={styles.item} href="/infographics" data-testid="navigation-bar-infographics-link">
                INFOGRAPHICS
            </Link>
            <Link className={styles.item} href="/dashboard" data-testid="navigation-bar-dashboard-link">
                DASHBOARDS
            </Link>
            <Link className={styles.item} href="/about" data-testid="navigation-bar-about-link">
                ABOUT
            </Link>
        </nav>
    );
};

export default NavigationBar;
