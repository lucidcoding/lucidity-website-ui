import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ILineChartProps from "./ILineChartProps";
import LineChart from "./LineChart";

describe("LineChart", () => {
    let props: ILineChartProps;
    const mockOnPointClick = jest.fn();

    beforeEach(() => {
        props = {
            data: [{
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
            }],
            "data-testid": "line-chart",
            dateRange: {
                chartEndDate: new Date(2020, 1, 1, 9, 4, 0),
                chartStartDate: new Date(2020, 1, 1, 9, 0, 0),
                numberOfXTicks: 5,
                xTicksFormat: (x: any) => x,
            },
            height: 400,
            legendLineHeight: 20,
            legendWidth: 100,
            loaded: true,
            onPointClick: mockOnPointClick,
            width: 600,
            xAxisOrientation: "horizontal",
            xAxisTitle: "",
            yAxisTitle: "",
        };
    });

    it("renders nothing if size props are below headerSize", () => {
        props.height = 40;
        render(<LineChart {...props} data-testid={props["data-testid"]} />);
        expect(screen.queryByTestId("bar-chart")).not.toBeInTheDocument();
    });

    it("highlights series when series is hovered over", () => {
        render(<LineChart {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("line-chart-series-2002-path-0"));
        expect(screen.getByTestId("line-chart-series-2002")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2002-point-0")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2002")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001-point-0")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2001")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2003")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001-point-0")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2003")).not.toHaveClass("highlighted");
    });

    it("highlights series when point is hovered over", () => {
        render(<LineChart {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("line-chart-series-2002-point-0-circle"));
        expect(screen.getByTestId("line-chart-series-2002")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2002-point-0")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2002")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001-point-0")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2001")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2003")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001-point-0")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2003")).not.toHaveClass("highlighted");
    });

    it("highlights series when legend item is hovered over", () => {
        render(<LineChart {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("line-chart-legend-item-2002"));
        expect(screen.getByTestId("line-chart-series-2002")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2002-point-0")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2002")).toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001-point-0")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2001")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2003")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2001-point-0")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2003")).not.toHaveClass("highlighted");
    });

    it("removes highlight when series is no longer hovered over", () => {
        render(<LineChart {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("line-chart-series-2002-path-0"));
        fireEvent.mouseLeave(screen.getByTestId("line-chart-series-2002-path-0"));
        expect(screen.getByTestId("line-chart-series-2002")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-series-2002-point-0")).not.toHaveClass("highlighted");
        expect(screen.getByTestId("line-chart-legend-item-2002")).not.toHaveClass("highlighted");
    });
});
