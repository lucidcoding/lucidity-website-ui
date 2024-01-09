import { useEffect, useState } from "react";
import fetch, { Response } from "../../../library/fake-fetch";
import DonutChart from "../DonutChart/DonutChart";
import IDonutChartContainerProps from "./IDonutChartContainerProps";

const DonutChartContainer = (props: IDonutChartContainerProps): JSX.Element => {
    const [data, setDate] = useState([]);

    useEffect(() => {
        fetch("/api/bar-chart")
            .then((result: Response) => result.json())
            .then((json) => {
                setDate(json);
            });
    }, []);

    return (
        <DonutChart
            key={props.tileId}
            data={data}
            error="ERROR"
            highlightedDataMaxChars={15}
            legendLineHeight={18}
            legendMaxChars={20}
            loaded={true}
            onSliceClick={(id: string) => { return; }}
            width={props.width}
            height={props.height}
            data-testid={`${props["data-testid"]}`}
        />
    );
};

export default DonutChartContainer;
