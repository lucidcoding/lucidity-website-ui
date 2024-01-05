import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React, { RefObject } from "react";
import GridStackTile from "./GridStackTile";

describe("GridStackTile", () => {
    let mockHandleClose: jest.Mock;

    const renderElement = () => render(<GridStackTile
        gsHeight={10}
        gsWidth={20}
        gsId="99"
        gsX={15}
        gsY={25}
        handleClose={mockHandleClose}
        key="99"
        title="Test Title 99"
        data-testid="grid-stack-tile"
    />);

    beforeEach(() => {
        mockHandleClose = jest.fn();
    });

    it("renders a heading", () => {
        renderElement();
        expect(screen.getByTestId("grid-stack-tile-title").textContent).toEqual("Test Title 99");
    });

    it("calls supplied function when close is clicked", () => {
        renderElement();
        const closeButton = screen.getByTestId("grid-stack-tile-close-button");
        closeButton.click();
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
        const htmlDivElement: RefObject<HTMLDivElement> = mockHandleClose.mock.calls[0][0];
        expect(htmlDivElement.current?.id).toEqual("99");
    });
});
