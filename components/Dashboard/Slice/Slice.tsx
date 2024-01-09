import * as d3 from "d3";
import { useRef } from "react";
import ISliceProps from "./ISliceProps";
import styles from "./Slice.module.scss";

const Bar = (props: ISliceProps): JSX.Element => {
    const node = useRef<SVGPathElement>(null);

    const standardArc: any = d3.arc()
        .outerRadius(props.standardRadius)
        .innerRadius(props.standardRadius / 2);

    const highlight = () => {
        const selectedArc: any = d3.arc()
            .outerRadius(props.selectedRadius)
            .innerRadius(props.standardRadius / 2);

        d3.select(node.current)
            .transition()
            .duration(200)
            .attr("d", selectedArc(props.sliceData));
    };

    const removeHighlight = () => {
        d3.select(node.current)
            .transition()
            .duration(200)
            .attr("d", standardArc(props.sliceData));
    };

    const onMouseOver = () => {
        highlight();
        props.onMouseOver(props.id);
    };

    const onMouseOut = () => {
        removeHighlight();
        props.onMouseOut(props.id);
    };

    return (
        <path
            className={styles.container}
            ref={node}
            d={standardArc(props.sliceData)}
            fill={props.color}
            stroke={props.color}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={() => props.onClick(props.id, props.name)}
            data-testid={`${props["data-testid"]}`}
        />
    );
};

export default Bar;
