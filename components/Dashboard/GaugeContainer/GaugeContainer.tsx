import { useEffect, useState } from "react";
import fetch, { Response } from "../../../library/fake-fetch";
import Gauge from "../Gauge/Gauge";
import IGaugePropsData from "../Gauge/IGaugePropsData";
import IGaugeContainerProps from "./IGaugeContainerProps";

const GaugeContainer = (props: IGaugeContainerProps): JSX.Element => {
    const initialData: IGaugePropsData = {
        maxValue: 100,
        minValue: 0,
        value: 0,
    };

    const [data, setData] = useState<IGaugePropsData>(initialData);

    useEffect(() => {
        let url = "/api/page-views/total";
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

    return (
        <Gauge
            key={props.tileId}
            data={data}
            width={props.width}
            height={props.height}
            units=""
        />
    );
};

export default GaugeContainer;
