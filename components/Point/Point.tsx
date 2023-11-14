import React from "react";
import IPointProps from "./IPointProps";
import styles from "./Point.module.scss";

const Point = (props: IPointProps): JSX.Element => (
    <g className={`${styles.container} ${props.highlighted ? styles.highlighted : ""}`}>
        <circle
            cx={props.x}
            cy={props.y}
            r="3"
            className={styles.point}
            stroke={props.color}
            onMouseOver={() => props.onMouseOver(props.startDate)}
            onMouseOut={props.onMouseOut}
        >
        </circle>
    </g>
);

export default Point;
