import React from "react";
import styles from "./Point.module.scss";
import IPointProps from "./IPointProps";

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
            onClick={() => props.onClick(props.startDate)}
        >
            {/* <title>{props.dateFormat(props.startDate)} - {props.value}</title> */}
        </circle>
    </g>
);

export default Point;
