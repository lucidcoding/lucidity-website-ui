import * as d3 from "d3";
import React from "react";
import Point from "../Point/Point";
import ISeriesProps from "./ISeriesProps";
import styles from "./Series.module.scss";

const Series = (props: ISeriesProps): JSX.Element => {
    const paths: string[] = [];

    const line: any = d3.line()
        .x((d: any) => props.xScale(d.startDate))
        .y((d: any) => props.yScale(d.value));

    paths.push(line(props.data));

    const points = props.data.map((point) => {
        const x = props.xScale(point.startDate);
        const y = props.yScale(point.value);

        return (
            <Point
                id={props.id}
                x={x}
                y={y}
                key={`point_${props.id}_${point.startDate.toString()}`}
                startDate={point.startDate}
                value={point.value}
                color={props.color}
                highlighted={props.highlighted}
                onMouseOver={() => props.onMouseOver(props.id)}
                onMouseOut={props.onMouseOut}
                data-testid={`${props["data-testid"]}-point-${props.id}`}
            />
        );
    });

    const svgPaths = paths.map((path, index) => (
        <path
            key={`path-${index}`}
            d={path}
            stroke={`${props.color}`}
            fill="none"
            className={styles.line}
            onMouseOver={() => props.onMouseOver(props.id)}
            onMouseOut={props.onMouseOut}
        />
    ));

    return (
        <g className={`${styles.container} ${props.highlighted ? styles.highlighted : ""}`}>
            {svgPaths}
            {points}
        </g>
    );
};

export default Series;
