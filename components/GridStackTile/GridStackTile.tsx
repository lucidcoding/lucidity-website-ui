import { useRef } from "react";
import styles from './GridStackTile.module.scss';
import CloseIcon from '../../icons/close.js';
import GridStackTileProps from "./GridStackTileProps";

const GridStackTile: React.FC<GridStackTileProps> = (props: GridStackTileProps) => {
    const tileRef = useRef(null);

    return (
        <div className={`grid-stack-item border-dark ${styles.container}`}
            gs-w={props.gsWidth}
            gs-h={props.gsHeight}
            gs-x={props.gsX}
            gs-y={props.gsY}
            id={props.gsId}
            ref={tileRef}>
            <div className={`grid-stack-item-content ${styles.content}`}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {props.title}
                    </div>
                    <button type="button" onClick={() => props.handleClose(tileRef)} >
                        <CloseIcon></CloseIcon>
                    </button>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default GridStackTile;
