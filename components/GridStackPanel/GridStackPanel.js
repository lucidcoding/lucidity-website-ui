import React, { useEffect, useState, useRef, Component } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import styles from './GridStackPanel.module.scss';

const GridStackPanel = (props) => {
    let grid;

    // This is to keep track of what has been changed in the props.
    let oldKeys = useRef(props.tileData.map(tile => tile.key.toString()));

    useEffect(() => {
        grid = GridStack.init();
        grid.margin('12px');
    });

    const mounted = useRef();

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            const newKeys = props.tileData.map(tile => tile.key.toString());

            if (newKeys.length > oldKeys.current.length) {
                var newlyAddedKeys = newKeys.filter(key => !oldKeys.current.includes(key));
                var newKey = newlyAddedKeys[0];
                grid.makeWidget(`#${newKey}`);
                oldKeys.current = newKeys;
            }
        }
    });

    const handleTileClose = (ref, key) => {
        // Remove the widget from Gridstack itself.
        grid.removeWidget(ref.current, false);

        // Remove the key from the store of keys that is needed for detecting if a new one has been added.
        const index = oldKeys.current.indexOf(key);

        if (index > -1) { 
            oldKeys.current.splice(index, 1); 
        }

        // Pass to parent to remove from tile data.
        props.handleTileClose(ref, key);
    };

    var clonedChildren = props.children.map((element, index) => {
        return React.cloneElement(element, { handleClose: (ref) => handleTileClose(ref, element.key) }, null)
    });

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.gridStackContainer}>
                    <div className={`grid-stack ${styles.gridStack}`}>
                        {clonedChildren}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default GridStackPanel;