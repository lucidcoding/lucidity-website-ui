import React, { useEffect, useState, useRef, Component } from "react";
import GridStackTile from '../GridStackTile/GridStackTile.js';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import styles from './DashboardContainer.module.scss';
import DashboardMenu from "../DashboardMenu/DashboardMenu.js";
import GridStackPanel from "../GridstackPanel/GridstackPanel.js";

const DashboardContainer = (props) => {
    const [periodExpanded, setPeriodExpanded] = useState(false);
    const initialTileData = [
        {
            key: 0,
            width: 4,
            height: 3,
            //x: 0,
            //y: 0,
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

    const lastKeyAdded = useRef(null);

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
        const newTileData = [...tileData];
        var currentTile = newTileData.find((element) => element.key == key);
        var tileIndex = newTileData.indexOf(currentTile);
        newTileData.splice(tileIndex, 1);
        setTileData(newTileData);
    };

    console.log(tileData);

    return (
        <div className={styles.container}>
            <DashboardMenu handleAddTile={handleAddTile}>
            </DashboardMenu>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard</h1>
                </div>
                <GridStackPanel tileData={tileData} handleTileClose={handleTileClose}>
                </GridStackPanel>
            </div>
        </div >
    );
}

export default DashboardContainer;