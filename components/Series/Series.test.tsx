import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Series from "./Series";
import ISeriesProps from "./ISeriesProps";

describe("Series", () => {
    let props: ISeriesProps;
    const mockXScale = jest.fn();
    const mockYScale = jest.fn();
    const mockOnMouseOver = jest.fn();
    const mockOnMouseOut = jest.fn();

    beforeEach(() => {
        props = {
            id: "1001",
            xScale: mockXScale,
            yScale: mockYScale,
            onMouseOver: mockOnMouseOver,
            onMouseOut: mockOnMouseOut,
            data: [{
                startDate: new Date(2020, 1, 1, 9, 0, 0),
                value: 100,
            }, {
                startDate: new Date(2020, 1, 1, 9, 1, 0),
                value: 200,
            }, {
                startDate: new Date(2020, 1, 1, 9, 2, 0),
                value: 300,
            }],
            color: "#FF000",
            highlighted: false,
            "data-testid": "series"
        };
    });

    it("calls onMouseOver with correct parameters when mouse is rolled over", () => {
        render(<svg><Series {...props} data-testid={props["data-testid"]} /></svg>);
        fireEvent.mouseOver(screen.getByTestId("series-path-0"));
        expect(mockOnMouseOver).toHaveBeenCalledTimes(1);
        expect(mockOnMouseOver.mock.calls[0][0]).toEqual("1001");
    });

    it("calls onMouseOut when mouse is rolled out", () => {
        render(<svg><Series {...props} data-testid={props["data-testid"]} /></svg>);
        fireEvent.mouseOver(screen.getByTestId("series-path-0"));
        fireEvent.mouseLeave(screen.getByTestId("series-path-0"));
        expect(mockOnMouseOut).toHaveBeenCalledTimes(1);
    });

    it("does not have highlighted class when not highlighted", () => {
        render(<svg><Series {...props} data-testid={props["data-testid"]} /></svg>);
        expect(screen.getByTestId("series")).not.toHaveClass("highlighted");
    });

    it("has highlighted class when highlighted", () => {
        props.highlighted = true;
        render(<svg><Series {...props} data-testid={props["data-testid"]} /></svg>);
        expect(screen.getByTestId("series")).toHaveClass("highlighted");
    });
});