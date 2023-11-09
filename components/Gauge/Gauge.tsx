import * as d3 from "d3";
import styles from "./Gauge.module.scss";
import IGaugeProps from "./IGaugeProps";

const Gauge = (props: IGaugeProps): JSX.Element => {
    const radianToDegreeFactor = 180 / Math.PI;
    const width = props.width;
    const outerRadius = width / 2;
    const innerRadius = outerRadius / 1.3;
    const centerX = width / 2;
    const centerY = outerRadius * 1.01;
    const startAngleRadians = 0 - (Math.PI / 2);
    const maxAngleRadians = Math.PI / 2;

    const calculateAngleRadians = (value: number) => {
        let dialValue = 0;

        if (value) {
            dialValue = value <= props.maxValue ? value : props.maxValue;
        }

        return startAngleRadians +
            ((dialValue / props.maxValue) *
                maxAngleRadians * 2);
    };

    const arcTween = (oldValueAngleRadians: number, newValueAngleRadians: number, arc: any, d: any) => {
        const interpolate = d3.interpolate(oldValueAngleRadians, newValueAngleRadians);

        return (t: any) => {
            // eslint-disable-next-line no-param-reassign
            d.endAngle = interpolate(t);
            return arc(d);
        };
    };

    const runAnimation = (oldValue: number, newValue: number) => {
        /*if (!this.props.animate) {
            return;
        }*/

        const oldValueAngleRadians = calculateAngleRadians(oldValue);
        const newValueAngleRadians = calculateAngleRadians(newValue);

        const arc = d3.arc().outerRadius(outerRadius).innerRadius(innerRadius);
        arc.startAngle(startAngleRadians);

        /*d3.select(this.valueArcNode)
            .datum({ endAngle: newValueAngleRadians })
            .attr("class", styles.used)
            .attr("d", arc)
            .transition()
            .duration(1000)
            .attrTween("d", d =>
                arcTween(oldValueAngleRadians, newValueAngleRadians, arc, d)
            );*/

        const oldValueAngleDegrees = oldValueAngleRadians * radianToDegreeFactor;
        const newValueAngleDegrees = newValueAngleRadians * radianToDegreeFactor;

        /*d3.select(this.needleNode)
            .attr("transform", `rotate(${oldValueAngleDegrees})`)
            .transition()
            .duration(1000)
            .attr("transform", `rotate(${newValueAngleDegrees})`);*/
    };

    const valueAngleRadians = calculateAngleRadians(props.value);

    const backgroundArc: any = d3.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .startAngle(startAngleRadians)
        .endAngle(maxAngleRadians);

    const valueArc: any = d3.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .startAngle(startAngleRadians)
        .endAngle(valueAngleRadians);

    const needleRadius = 3;
    const textY = 10; // this.props.textOffset;
    const textMinX = 10; // 0 - (this.innerRadius + ((this.outerRadius - this.innerRadius) / 2));
    const textMaxX = 10; // (this.innerRadius + ((this.outerRadius - this.innerRadius) / 2));

    /*const backgroundArcPath = backgroundArc({
        outerRadius: outerRadius,
        innerRadius: innerRadius,
        startAngle: startAngleRadians,
        endAngle: valueAngleRadians
    });

    const valueArcPath = valueArc({
        outerRadius: outerRadius,
        innerRadius: innerRadius,
        startAngle: startAngleRadians,
        endAngle: valueAngleRadians
    });*/

    // https://stackblitz.com/edit/react-d3-arc?file=index.js
    const backgroundArcPath = backgroundArc();

    const valueArcPath = valueArc();

    return (
        <svg
            className={styles.container}
            width={width}
            height={100}
        >
            <g transform={`translate(${centerX},${centerY})`}>
                <path
                    d={backgroundArcPath}
                    className={styles.unused}
                />
                <path
                    ref={(valueArcNode) => {
                        valueArcNode = valueArcNode;
                    }}
                    d={valueArcPath}
                    className={styles.used}
                />
                <g
                    ref={(needleNode) => {
                        needleNode = needleNode;
                    }}
                    transform={`rotate(${valueAngleRadians * radianToDegreeFactor})`}
                    className={styles.needle}
                >
                    <circle cx={0} cy={0} r={needleRadius} />
                    <path
                        d={`M${0 - needleRadius},
                            0 L0,
                            ${0 - outerRadius} L${needleRadius},
                            0 Z`}
                    />
                </g>
                <text
                    className={`${styles.label} ${styles.min}`}
                    textAnchor="middle"
                    x={textMinX}
                    y={textY}
                >
                    {Math.round(props.value * 10) / 10}{"props.units"}
                </text>
                <text
                    className={`${styles.label} ${styles.max}`}
                    textAnchor="middle"
                    x={textMaxX}
                    y={textY}
                >
                    {props.maxValue}{"props.units"}
                </text>
            </g>
        </svg>
    );
};

export default Gauge;
