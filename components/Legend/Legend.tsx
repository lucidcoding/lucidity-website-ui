import React from "react";
import styles from "./Legend.module.scss";
import LegendItem from "../LegendItem/LegendItem";
import ILegendProps from "./ILegendProps";

const Legend = (props: ILegendProps): JSX.Element => {
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
