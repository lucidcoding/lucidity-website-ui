import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DonutChart from "./DonutChart";
import IDonutChartProps from "./IDonutChartProps";

describe("DonutChart", () => {
    let props: IDonutChartProps;
    const mockOnSliceClick = jest.fn();

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
            "data-testid": "donut-chart",
            error: "ERROR",
            height: 400,
            highlightedDataMaxChars: 1,
            legendLineHeight: 1,
            legendMaxChars: 1,
            loaded: true,
            onSliceClick: mockOnSliceClick,
            width: 500,
        };
    });

    it("calls onSliceClick when slice is clicked", () => {
        render(<DonutChart {...props} data-testid={props["data-testid"]} />);
        fireEvent.click(screen.getByTestId("donut-chart-slice-1001"));
        expect(mockOnSliceClick).toHaveBeenCalledTimes(1);
        expect(mockOnSliceClick.mock.calls[0][0]).toEqual("1001");
        expect(mockOnSliceClick.mock.calls[0][1]).toEqual("Band 1");
    });
});
