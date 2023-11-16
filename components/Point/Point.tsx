import React from "react";
import IPointProps from "./IPointProps";
import styles from "./Point.module.scss";

const Point = (props: IPointProps): JSX.Element => (
    <g
        className={`${styles.container}
        ${props.highlighted ? styles.highlighted : ""}`}
        data-testid={props["data-testid"]}>
        <circle
            cx={props.x}
            cy={props.y}
            r="3"
            className={styles.point}
            stroke={props.color}
            onMouseOver={() => props.onMouseOver(props.startDate)}
            onMouseOut={props.onMouseOut}
            data-testid={`${props["data-testid"]}-circle`}
        >
        </circle>
    </g>
);

export default Point;
