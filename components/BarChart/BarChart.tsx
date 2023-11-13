import * as d3 from "d3";
import React from "react";
import Bar from "../Bar/Bar";
import IBarChartProps from "./IBarChartProps";
import XAxis from "../XAxis/XAxis";
import YAxis from "../YAxis/YAxis";

const BarChart = (props: IBarChartProps): JSX.Element => {
    if (!props.loaded) {
        return <>Not Loaded</>;
    }

    if (props.error) {
        return <>Error</>;
    }

    if (props.data.length === 0) {
        return <>No Data</>;
    }

    const chartWidth = props.width - props.margin.left - props.margin.right;
    const chartHeight = props.height - props.margin.top - props.margin.bottom;

    const xScale = d3.scaleBand()
        .range([0, chartWidth])
        .padding(0.6)
        .domain(props.data.map(item => item.name));

    const max = d3.max(props.data, item => item.value) ?? 150; // TODO: fix

    const yScale = d3.scaleLinear()
        .range([chartHeight, 0])
        .domain([0, max]);

    const bars = props.data.map((item) => {
        const barId = item.id ? item.id : item.name;

        return (
            <Bar
                id={barId}
                name={item.name}
                x={xScale(item.name) ?? 100}  // TODO: fix
                y={yScale(item.value)}
                height={chartHeight - yScale(item.value)}
                width={xScale.bandwidth()}
                key={`Bar_${barId}`}
                onClick={props.onBarClick}
                value={item.value}
            />
        );
    });

    const yTickFormat = (value: number) => {
        if (value % 1 !== 0) {
            return "";
        }

        if (value > 999) {
            return `${value / 1000}k`;
        }

        return value;
    };

    return (
        <svg width={props.width} height={props.height}>
            <g transform={`translate(${props.margin.left}, ${props.margin.top})`}>
                <XAxis
                    scale={xScale}
                    chartHeight={chartHeight}
                    chartWidth={chartWidth}
                    title={props.xAxisTitle}
                    orientation={props.xAxisOrientation}
                    tickFormat={props.xAxisTickFormat}
                    chartMargin={props.margin}
                    ticks={5}
                />
                <YAxis
                    scale={yScale}
                    chartHeight={chartHeight}
                    chartWidth={chartWidth}
                    tickFormat={yTickFormat}
                    title={props.yAxisTitle}
                    ticks={5}
                />
                <g>{bars}</g>
            </g>
        </svg>
    );
};

export default BarChart;
