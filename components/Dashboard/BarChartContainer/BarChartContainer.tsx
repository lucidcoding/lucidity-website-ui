import BarChart from "../BarChart/BarChart";
import IBarChartContainerProps from "./IBarChartContainerProps";

const BarChartContainer = (props: IBarChartContainerProps): JSX.Element => {
    return (
        <BarChart
            key={props.tileId}
            data={[
                {
                    id: "1001",
                    name: "Band 1",
                    value: 100,
                },
                {
                    id: "1002",
                    name: "Band 2",
                    value: 200,
                }, {
                    id: "1003",
                    name: "Band 3",
                    value: 400,
                },
            ]}
            loaded={true}
            width={props.width}
            height={props.height}
            xAxisTitle=""
            xAxisOrientation="horizontal"
            xAxisTickFormat={(value: any) => value}
            yAxisTitle=""
            onBarClick={props.onBarClick}
            data-testid="bar-chart"
        />
    );
};

export default BarChartContainer;
