import * as d3 from "d3";
import React from "react";
import styles from "./Gauge.module.scss";
import IGaugeProps from "./IGaugeProps";

const Gauge = (props: IGaugeProps): JSX.Element => {
    if (props.width === 0) {
        // If width has not been set because Gridstack cell width has not yet been calculated.
        return <></>;
    }

    const headerSize = 48;
    const textY = 26;
    const radianToDegreeFactor = 180 / Math.PI;
    let width = props.width * 0.75;
    let height = (width / 2) + textY;

    if (height > (props.height - headerSize)) {
        height = (props.height - headerSize) - textY;
        width = (height - textY) * 2;
    }

    const marginLeft = 10;
    const marginRight = 10;
    const outerRadius = (width - marginRight - marginLeft) / 2.02;
    const innerRadius = outerRadius / 1.3;
    const centerX = width / 2;
    const centerY = outerRadius;
    const startAngleRadians = 0 - (Math.PI / 2);
    const maxAngleRadians = Math.PI / 2;

    const calculateAngleRadians = (value: number) => {
        let dialValue = 0;

        if (value) {
            dialValue = value <= props.maxValue ? value : props.maxValue;
        }

        return startAngleRadians +
            ((dialValue / props.maxValue) *
                maxAngleRadians * 2);
    };

    const valueAngleRadians = calculateAngleRadians(props.value);

    const backgroundArc: any = d3.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .startAngle(startAngleRadians)
        .endAngle(maxAngleRadians);

    const valueArc: any = d3.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .startAngle(startAngleRadians)
        .endAngle(valueAngleRadians);

    const textMinX = 0 - (innerRadius + ((outerRadius - innerRadius) / 2));
    const textMaxX = (innerRadius + ((outerRadius - innerRadius) / 2));
    const backgroundArcPath = backgroundArc();
    const valueArcPath = valueArc();

    const addUnits = (value: number): string => {
        const before = ["£", "$", "€"].includes(props.units);
        return `${before ? props.units : ""}${value}${before ? "" : props.units}`;
    };

    return (
        <svg
            className={styles.container}
            width={width}
            height={height}
        >
            <g transform={`translate(${centerX},${centerY})`}>
                <path
                    d={backgroundArcPath}
                    className={styles.unused}
                />
                <path
                    ref={(valueArcNode) => {
                        valueArcNode = valueArcNode;
                    }}
                    d={valueArcPath}
                    className={styles.used}
                />
                <text
                    className={`${styles.label} ${styles.limits}`}
                    textAnchor="middle"
                    x={textMinX}
                    y={textY}
                >
                    {addUnits(props.minValue)}
                </text>
                <text
                    className={`${styles.label} ${styles.value}`}
                    textAnchor="middle"
                    x={0}
                    y={textY}
                >
                    {addUnits(Math.round(props.value * 10) / 10)}
                </text>
                <text
                    className={`${styles.label} ${styles.limits}`}
                    textAnchor="middle"
                    x={textMaxX}
                    y={textY}
                >
                    {addUnits(props.maxValue)}
                </text>
            </g>
        </svg>
    );
};

export default Gauge;
