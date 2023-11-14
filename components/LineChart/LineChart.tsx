import * as d3 from "d3";
import React, { useState } from "react";
import styles from "./LineChart.module.scss";
import Legend from "../Legend/Legend";
import ILineChartProps from "./ILineChartProps";
import Series from "../Series/Series";
import XAxis from "../XAxis/XAxis";
import YAxis from "../YAxis/YAxis";


const BarChart = (props: ILineChartProps): JSX.Element => {
    const headerSize = 98;
    const chartProportionOfWindowWidth = 0.8;
    const chartProportionOfWindowHeight = 0.8;
    const yAxisWidth = 35;
    const rightPadding = 20;
    const xAxisHeight = 30;
    const topPadding = 10;
    const [highlightedId, setHighlightedId] = useState<string | null>(null);

    if (!props.loaded) {
        return <>Not Loaded</>;
    }

    if (props.error) {
        return <>Error</>;
    }

    if (props.data.length === 0) {
        return <>No Data</>;
    }

    const onMouseOver = (id: string) => {
        // if (props.animate) {
        setHighlightedId(id);
        // }
    };

    const onMouseOut = () => {
        setHighlightedId(null);
    };

    const onPointClick = (startDate: Date) => {
        // setState({ highlightedId: null }, this.props.onPointClick(startDate));
    };

    // Handle data for single series and multiple series differently.
    let data = props.data
        .map(currentSeries => ({
            id: currentSeries.id,
            name: currentSeries.name,
            color: currentSeries.color,
            dateRanges: currentSeries.dateRanges.map(dateRange => ({
                startDate: new Date(dateRange.startDate),
                value: dateRange.value,
            })),
        }));

    if (data.every(currentSeries => currentSeries.dateRanges.length === 0)) {
        return <>No Data</>;
    }

    const chartWidth = props.width * chartProportionOfWindowWidth;
    const chartHeight = (props.height - headerSize) * chartProportionOfWindowHeight;

    const minDate = props.dateRange.chartStartDate ||
        d3.min(data, currentSeries =>
            d3.min(currentSeries.dateRanges, dateRange => dateRange.startDate));

    const maxDate = props.dateRange.chartEndDate ||
        d3.max(data, currentSeries =>
            d3.max(currentSeries.dateRanges, dateRange => dateRange.startDate));

    const xScale = d3.scaleTime()
        .range([0, chartWidth - yAxisWidth - rightPadding])
        .domain([minDate, maxDate]);

    const maxY = d3.max(data,
        currentSeries => d3.max(currentSeries.dateRanges, dateRange => dateRange.value)) || 0;

    const yScale = d3.scaleLinear()
        .range([chartHeight, 0])
        .domain([0, maxY]);

    const ids = data.map(item => item.id);
    //const colorRange = applyColorSettings(ids, props.colorSettings);

    /*const colors = d3.scaleOrdinal()
        .domain(ids)
        .range(colorRange);*/

    const yTickFormat = (value: number) => {
        if (value % 1 !== 0) {
            return "";
        }

        if (value > 999) {
            return `${value / 1000}k`;
        }

        return value;
    };

    // const hasActiveTrends = props.activeTrends.length > 0;
    let legendData = data;

    /*if (props.activeTrends.length > 0) {
        legendData = props.activeTrends.map(trend => ({ id: null, name: trend }));
    }*/

    return (
        <div className={styles.container}>
            <svg width={chartWidth} height={chartHeight + xAxisHeight + topPadding}>
                <g transform={`translate(${yAxisWidth}, ${topPadding})`}>
                    <XAxis
                        scale={xScale}
                        chartHeight={chartHeight}
                        chartWidth={chartWidth}
                        title={props.xAxisTitle}
                        orientation={props.xAxisOrientation}
                        tickFormat={props.dateRange.xTicksFormat}
                        ticks={5}
                    // ticks={props.dateRange.numberOfXTicks
                    //     || d3.max(data, currentSeries => currentSeries.dateRanges.length) || 0}
                    />
                    <YAxis
                        scale={yScale}
                        chartHeight={chartHeight}
                        chartWidth={chartWidth}
                        tickFormat={yTickFormat}
                        title={props.yAxisTitle}
                        ticks={0}
                    />
                    {
                        data.map(currentSeries => (
                            <Series
                                id={currentSeries.id}
                                data={currentSeries.dateRanges}
                                xScale={xScale}
                                yScale={yScale}
                                key={`series_${currentSeries.id}`}
                                color={currentSeries.color}
                                // pointDateFormat={props.dateRange.pointDateFormat}
                                onMouseOver={onMouseOver}
                                onMouseOut={onMouseOut}
                                // onPointClick={(startDate: Date) => onPointClick(startDate)}
                                highlighted={currentSeries.id === highlightedId}
                            // activeTrends={props.activeTrends}
                            />
                        ))
                    }
                </g>
            </svg>
            <Legend
                data={legendData}
                width={props.legendWidth}
                height={props.height}
                lineHeight={props.legendLineHeight}
                highlightedId={highlightedId}
                onMouseOver={(id: string) => onMouseOver(id)}
                onMouseOut={() => onMouseOut()}
                maxChars={25}
            />
        </div>
    );

};

export default BarChart;
