import * as d3 from "d3";
import { useState } from "react";
import { seriesColors } from "../../../library/constants";
import Legend from "../Legend/Legend";
import Slice from "../Slice/Slice";
import styles from "./DonutChart.module.scss";
import IDonutChartProps, { IDonutChartPropsData } from "./IDonutChartProps";

const DonutChart = (props: IDonutChartProps): JSX.Element => {
    const [highlightedId, setHighlightedId] = useState<string | null>(null);

    const onMouseOver = (id: string) => {
        setHighlightedId(id);
    };

    const onMouseOut = () => {
        setHighlightedId(null);
    };

    const renderSlices = (selectedRadius: number, standardRadius: number, colors: string[]) => {
        const pie = d3.pie<IDonutChartPropsData>()
            .sort(null)
            .value((d) => d.value);

        const slices = pie(props.data).map((item, index: number) => {
            const sliceId = item.data.id ? item.data.id : item.data.name;

            return (
                <Slice
                    id={sliceId}
                    name={item.data.name}
                    sliceData={item}
                    selectedRadius={selectedRadius}
                    standardRadius={standardRadius}
                    color={colors[index]}
                    key={`slice_${sliceId}`}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    onClick={props.onSliceClick}
                    data-testid={`${props["data-testid"]}-slice-${sliceId}`}
                />
            );
        });

        return (
            <g transform={`translate(${selectedRadius}, ${selectedRadius})`}>
                {slices}
            </g>
        );
    };

    const renderHighlightedData = (selectedRadius: number, colors: string[]) => {
        if (props.data.length === 0) {
            return null;
        }

        const totalValues = props.data
            .map((item) => item.value)
            .reduce((acc, item) => acc + item);

        const highlightedDataItem = highlightedId
            ? props.data.find((item) => item.id === highlightedId)
            : null;

        if (!highlightedDataItem) {
            return null;
        }

        const mainName = highlightedDataItem.name.length <= props.highlightedDataMaxChars
            ? highlightedDataItem.name
            : `${highlightedDataItem.name.substring(0, props.highlightedDataMaxChars)}...`;

        const highlightedIndex = props.data.findIndex((item: IDonutChartPropsData) => item.id === highlightedId);

        return (
            <g transform={`translate(${selectedRadius}, ${selectedRadius})`}>
                <text
                    className={styles.mainPercent}
                    x="0"
                    y="-5"
                    textAnchor="middle"
                    fill={colors[highlightedIndex]}
                >
                    {(Math.round((highlightedDataItem.value / totalValues) * 1000)) / 10}%
                </text>
                <foreignObject
                    x={0 - ((selectedRadius * 0.8) / 2)}
                    y="1"
                    width={selectedRadius * 0.8}
                >
                    <div className={styles.mainName} style={{ width: selectedRadius * 0.8 }}>
                        {mainName}
                    </div>
                </foreignObject>
                <text
                    className={styles.mainCount}
                    x="0"
                    y="28"
                    textAnchor="middle"
                >
                    {highlightedDataItem.value}
                </text>
            </g>
        );
    };

    const height = (props.width / 2);
    const selectedRadius = height / 2;
    const standardRadius = selectedRadius * 0.9;

    return (
        <div className={styles.container}>
            <svg width={height} height={height} className={styles.chart}>
                <>
                    {renderSlices(selectedRadius, standardRadius, seriesColors)}
                    {renderHighlightedData(selectedRadius, seriesColors)}
                </>
            </svg>
            <Legend
                data={props.data}
                width={props.width - height}
                height={height}
                lineHeight={props.legendLineHeight}
                maxChars={props.legendMaxChars}
                highlightedId={highlightedId}
                onMouseOver={(id: string) => onMouseOver(id)}
                onMouseOut={() => onMouseOut()}
                data-testid={`${props["data-testid"]}-legend`}
            />
        </div>
    );
};

export default DonutChart;
