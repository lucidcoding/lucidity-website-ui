import React, { useEffect, useState, useRef, Component } from "react";
import GridStackTile from '../GridStackTile/GridStackTile.js';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import styles from './GridStackPanel.module.scss';

const GridStackPanel = (props) => {

    let grid;
    let oldKeys = useRef(props.tileData.map(tile => tile.key));


    useEffect(() => {
        grid = GridStack.init();
        grid.margin('12px');
    });

    const mounted = useRef();
    //const lastKeyAdded = useRef(null);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            /*if (lastKeyAdded.current) {
                grid.makeWidget(`#${lastKeyAdded.current}`);
                lastKeyAdded.current = null;
            }*/
            console.log('componentDidUpdate');

            const newKeys = props.tileData.map(tile => tile.key);

            if (newKeys.length > oldKeys.current.length) {
                var newlyAddedKeys = newKeys.filter(key => !oldKeys.current.includes(key));
                var newKey = newlyAddedKeys[0];
                grid.makeWidget(`#${newKey}`);
                oldKeys.current = newKeys;
            }
        }
    });

    const handleTileClose = (ref, key) => {
        grid.removeWidget(ref.current, false);
        props.handleTileClose(ref, key);
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Analytics Dashboard</h1>
                </div>
                <div className={styles.gridStackContainer}>
                    <div className={`grid-stack ${styles.gridStack}`}>
                        {props.tileData.map((tileDatum, index) =>
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