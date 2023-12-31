import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ILegendItemProps from "./ILegendItemProps";
import LegendItem from "./LegendItem";

describe("LegendItem", () => {
    let props: ILegendItemProps;
    const mockOnMouseOver = jest.fn();
    const mockOnMouseOut = jest.fn();

    beforeEach(() => {
        props = {
            boxHeight: 10,
            color: "#FF0000",
            "data-testid": "legend-item",
            highlighted: false,
            id: "3001",
            lineHeight: 20,
            name: "Series 1",
            onMouseOut: mockOnMouseOut,
            onMouseOver: mockOnMouseOver,
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
        expect(screen.getByTestId("legend-item")).not.toHaveClass("highlighted");
    });

    it("has highlighted class when highlighted", () => {
        props.highlighted = true;
        render(<LegendItem {...props} data-testid={props["data-testid"]} />);
        expect(screen.getByTestId("legend-item")).toHaveClass("highlighted");
    });
});
