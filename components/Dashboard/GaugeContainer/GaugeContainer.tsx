import Gauge from "../Gauge/Gauge";
import IGaugeContainerProps from "./IGaugeContainerProps";

const GaugeContainer = (props: IGaugeContainerProps): JSX.Element => {
    return (
        <Gauge
            key={props.tileId}
            minValue={0}
            maxValue={100}
            value={75}
            width={props.width}
            height={props.height}
            units="£"
        />
    );
};

export default GaugeContainer;
