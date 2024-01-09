import { useEffect, useState } from "react";
import fetch, { Response } from "../../../library/fake-fetch";
import BarChart from "../BarChart/BarChart";
import IBarChartContainerProps from "./IBarChartContainerProps";

const BarChartContainer = (props: IBarChartContainerProps): JSX.Element => {
    const [data, setDate] = useState([]);

    useEffect(() => {
        let url = "/api/bar-chart";
        const filters: string[] = [];

        if (props.dateRange.startDate) {
            filters.push(`startDate=${props.dateRange.startDate.toISOString()}`);
        }

        if (props.dateRange.endDate) {
            filters.push(`endDate=${props.dateRange.endDate.toISOString()}`);
        }

        if (filters.length > 0) {
            url = `${url}?${filters.join("&")}`;
        }

        fetch(url)
            .then((result: Response) => result.json())
            .then((json) => {
                setDate(json);
            });
    }, [props.dateRange.startDate, props.dateRange.endDate]);

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
