import { useEffect, useState } from "react";
import fetch, { Response } from "../../../library/fake-fetch";
import BarChart from "../BarChart/BarChart";
import IBarChartContainerProps from "./IBarChartContainerProps";

const BarChartContainer = (props: IBarChartContainerProps): JSX.Element => {
    const [data, setDate] = useState([]);

    useEffect(() => {
        fetch("/api/bar-chart")
            .then((result: Response) => result.json())
            .then((json) => {
                setDate(json);
            });
    }, []);

    return (
        <BarChart
            key={props.tileId}
            data={data}
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
