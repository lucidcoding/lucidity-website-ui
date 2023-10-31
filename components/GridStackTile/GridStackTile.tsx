import { RefObject, useRef } from "react";
import CloseIcon from "../../icons/close";
import styles from "./GridStackTile.module.scss";
import IGridStackTileProps from "./IGridStackTileProps";

const GridStackTile = (props: IGridStackTileProps): JSX.Element => {
    const tileRef = useRef<HTMLDivElement>(null);

    const handleClose = (tileRef: RefObject<HTMLDivElement>) => {
        if (props.handleClose) {
            props.handleClose(tileRef);
        }
    };

    return (
        <div className={`grid-stack-item border-dark ${styles.container}`}
            gs-w={props.gsWidth}
            gs-h={props.gsHeight}
            gs-x={props.gsX}
            gs-y={props.gsY}
            id={props.gsId}
            ref={tileRef}
            data-testid={props["data-testid"]}>
            <div className={`grid-stack-item-content ${styles.content}`}>
                <div className={styles.header}>
                    <div className={styles.title} data-testid={`${props["data-testid"]}-title`}>
                        {props.title}
                    </div>
                    <button type="button" onClick={() => handleClose(tileRef)} data-testid={`${props["data-testid"]}-close-button`}>
                        <CloseIcon></CloseIcon>
                    </button>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default GridStackTile;
