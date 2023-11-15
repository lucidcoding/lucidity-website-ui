import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Point from "./Point";
import IPointProps from "./IPointProps";

describe("Point", () => {
    let props: IPointProps;
    const mockOnMouseOver = jest.fn();
    const mockOnMouseOut = jest.fn();

    beforeEach(() => {
        props = {
            id: "4001",
            x: 100,
            y: 200,
            value: 250,
            onMouseOver: mockOnMouseOver,
            onMouseOut: mockOnMouseOut,
            startDate: new Date(2020, 1, 1, 9, 0, 0),
            color: "#FF0000",
            highlighted: false,
            "data-testid": "point",
        };
    });

    it("calls onMouseOver with correct parameters when mouse is rolled over", () => {
        render(<svg><Point {...props} data-testid={props["data-testid"]} /></svg>);
        fireEvent.mouseOver(screen.getByTestId("point-circle"));
        expect(mockOnMouseOver).toHaveBeenCalledTimes(1);
        expect(mockOnMouseOver.mock.calls[0][0]).toEqual(new Date(2020, 1, 1, 9, 0, 0));
    });

    it("calls onMouseOut when mouse is rolled out", () => {
        render(<svg><Point {...props} data-testid={props["data-testid"]} /></svg>);
        fireEvent.mouseOver(screen.getByTestId("point-circle"));
        fireEvent.mouseLeave(screen.getByTestId("point-circle"));
        expect(mockOnMouseOut).toHaveBeenCalledTimes(1);
    });

    it("does not have highlighted class when not highlighted", () => {
        render(<svg><Point {...props} data-testid={props["data-testid"]} /></svg>);
        expect(screen.getByTestId("point")).not.toHaveClass("highlighted")
    });

    it("has highlighted class when highlighted", () => {
        props.highlighted = true;
        render(<svg><Point {...props} data-testid={props["data-testid"]} /></svg>);
        expect(screen.getByTestId("point")).toHaveClass("highlighted")
    });
});
