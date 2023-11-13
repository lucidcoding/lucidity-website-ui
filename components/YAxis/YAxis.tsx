import * as d3 from "d3";
import React, { useEffect, useRef } from "react";
import styles from "./YAxis.module.scss";
import IYAxisProps from "./IYAxisProps";

const YAxis = (props: IYAxisProps): JSX.Element => {
    const node = useRef<SVGGElement>(null);

    useEffect(() => {
        renderAxis();
    });

    const renderAxis = () => {
        const axis = d3.axisLeft(props.scale)
            .tickSizeInner(-props.chartWidth)
            .tickSizeOuter(0)
            .tickPadding(10);

        axis.tickFormat(props.tickFormat);

        if (props.ticks) {
            axis.ticks(props.ticks);
        }

        if (node.current) {
            d3.select(node.current).call(axis);
        }

        d3.select(node.current)
            .selectAll("g.tick")
            .select("line")
            .attr("class", `${styles.tick}`);

        d3.select(node.current)
            .selectAll("text")
            .attr("class", `${styles.label}`);
    }

    return <g className={styles.container}>
        <g ref={node} />
        <text
            transform="rotate(90)"
            textAnchor="middle"
            x={props.chartWidth / 2}
            y={60}
            className={styles.title}
        >
            {props.title}
        </text>
    </g>;
};

export default YAxis;
