import { GridStack, GridStackElement } from "gridstack";
import React, { RefObject, useEffect, useRef } from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";
import styles from "./GridStackPanel.module.scss";
import IGridStackPanelProps from "./IGridStackPanelProps";

const GridStackPanel = (props: IGridStackPanelProps): JSX.Element => {
    let grid: GridStack;

    const childrenArray: Array<React.ReactElement<IGridStackTileProps>>
        = (props.children instanceof Array<React.ReactElement<IGridStackTileProps>>)
            ? props.children : [props.children];

    // This is to keep track of what has been changed in the props.
    const oldIds = useRef(childrenArray.map((tile) => tile.props.gsId));

    useEffect(() => {
        grid = GridStack.init();
        grid.margin("12px");
    });

    const mounted = useRef<boolean>(false);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            const newIds = childrenArray.map((tile) => tile.props.gsId);

            if (newIds.length > oldIds.current.length) {
                const newlyAddedIds = newIds.filter((id) => id !== null && !oldIds.current.includes(id));
                const newId = newlyAddedIds[0];
                grid.makeWidget(`#${newId}`);
                oldIds.current = newIds;
            }
        }
    });

    const handleTileClose = (ref: RefObject<HTMLDivElement>, id: string) => {
        // Remove the widget from Gridstack itself.
        const widget = ref.current as GridStackElement;
        grid.removeWidget(widget, false);

        // Remove the key from the store of keys that is needed for detecting if
        // a new one has been added.
        const index = oldIds.current.indexOf(id);

        if (index > -1) {
            oldIds.current.splice(index, 1);
        }

        // Pass to parent to remove from tile data.
        if (props.handleTileClose) {
            props.handleTileClose(id);
        }
    };

    const dataTestId = props["data-testid"] ?? "grid-stack-panel";

    const clonedChildren = childrenArray.map((element, index: number) => {
        return React.cloneElement(element, {
            "data-testid": `${dataTestId}-tile-${element.props.gsId}`,
            handleClose: (ref: RefObject<HTMLDivElement>) => handleTileClose(ref, element.props.gsId),
        });
    });

    return (
        <div className={styles.container} data-testid={dataTestId}>
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
