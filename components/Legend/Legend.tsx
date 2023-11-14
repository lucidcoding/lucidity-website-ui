import React from "react";
import styles from "./Legend.module.scss";
import LegendItem from "../LegendItem/LegendItem";
import ILegendProps from "./ILegendProps";

const Legend = (props: ILegendProps): JSX.Element => {
    let actualHeight = (props.data.length * props.lineHeight) + 5;

    if (actualHeight > props.height) {
        actualHeight = props.height;
    }

    // Calculate the max width of a legend item.
    const extraSpace = 45;
    let actualWidth = extraSpace;
    /*const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (context) {
        context.font = "10px Roboto";

        props.data.forEach((item) => {
            const currentWidth = context.measureText(item.name).width + extraSpace;

            if (currentWidth > actualWidth) {
                actualWidth = currentWidth;
            }
        });
    }*/

    if (actualWidth > props.width) {
        actualWidth = props.width;
    }

    const legendItems = props.data.map((item) => {
        const id = item.id ? item.id : item.name;

        return (
            <LegendItem
                boxHeight={10}
                key={`legend_${id}`}
                id={id}
                name={item.name}
                lineHeight={props.lineHeight}
                color={item.color}
                highlighted={id === props.highlightedId}
                onMouseOver={(id: string) => props.onMouseOver(id)}
                onMouseOut={() => props.onMouseOut()}
            />
        );
    });

    return (
        <div className={styles.container}>
            {legendItems}
        </div>
    );
};

export default Legend;
