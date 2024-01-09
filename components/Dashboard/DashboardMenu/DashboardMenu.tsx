import { useState } from "react";
import CalendarIcon from "../../../icons/calendar";
import ChartBarIcon from "../../../icons/chart-bar";
import ChartDonutIcon from "../../../icons/chart-donut";
import ChartLineIcon from "../../../icons/chart-line";
import ChevronDownIcon from "../../../icons/chevron-down";
import GaugeIcon from "../../../icons/gauge";
import styles from "./DashboardMenu.module.scss";
import IDashboardMenuProps from "./IDashboardMenuProps";

const DashboardMenu = (props: IDashboardMenuProps): JSX.Element => {
    const [periodExpanded, setPeriodExpanded] = useState(false);

    const timePeriodOptions = [
        { text: "2023", startDate: new Date(2023, 0, 1, 0, 0, 0), endDate: new Date(2023, 11, 31, 23, 59, 59) },
        { text: "2022", startDate: new Date(2022, 0, 1, 0, 0, 0), endDate: new Date(2022, 11, 31, 23, 59, 59) },
        { text: "2021", startDate: new Date(2021, 0, 1, 0, 0, 0), endDate: new Date(2021, 11, 31, 23, 59, 59) },
        { text: "2020", startDate: new Date(2020, 0, 1, 0, 0, 0), endDate: new Date(2020, 11, 31, 23, 59, 59) },
    ];

    const onPeriodHeadingClick = () => {
        setPeriodExpanded(!periodExpanded);
    };

    return (
        <div className={styles.container} data-testid="dashboard-menu">
            <div className={styles.header}></div>
            <h2>Time Period</h2>
            <button type="button" onClick={onPeriodHeadingClick} data-testid="dashboard-menu-period-drop-down-button">
                <div className={styles.icon}>
                    <CalendarIcon></CalendarIcon>
                </div>
                <div className={styles.text}>
                    All Time
                </div>
                <div className={`${styles.icon} ${styles.spinOnExpand} ${periodExpanded ? styles.expanded : ""}`}>
                    <ChevronDownIcon></ChevronDownIcon>
                </div>
            </button>
            <div
                className={`${styles.dropDown} ${periodExpanded ? styles.expanded : ""}`}
                style={periodExpanded ? { height: (40 * timePeriodOptions.length) + "px" } : { height: "0px" }}
                data-testid="dashboard-menu-period-drop-down-list">
                {timePeriodOptions.map((item, index) =>
                    <button type="button"
                        className={styles.noIcon}
                        onClick={() => props.onPeriodClick(item.startDate, item.endDate)}
                        key={index}>
                        {item.text}
                    </button>)
                }
            </div>
            <h2>Add Widget</h2>
            <button type="button" onClick={props.onAddTile} data-testid="dashboard-menu-add-gauge">
                <div className={styles.icon}>
                    <GaugeIcon></GaugeIcon>
                </div>
                <div className={styles.text}>
                    Gauge
                </div>
            </button>
            <button type="button" onClick={props.onAddTile} data-testid="dashboard-menu-add-bar-chart">
                <div className={styles.icon}>
                    <ChartBarIcon></ChartBarIcon>
                </div>
                <div className={styles.text}>
                    Bar Chart
                </div>
            </button>
            <button type="button" onClick={props.onAddTile} data-testid="dashboard-menu-add-graph">
                <div className={styles.icon}>
                    <ChartLineIcon></ChartLineIcon>
                </div>
                <div className={styles.text}>
                    Graph
                </div>
            </button>
            <button type="button" onClick={props.onAddTile} data-testid="dashboard-menu-add-donut-chart">
                <div className={styles.icon}>
                    <ChartDonutIcon></ChartDonutIcon>
                </div>
                <div className={styles.text}>
                    Donut Chart
                </div>
            </button>
        </div>
    );
};

export default DashboardMenu;
