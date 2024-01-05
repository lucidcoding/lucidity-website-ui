import * as d3 from "d3";
import React from "react";
import { headerSize } from "../../../library/constants";
import Bar from "../Bar/Bar";
import XAxis from "../XAxis/XAxis";
import YAxis from "../YAxis/YAxis";
import IBarChartProps from "./IBarChartProps";

const BarChart = (props: IBarChartProps): JSX.Element => {
    const chartProportionOfWindowWidth = 0.8;
    const chartProportionOfWindowHeight = 0.8;
    const yAxisWidth = 35;
    const rightPadding = 20;
    const xAxisHeight = 30;
    const topPadding = 10;

    if (!props.loaded) {
        return <>Not Loaded</>;
    }

    if (props.error) {
        return <>Error</>;
    }

    if (props.data.length === 0) {
        return <>No Data</>;
    }

    if (props.height < headerSize) {
        return <></>;
    }

    const chartWidth = props.width * chartProportionOfWindowWidth;
    const chartHeight = (props.height - headerSize) * chartProportionOfWindowHeight;

    const xScale = d3.scaleBand()
        .range([0, chartWidth - yAxisWidth - rightPadding])
        .padding(0.7)
        .domain(props.data.map((item) => item.name));

    const max = d3.max(props.data, (item) => item.value) ?? 0;

    const yScale = d3.scaleLinear()
        .range([chartHeight, 0])
        .domain([0, max]);

    const onBarClick = (barId: string, barName: string) => {
        if (props.onBarClick) {
            props.onBarClick(barId, barName);
        }
    };

    const bars = props.data.map((item) => {
        const barId = item.id ? item.id : item.name;

        return (
            <Bar
                id={barId}
                name={item.name}
                x={xScale(item.name) ?? 0}
                y={yScale(item.value)}
                height={chartHeight - yScale(item.value)}
                width={xScale.bandwidth()}
                key={`Bar_${barId}`}
                onClick={() => onBarClick(barId, item.name)}
                value={item.value}
                data-testid={`${props["data-testid"]}-bar-${barId}`}
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
        <svg width={chartWidth} height={chartHeight + xAxisHeight + topPadding} data-testid={props["data-testid"]}>
            <g transform={`translate(${yAxisWidth}, ${topPadding})`}>
                <XAxis
                    scale={xScale}
                    chartHeight={chartHeight}
                    chartWidth={chartWidth}
                    title={props.xAxisTitle}
                    orientation={props.xAxisOrientation}
                    tickFormat={props.xAxisTickFormat}
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
