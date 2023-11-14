import React from "react";
import ILegendItemProps from "./ILegendItemProps";
import styles from "./LegendItem.module.scss";

const LegendItem = (props: ILegendItemProps): JSX.Element => {
    const pointerPath = `M0,
        ${props.boxHeight} L${props.boxHeight / 2},
        ${(props.boxHeight / 2)} L0,0 Z`;

    return (
        <div
            id={props.id}
            className={`${styles.container} ${props.highlighted ? styles.highlighted : ""}`}
            onMouseOver={() => props.onMouseOver(props.id)}
            onMouseOut={() => props.onMouseOut()}
            style={{ height: props.lineHeight }}
        >
            <div className={styles.block}>
                <svg width={props.boxHeight * 2} height={props.boxHeight}>
                    <g>
                        <path
                            d={pointerPath}
                            className={styles.pointer}
                        />
                        <rect
                            width={props.boxHeight}
                            height={props.boxHeight}
                            x={props.boxHeight}
                            y={0}
                            fill={props.color}
                        />
                    </g>
                </svg>
            </div>
            <div
                className={styles.label}
                title={props.name}
            >
                {props.name}
            </div>
        </div>
    );
};

export default LegendItem;
