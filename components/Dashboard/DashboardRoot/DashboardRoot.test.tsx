import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GridStack } from "gridstack";
import React from "react";
import DashboardRoot from "./DashboardRoot";

jest.mock("gridstack");

describe("DashboardRoot", () => {
    const mockedGridStack = jest.mocked(GridStack);
    const grid = jest.mocked(GridStack);
    const renderElement = () => render(<DashboardRoot></DashboardRoot>);

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

    it("should remove tile when close button is clicked", async () => {
        renderElement();
        const closeButton = screen.getByTestId("grid-stack-panel-tile-tl3-close-button");
        fireEvent.click(closeButton);

        await waitFor(() => {
            expect(screen.getByTestId("grid-stack-panel-tile-tl0")).toBeInTheDocument();
            expect(screen.getByTestId("grid-stack-panel-tile-tl1")).toBeInTheDocument();
            expect(screen.getByTestId("grid-stack-panel-tile-tl2")).toBeInTheDocument();
            expect(screen.queryByTestId("grid-stack-panel-tile-tl3")).not.toBeInTheDocument();
        });
    });

    it("adds tile when add button is clicked", async () => {
        renderElement();
        const addButton = screen.getByTestId("dashboard-menu-add-gauge");
        fireEvent.click(addButton);

        await waitFor(() => {
            expect(screen.getByTestId("grid-stack-panel-tile-tl0")).toBeInTheDocument();
            expect(screen.getByTestId("grid-stack-panel-tile-tl1")).toBeInTheDocument();
            expect(screen.getByTestId("grid-stack-panel-tile-tl2")).toBeInTheDocument();
            expect(screen.getByTestId("grid-stack-panel-tile-tl3")).toBeInTheDocument();
            expect(screen.getByTestId("grid-stack-panel-tile-tl4")).toBeInTheDocument();
        });
    });
});
