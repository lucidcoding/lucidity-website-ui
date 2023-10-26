import React, { useEffect, useState, useRef, Component } from "react";
import GridStackTile from '../GridStackTile/GridStackTile.js';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import styles from './GridStackPanel.module.scss';
import CloseIcon from '../../icons/close.js';
import CalendarIcon from '../../icons/calendar.js';
import ChartLineIcon from '../../icons/chart-line.js';
import ChartBarIcon from '../../icons/chart-bar.js';
import ChartDonutIcon from '../../icons/chart-donut.js';
import ChevronDownIcon from '../../icons/chevron-down.js';
import GaugeIcon from '../../icons/gauge.js';

const GridStackPanel = (props) => {
    const [periodExpanded, setPeriodExpanded] = useState(false);
    const initialTileData = [
        {
            key: 0,
            width: 4,
            height: 3,
            x: 0,
            y: 0,
            content: 'Some Data Metric'
        },
        {
            key: 1,
            width: 4,
            height: 3,
            content: 'Another Data Metric'
        },
        {
            key: 2,
            width: 4,
            height: 3,
            content: 'Third Data Metric'
        },
        {
            key: 3,
            width: 4,
            height: 3,
            content: 'Fourth Data Metric'
        },
        {
            key: 4,
            width: 4,
            height: 3,
            content: 'Fifth  Data Metric'
        }
    ];

    const timePeriodOptions = [
        { text: '2023' },
        { text: '2022' },
        { text: '2021' },
        { text: '2020' },
    ];

    const [tileData, setTileData] = useState(initialTileData);
    let grid;

    console.log(tileData);
    useEffect(() => {
        grid = GridStack.init();
        grid.margin('12px');
    });

    const mounted = useRef();
    const lastKeyAdded = useRef(null);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            if (lastKeyAdded.current) {
                grid.makeWidget(`#${lastKeyAdded.current}`);
                lastKeyAdded.current = null;
            }
        }
    });

    const handleAddTile = () => {
        const newTileData = [...tileData];
        var existingKeys = newTileData.map(element => element.key);
        var nextKey = Math.max(...existingKeys) + 1;

        newTileData.push({
            key: nextKey,
            width: 1,
            height: 1,
            content: `tile ${nextKey}`
        });

        setTileData(newTileData);
        lastKeyAdded.current = nextKey;
    }

    const handleTileClose = (ref, key) => {
        grid.removeWidget(ref.current, false);
        const newTileData = [...tileData];
        var currentTile = newTileData.find((element) => element.key == key);
        var tileIndex = newTileData.indexOf(currentTile);
        newTileData.splice(tileIndex, 1);
        setTileData(newTileData);
    };

    const handlePeriodClick = () => {
        setPeriodExpanded(!periodExpanded);
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.header}></div>
                <h2>Time Period</h2>
                <button type="button" onClick={handlePeriodClick}>
                    <div className={styles.icon}>
                        <CalendarIcon></CalendarIcon>
                    </div>
                    <div className={styles.text}>
                        All Time
                    </div>
                    <div className={`${styles.icon} ${styles.spinOnExpand} ${periodExpanded ? styles.expanded : ''}`}>
                        <ChevronDownIcon></ChevronDownIcon>
                    </div>
                </button>
                <div className={`${styles.dropDown} ${periodExpanded} ? 'styles.expanded' : ''}`} style={periodExpanded ? { height: (40 * timePeriodOptions.length) + 'px' } : {}}>
                    {timePeriodOptions.map((item, index) =>
                        <button type="button" className={styles.noIcon} onClick={handleAddTile}>
                            {item.text}
                        </button>
                    )}
                </div>
                <h2>Add Widget</h2>
                <button type="button" onClick={handleAddTile}>
                    <div className={styles.icon}>
                        <GaugeIcon></GaugeIcon>
                    </div>
                    <div className={styles.text}>
                        Gauge
                    </div>
                </button>
                <button type="button" onClick={handleAddTile}>
                    <div className={styles.icon}>
                        <ChartBarIcon></ChartBarIcon>
                    </div>
                    <div className={styles.text}>
                        Bar Chart
                    </div>
                </button>
                <button type="button" onClick={handleAddTile}>
                    <div className={styles.icon}>
                        <ChartLineIcon></ChartLineIcon>
                    </div>
                    <div className={styles.text}>
                        Graph
                    </div>
                </button>
                <button type="button" onClick={handleAddTile}>
                    <div className={styles.icon}>
                        <ChartDonutIcon></ChartDonutIcon>
                    </div>
                    <div className={styles.text}>
                        Donut Chart
                    </div>
                </button>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard</h1>
                </div>
                <div className={styles.gridStackContainer}>
                    <div className={`grid-stack ${styles.gridStack}`}>
                        {tileData.map((tileDatum, index) =>
                            <GridStackTile
                                title={tileDatum.content}
                                gsWidth={tileDatum.width}
                                gsHeight={tileDatum.height}
                                gsX={tileDatum.x}
                                gsY={tileDatum.y}
                                key={tileDatum.key}
                                gsId={tileDatum.key}
                                handleClose={(ref) => handleTileClose(ref, tileDatum.key)}>

                            </GridStackTile>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default GridStackPanel;