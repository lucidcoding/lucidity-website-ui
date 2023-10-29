import { GridStack } from "gridstack";
import React, { useEffect, useRef } from "react";
import styles from "./GridStackPanel.module.scss";

const GridStackPanel = (props: any) => {
    let grid: any;

    // This is to keep track of what has been changed in the props.
    const oldKeys = useRef(props.tileData.map((tile: any) => tile.key.toString()));

    useEffect(() => {
        grid = GridStack.init();
        grid.margin("12px");
    });

    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            const newKeys = props.tileData.map((tile: any) => tile.key.toString());

            if (newKeys.length > oldKeys.current.length) {
                const newlyAddedKeys: number[] = newKeys.filter((key: number) => !oldKeys.current.includes(key));
                const newKey: number = newlyAddedKeys[0];
                grid.makeWidget(`#${newKey}`);
                oldKeys.current = newKeys;
            }
        }
    });

    const handleTileClose = (ref: any, key: any) => {
        // Remove the widget from Gridstack itself.
        grid.removeWidget(ref.current, false);

        // Remove the key from the store of keys that is needed for detecting if
        // a new one has been added.
        const index = oldKeys.current.indexOf(key);

        if (index > -1) {
            oldKeys.current.splice(index, 1);
        }

        // Pass to parent to remove from tile data.
        props.handleTileClose(ref, key);
    };

    const clonedChildren = props.children.map((element: any, index: any) => {
        return React.cloneElement(
            element, { handleClose: (ref: any) => handleTileClose(ref, element.key) }, null);
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
};

export default GridStackPanel;
