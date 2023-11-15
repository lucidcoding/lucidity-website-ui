import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ILegendProps from "./ILegendProps";
import Legend from "./Legend";

describe("Legend", () => {
    let props: ILegendProps;
    const mockOnMouseOver = jest.fn();
    const mockOnMouseOut = jest.fn();

    beforeEach(() => {
        props = {
            data: [{
                color: "#FF0000",
                id: "3001",
                name: "Series 1",
            }, {
                color: "#00FF00",
                id: "3002",
                name: "Series 2",
            }, {
                color: "#000FF0",
                id: "3003",
                name: "Series 3",
            }],
            "data-testid": "legend",
            height: 400,
            highlightedId: null,
            lineHeight: 30,
            maxChars: 20,
            onMouseOut: mockOnMouseOut,
            onMouseOver: mockOnMouseOver,
            width: 300,
        };
    });

    it("calls onMouseOver with correct parameters when mouse is rolled over", () => {
        render(<Legend {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("legend-item-3001"));
        expect(mockOnMouseOver).toHaveBeenCalledTimes(1);
        expect(mockOnMouseOver.mock.calls[0][0]).toEqual("3001");
    });

    it("calls onMouseOut when mouse is rolled out", () => {
        render(<Legend {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("legend-item-3001"));
        fireEvent.mouseLeave(screen.getByTestId("legend-item-3001"));
        expect(mockOnMouseOut).toHaveBeenCalledTimes(1);
    });

    it("does not have highlighted class when not highlighted", () => {
        render(<Legend {...props} data-testid={props["data-testid"]} />);
        expect(screen.getByTestId("legend-item-3002")).not.toHaveClass("highlighted");
    });

    it("has highlighted class when highlighted", () => {
        props.highlightedId = "3002";
        render(<Legend {...props} data-testid={props["data-testid"]} />);
        expect(screen.getByTestId("legend-item-3002")).toHaveClass("highlighted");
    });
});
