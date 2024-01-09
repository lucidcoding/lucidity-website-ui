import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ISliceProps from "./ISliceProps";
import Slice from "./Slice";

describe("Slice", () => {
    let props: ISliceProps;
    const mockOnClick = jest.fn();
    const mockOnMouseOver = jest.fn();
    const mockOnMouseOut = jest.fn();

    beforeEach(() => {
        props = {
            color: "#FF000",
            "data-testid": "slice-1000",
            id: "1000",
            name: "Test-1000",
            onClick: mockOnClick,
            onMouseOut: mockOnMouseOut,
            onMouseOver: mockOnMouseOver,
            selectedRadius: 10,
            sliceData: {
                data: {
                    id: "1000",
                },
                index: 0,
            },
            standardRadius: 5,
        };
    });

    it("calls onMouseOver with correct parameters when mouse is rolled over", () => {
        render(<svg><Slice {...props} data-testid={props["data-testid"]} /></svg>);
        fireEvent.mouseOver(screen.getByTestId("slice-1000"));
        expect(mockOnMouseOver).toHaveBeenCalledTimes(1);
        expect(mockOnMouseOver.mock.calls[0][0]).toEqual("1000");
    });

    it("calls onMouseOut when mouse is rolled out", () => {
        render(<svg><Slice {...props} data-testid={props["data-testid"]} /></svg>);
        fireEvent.mouseOver(screen.getByTestId("slice-1000"));
        fireEvent.mouseLeave(screen.getByTestId("slice-1000"));
        expect(mockOnMouseOut).toHaveBeenCalledTimes(1);
    });

    it("calls onMouseOut when mouse is rolled out", () => {
        render(<svg><Slice {...props} data-testid={props["data-testid"]} /></svg>);
        fireEvent.click(screen.getByTestId("slice-1000"));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick.mock.calls[0][0]).toEqual("1000");
    });
});
