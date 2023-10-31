import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { GridStack, GridStackElement } from "gridstack";
import React, { RefObject } from "react";
import GridStackTile from "../GridStackTile/GridStackTile";
import GridStackPanel from "./GridStackPanel";

jest.mock("gridstack");

describe("GridStackPanel", () => {
    let mockHandleTileClose: jest.Mock;
    const mockedGridStack = jest.mocked(GridStack);
    const grid = jest.mocked(GridStack);

    const renderElement = () => render(<GridStackPanel handleTileClose={mockHandleTileClose}>
        <GridStackTile
            gsHeight={10}
            gsWidth={20}
            gsId="96"
            gsX={15}
            gsY={25}
            key="96"
            title="Test Title 96"
        />
        <GridStackTile
            gsHeight={10}
            gsWidth={20}
            gsId="97"
            gsX={15}
            gsY={25}
            key="97"
            title="Test Title 97"
        />
        <GridStackTile
            gsHeight={10}
            gsWidth={20}
            gsId="98"
            gsX={15}
            gsY={25}
            key="98"
            title="Test Title 98"
        />
    </GridStackPanel>);

    beforeEach(() => {
        mockHandleTileClose = jest.fn();
        mockedGridStack.init.mockImplementation((() => grid.prototype));
        grid.prototype.margin = jest.fn();
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("renders the main panel", () => {
        renderElement();
        expect(screen.getByTestId("grid-stack-panel")).toBeInTheDocument();
    });

    it("initialises GridStack", () => {
        renderElement();
        expect(GridStack.init).toHaveBeenCalledTimes(1);
        expect(grid.prototype.margin).toHaveBeenCalledTimes(1);
        expect(grid.prototype.makeWidget).not.toHaveBeenCalled();
        expect(grid.prototype.removeWidget).not.toHaveBeenCalled();
    });
});
