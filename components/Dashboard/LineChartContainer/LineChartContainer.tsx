import { useEffect, useState } from "react";
import fetch, { Response } from "../../../library/fake-fetch";
import ILineChartPropsData from "../LineChart/ILineChartPropsData";
import LineChart from "../LineChart/LineChart";
import ILineChartContainerProps from "./ILineChartContainerProps";

const LineChartContainer = (props: ILineChartContainerProps): JSX.Element => {
    const [data, setData] = useState<ILineChartPropsData[]>([]);

    useEffect(() => {
        let url = "/api/line-chart";
        const filters: string[] = [];

        if (props.dateRange.startDate) {
            filters.push(`startDate=${props.dateRange.startDate.toISOString()}`);
        }

        if (props.dateRange.endDate) {
            filters.push(`endDate=${props.dateRange.endDate.toISOString()}`);
        }

        filters.push(`interval=${props.dateRange.interval}`);

        if (filters.length > 0) {
            url = `${url}?${filters.join("&")}`;
        }

        fetch(url)
            .then((result: Response) => result.json())
            .then((json) => {
                setData(json);
            });
    }, [props.dateRange.startDate, props.dateRange.endDate]);

    const startDatesMs = data.map((item) => item.dateRanges).flat().map((item) => item.startDate.getTime());
    const chartStartDate = new Date(Math.min(...startDatesMs));
    const chartEndDate = new Date(Math.max(...startDatesMs));

    return (
        <LineChart
            key={props.tileId}
            dateRange={{
                chartEndDate,
                chartStartDate,
                numberOfXTicks: 4,
                xTicksFormat: (value: any) => {
                    const date = value as Date;
                    const time = (date.getMonth());
                    return time;
                },
            }}
            width={props.width}
            height={props.height}
            xAxisTitle=""
            yAxisTitle=""
            xAxisOrientation="horizontal"
            legendWidth={100}
            legendLineHeight={20}
            data={data}
            loaded={true}
            data-testid="line-chart"
        />
    );
};

export default LineChartContainer;
