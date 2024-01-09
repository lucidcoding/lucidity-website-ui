import React from "react";
import { seriesColors } from "../../../library/constants";
import LegendItem from "../LegendItem/LegendItem";
import ILegendProps from "./ILegendProps";
import styles from "./Legend.module.scss";

const Legend = (props: ILegendProps): JSX.Element => {
    const legendItems = props.data.map((item, index) => {
        const id = item.id ? item.id : item.name;

        return (
            <LegendItem
                boxHeight={10}
                key={`legend_${id}`}
                id={id}
                name={item.name}
                lineHeight={props.lineHeight}
                color={seriesColors[index % 5]}
                highlighted={id === props.highlightedId}
                onMouseOver={(id: string) => props.onMouseOver(id)}
                onMouseOut={() => props.onMouseOut()}
                data-testid={`${props["data-testid"]}-item-${id}`}
            />
        );
    });

    return (
        <div className={styles.container} data-testid={props["data-testid"]}>
            {legendItems}
        </div>
    );
};

export default Legend;
