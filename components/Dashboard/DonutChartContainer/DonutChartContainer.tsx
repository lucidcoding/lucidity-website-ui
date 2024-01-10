import { useEffect, useState } from "react";
import fetch, { Response } from "../../../library/fake-fetch";
import DonutChart from "../DonutChart/DonutChart";
import IDonutChartPropsData from "../DonutChart/IDonutChartPropsData";
import IDonutChartContainerProps from "./IDonutChartContainerProps";

const DonutChartContainer = (props: IDonutChartContainerProps): JSX.Element => {
    const [data, setData] = useState<IDonutChartPropsData[]>([]);

    useEffect(() => {
        let url = "/api/page-views/by-age-group";
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
                setData(json);
            });
    }, [props.dateRange.startDate, props.dateRange.endDate]);

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
