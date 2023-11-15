import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { headerSize } from "../../library/constants";
import BarChart from "./BarChart";
import IBarChartProps from "./IBarChartProps";

describe("BarChart", () => {
    let props: IBarChartProps;
    const mockOnBarClick = jest.fn();

    beforeEach(() => {
        props = {
            data: [
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
            ],
            loaded: true,
            width: 500,
            height: 400,
            xAxisTitle: "",
            xAxisOrientation: "horizontal" as ("vertical" | "horizontal" | "diagonal"),
            xAxisTickFormat: (value: any) => value,
            yAxisTitle: "",
            onBarClick: mockOnBarClick,
            "data-testid": "bar-chart"
        };
    });

    it("renders nothing if size props are below headerSize", () => {
        props.height = 40;
        render(<BarChart {...props} data-testid="bar-chart" />);
        expect(screen.queryByTestId("bar-chart")).not.toBeInTheDocument();
    });

    it("calls onBarClick when bar is clicked", () => {
        render(<BarChart {...props} data-testid="bar-chart" />);
        fireEvent.click(screen.getByTestId("bar-chart-bar-1001"));
        expect(mockOnBarClick).toHaveBeenCalledTimes(1);
        expect(mockOnBarClick.mock.calls[0][0]).toEqual("1001");
        expect(mockOnBarClick.mock.calls[0][1]).toEqual("Band 1");
    });
});
