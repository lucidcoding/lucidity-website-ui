import * as d3 from "d3";
import React from "react";
import styles from "./Series.module.scss";
import ISeriesProps from "./ISeriesProps";

const Series = (props: ISeriesProps): JSX.Element => {
    const paths: string[] = [];

    const line: any = d3.line()
        .x((d: any) => props.xScale(d.startDate))
        .y((d: any) => props.yScale(d.value));

    paths.push(line(props.data));

    /*if (props.activeTrends.length > 0) {

        const xSeries = d3.range(1, props.data.length + 1);
        const ySeries = props.data.map((d: any) => parseFloat(d.value));

        props.activeTrends.map((trend) => {
            const plottedTrend = PlotTrend.plot(trend, xSeries, ySeries, props.data, props.xScale, props.yScale);
            paths.push(line(plottedTrend));
            return null;
        });
    } else {
        paths.push(line(props.data));
    }*/

    /* const points = props.data.map((point) => {
         const x = props.xScale(point.startDate);
         const y = props.yScale(point.value);
 
         return (
             <Point
                 id={props.id}
                 x={x}
                 y={y}
                 key={`point_${props.id}_${point.startDate.toString()}`}
                 startDate={point.startDate}
                 dateFormat={props.pointDateFormat}
                 value={point.value}
                 color={props.color}
                 highlighted={props.highlighted}
                 onMouseOver={() => props.onMouseOver(props.id)}
                 onMouseOut={props.onMouseOut}
                 onClick={startDate => props.onPointClick(startDate)}
             />
         );
     });*/

    const svgPaths = paths.map(path => (
        <path
            d={path}
            // stroke={props.color}
            fill="none"
            className={styles.line}
        /*           onMouseOver={(id: string) => props.onMouseOver(props.id)}
                  onMouseOut={props.onMouseOut} */
        />
    ));

    return (
        <g className={`${styles.container} ${props.highlighted ? styles.highlighted : ""}`}>
            {svgPaths}
            {/* {points} */}
        </g>
    );
};

export default Series;
