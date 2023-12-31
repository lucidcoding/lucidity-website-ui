import * as d3 from "d3";
import React, { useEffect, useRef } from "react";
import IXAxisProps from "./IXAxisProps";
import styles from "./XAxis.module.scss";

const XAxis = (props: IXAxisProps): JSX.Element => {
    const node = useRef<SVGGElement>(null);

    useEffect(() => {
        renderAxis();
    });

    const shortenText = (textSelection: any, labelLength: number) => {
        for (const textNode of textSelection._groups) {
            let textLength = textNode.getComputedTextLength();
            let text = textNode.textContent;

            while (textLength > labelLength && text.length > 0) {
                text = text.slice(0, -1);
                textNode.textContent = `${text}...`;
                textLength = textNode.getComputedTextLength();
            }
        }
    };

    const renderAxis = () => {
        const axis = d3.axisBottom(props.scale)
            .tickSizeInner(5)
            .tickSizeOuter(0)
            .tickPadding(10)
            .tickFormat(props.tickFormat);

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

        const textSelection = d3.select(node.current)
            .selectAll("text");

        const textOffset = 5;
        const bottomMarginSpace = 300;

        if (props.orientation === "vertical") {
            textSelection
                .attr("x", textOffset)
                .attr("y", 0)
                .attr("dy", ".35em")
                .attr("transform", "rotate(90)")
                .style("text-anchor", "start");

            shortenText(textSelection, bottomMarginSpace);
        } else if (props.orientation === "horizontal") {
            textSelection
                .attr("x", 0)
                .attr("y", 20)
                .attr("dy", ".35em")
                .style("text-anchor", "middle");
        } else if (props.orientation === "diagonal") {
            textSelection
                .attr("x", textOffset)
                .attr("y", textOffset)
                .attr("dy", ".35em")
                .attr("transform", "rotate(45)")
                .style("text-anchor", "start");
            shortenText(textSelection, Math.sqrt(Math.pow(bottomMarginSpace, 2) * 2) - 5);
        }
    };

    const y = props.chartHeight;

    return <g className={styles.container}>
        <g
            ref={node}
            transform={`translate(0, ${props.chartHeight})`}
        />
        <text
            textAnchor="middle"
            x={props.chartWidth / 2}
            y={y}
            className={styles.title}
        >
            {props.title}
        </text>
    </g>;
};

export default XAxis;
