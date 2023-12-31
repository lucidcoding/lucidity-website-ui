import { GridItemHTMLElement, GridStack, GridStackElement, GridStackNode } from "gridstack";
import React, { RefObject, useEffect, useRef } from "react";
import IGridStackTileProps from "../GridStackTile/IGridStackTileProps";
import styles from "./GridStackPanel.module.scss";
import IGridStackPanelProps from "./IGridStackPanelProps";

const GridStackPanel = (props: IGridStackPanelProps): JSX.Element => {
    let grid: GridStack;

    const childrenArray: Array<React.ReactElement<IGridStackTileProps>>
        = (Array.isArray(props.children))
            ? props.children : [props.children];

    // This is to keep track of what has been changed in the props.
    const oldIds = useRef(childrenArray.map((tile) => tile.props.gsId));

    useEffect(() => {
        grid = GridStack.init();
        grid.margin("12px");
        grid.on("resizestop", handleResizeStop);
        props.onCellWidthUpdate(grid.cellWidth());
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

                if (newlyAddedIds.length === 1) {
                    const newId = newlyAddedIds[0];
                    grid.makeWidget(`#${newId}`);
                    oldIds.current = newIds;
                }
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
        if (props.onTileClose) {
            props.onTileClose(id);
        }
    };

    const handleResizeStop = (event: Event, el: GridItemHTMLElement) => {
        const id = el.getAttribute("id");

        if (el.gridstackNode) {
            const node: any = el.gridstackNode; // GridStackNode doesn't contain _rect.
            // node._rect.w or node._rect.h is pixel height;
            props.onTileResize(id ?? "", node.x ?? 0, node.y ?? 0, node.w ?? 0, node.h ?? 0);
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
