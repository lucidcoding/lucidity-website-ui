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
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should remove tile when close button is clicked", () => {
        renderElement();
        const closeButton = screen.getByTestId("grid-stack-panel-tile-3-close-button");
        fireEvent.click(closeButton);
        expect(screen.getByTestId("grid-stack-panel-tile-1")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-2")).toBeInTheDocument();
        expect(screen.queryByTestId("grid-stack-panel-tile-3")).not.toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-4")).toBeInTheDocument();
    });

    it("adds tile when add button is clicked", () => {
        renderElement();
        const addButton = screen.getByTestId("dashboard-menu-add-gauge");
        fireEvent.click(addButton);
        expect(screen.getByTestId("grid-stack-panel-tile-1")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-2")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-3")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-4")).toBeInTheDocument();
        expect(screen.getByTestId("grid-stack-panel-tile-5")).toBeInTheDocument();
    });
});
