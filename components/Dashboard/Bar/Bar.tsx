import React from "react";
import styles from "./Bar.module.scss";
import IBarProps from "./IBarProps";

const Bar = (props: IBarProps): JSX.Element => {
    return <svg>
        <g>
            <rect
                x={props.x}
                width={props.width}
                y={props.y}
                height={props.height}
                className={styles.container}
                onClick={() => props.onClick(props.id, props.name)}
                data-testid={props["data-testid"]}
            >
                <title>{`${props.name}: ${props.value}`}</title>
            </rect>
        </g>
    </svg>;
};

export default Bar;
