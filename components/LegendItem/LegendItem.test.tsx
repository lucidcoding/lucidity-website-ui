import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LegendItem from "./LegendItem";
import ILegendItemProps from "./ILegendItemProps";

describe("LegendItem", () => {
    let props: ILegendItemProps;
    const mockOnMouseOver = jest.fn();
    const mockOnMouseOut = jest.fn();

    beforeEach(() => {
        props = {
            boxHeight: 10,
            id: "3001",
            name: "Series 1",
            lineHeight: 20,
            color: "#FF0000",
            highlighted: false,
            onMouseOver: mockOnMouseOver,
            onMouseOut: mockOnMouseOut,
            "data-testid": "legend-item"
        };
    });

    it("calls onMouseOver when mouse is rolled over", () => {
        render(<LegendItem {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("legend-item"));
        expect(mockOnMouseOver).toHaveBeenCalledTimes(1);
        expect(mockOnMouseOver.mock.calls[0][0]).toEqual("3001");
    });

    it("calls onMouseOut when mouse is rolled out", () => {
        render(<LegendItem {...props} data-testid={props["data-testid"]} />);
        fireEvent.mouseOver(screen.getByTestId("legend-item"));
        fireEvent.mouseLeave(screen.getByTestId("legend-item"));
        expect(mockOnMouseOut).toHaveBeenCalledTimes(1);
    });

    it("does not have highlighted class when not highlighted", () => {
        render(<LegendItem {...props} data-testid={props["data-testid"]} />);
        expect(screen.getByTestId("legend-item")).not.toHaveClass("highlighted")
    });

    it("has highlighted when not highlighted", () => {
        props.highlighted = true;
        render(<LegendItem {...props} data-testid={props["data-testid"]} />);
        expect(screen.getByTestId("legend-item")).toHaveClass("highlighted")
    });
});
