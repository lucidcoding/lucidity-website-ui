import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { GridStack } from "gridstack";
import React from "react";
import GridStackTile from "../GridStackTile/GridStackTile";
import GridStackPanel from "./GridStackPanel";

jest.mock("gridstack");

describe("GridStackPanel", () => {
    let mockHandleTileClose: jest.Mock;
    let mockHandleTileResize: jest.Mock;
    let mockHandleCellWidthUpdate: jest.Mock;
    const mockedGridStack = jest.mocked(GridStack);
    const grid = jest.mocked(GridStack);

    const renderElement = () => render(
        <GridStackPanel
            onTileClose={mockHandleTileClose}
            data-testid="grid-stack-panel"
            onTileResize={mockHandleTileResize}
            onCellWidthUpdate={mockHandleCellWidthUpdate}>
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
        mockHandleTileResize = jest.fn();
        mockHandleCellWidthUpdate = jest.fn();
        mockedGridStack.init.mockImplementation((() => grid.prototype));
        grid.prototype.margin = jest.fn();
        grid.prototype.removeWidget = jest.fn();
        grid.prototype.makeWidget = jest.fn();
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
        expect(grid.prototype.on).toHaveBeenCalledTimes(1);
        expect(grid.prototype.on.mock.calls[0][0]).toEqual("resizestop");
    });

    it("calls removeWidget when close clicked", () => {
        renderElement();
        const closeButton = screen.getByTestId("grid-stack-panel-tile-98-close-button");
        fireEvent.click(closeButton);
        expect(grid.prototype.removeWidget).toHaveBeenCalledTimes(1);
        const gridStackElement = grid.prototype.removeWidget.mock.calls[0][0];
        const htmlDivElement = gridStackElement as HTMLDivElement;
        expect(htmlDivElement.id).toEqual("98");
        expect(grid.prototype.removeWidget.mock.calls[0][1]).toBe(false);
    });

    it("calls handleTileClose when close clicked", () => {
        renderElement();
        const closeButton = screen.getByTestId("grid-stack-panel-tile-98-close-button");
        fireEvent.click(closeButton);
        expect(mockHandleTileClose).toHaveBeenCalledTimes(1);
    });

    it("calls makeWidget when tile added", () => {
        const { rerender } = renderElement();

        rerender(<GridStackPanel
            onTileClose={mockHandleTileClose}
            onTileResize={mockHandleTileResize}
            onCellWidthUpdate={mockHandleCellWidthUpdate}
            data-testid="grid-stack-panel">
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
            <GridStackTile
                gsHeight={10}
                gsWidth={20}
                gsId="99"
                gsX={15}
                gsY={25}
                key="99"
                title="Test Title 99"
            />
        </GridStackPanel>);

        expect(grid.prototype.makeWidget).toHaveBeenCalledTimes(1);
        expect(grid.prototype.makeWidget.mock.calls[0][0]).toEqual("#99");
    });
});
