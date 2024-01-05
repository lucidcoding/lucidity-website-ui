import LineChart from "../LineChart/LineChart";
import ILineChartContainerProps from "./ILineChartContainerProps";

const LineChartContainer = (props: ILineChartContainerProps): JSX.Element => {
    return (
        <LineChart
            key={props.tileId}
            dateRange={{
                chartEndDate: new Date(2020, 1, 1, 9, 4, 0),
                chartStartDate: new Date(2020, 1, 1, 9, 0, 0),
                numberOfXTicks: 5,
                xTicksFormat: (value: any) => {
                    const date = value as Date;
                    const time = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
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
            data={
                [
                    {
                        color: "rgb(0, 210, 91)",
                        dateRanges: [{
                            endDate: new Date(2020, 1, 1, 9, 0, 59),
                            startDate: new Date(2020, 1, 1, 9, 0, 0),
                            value: 10,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 1, 59),
                            startDate: new Date(2020, 1, 1, 9, 1, 0),
                            value: 5,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 2, 59),
                            startDate: new Date(2020, 1, 1, 9, 2, 0),
                            value: 15,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 3, 59),
                            startDate: new Date(2020, 1, 1, 9, 3, 0),
                            value: 13,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 4, 59),
                            startDate: new Date(2020, 1, 1, 9, 4, 0),
                            value: 10,
                        }],
                        id: "2001",
                        name: "Series 1",
                    },
                    {
                        color: "rgb(255, 171, 0)",
                        dateRanges: [{
                            endDate: new Date(2020, 1, 1, 9, 0, 59),
                            startDate: new Date(2020, 1, 1, 9, 0, 0),
                            value: 3,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 1, 59),
                            startDate: new Date(2020, 1, 1, 9, 1, 0),
                            value: 7,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 2, 59),
                            startDate: new Date(2020, 1, 1, 9, 2, 0),
                            value: 2,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 3, 59),
                            startDate: new Date(2020, 1, 1, 9, 3, 0),
                            value: 2,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 4, 59),
                            startDate: new Date(2020, 1, 1, 9, 4, 0),
                            value: 5,
                        }],
                        id: "2002",
                        name: "Series 2",
                    },
                    {
                        color: "rgb(143, 95, 232)",
                        dateRanges: [{
                            endDate: new Date(2020, 1, 1, 9, 0, 59),
                            startDate: new Date(2020, 1, 1, 9, 0, 0),
                            value: 1,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 1, 59),
                            startDate: new Date(2020, 1, 1, 9, 1, 0),
                            value: 1,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 2, 59),
                            startDate: new Date(2020, 1, 1, 9, 2, 0),
                            value: 2,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 3, 59),
                            startDate: new Date(2020, 1, 1, 9, 3, 0),
                            value: 9,
                        }, {
                            endDate: new Date(2020, 1, 1, 9, 4, 59),
                            startDate: new Date(2020, 1, 1, 9, 4, 0),
                            value: 17,
                        }],
                        id: "2003",
                        name: "Series 3",
                    },
                ]}
            loaded={true}
            data-testid="line-chart"
        />
    );
};

export default LineChartContainer;
