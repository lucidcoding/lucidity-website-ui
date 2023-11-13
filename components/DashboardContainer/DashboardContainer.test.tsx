import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { GridStack } from "gridstack";
import React from "react";
import DashboardContainer from "./DashboardContainer";

jest.mock("gridstack");

describe("DashboardContainer", () => {
    const mockedGridStack = jest.mocked(GridStack);
    const grid = jest.mocked(GridStack);
    const renderElement = () => render(<DashboardContainer></DashboardContainer>);

    beforeEach(() => {
        mockedGridStack.init.mockImplementation((() => grid.prototype));
        grid.prototype.margin = jest.fn();
        grid.prototype.removeWidget = jest.fn();
        grid.prototype.makeWidget = jest.fn();
        grid.prototype.cellWidth.mockReturnValue(100);
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should remove tile when close button is clicked", () => {
        renderElement();
        const closeButton = screen.getByTestId("grid-stack-panel-tile-tl3-close-button");
        fireEvent.click(closeButton);
        expect(screen.getByTestId("grid-stack-panel-tile-tl1")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-tl2")).toBeInTheDocument();
        expect(screen.queryByTestId("grid-stack-panel-tile-tl3")).not.toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-tl4")).toBeInTheDocument();
    });

    it("adds tile when add button is clicked", () => {
        renderElement();
        const addButton = screen.getByTestId("dashboard-menu-add-gauge");
        fireEvent.click(addButton);
        expect(screen.getByTestId("grid-stack-panel-tile-tl1")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-tl2")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-tl3")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-tl4")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-tl5")).toBeInTheDocument();
    });
});
