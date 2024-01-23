import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AllTimeDateRange from "../../../library/dateRanges/AllTimeDateRange";
import DashboardMenu from "./DashboardMenu";

describe("DashboardMenu", () => {
    let mockHandleAddTile: jest.Mock;
    let mockOnPeriodClick: jest.Mock;
    const dateRangeOptions = new AllTimeDateRange().getChildDateRanges();
    const renderElement = () => render(<DashboardMenu
        onAddTile={mockHandleAddTile}
        dateRangeOptions={dateRangeOptions}
        onPeriodClick={mockOnPeriodClick}
    ></DashboardMenu>);

    beforeEach(() => {
        mockHandleAddTile = jest.fn();
        mockOnPeriodClick = jest.fn();
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("calls handleAddTile when add button is clicked", () => {
        renderElement();
        const addButton = screen.getByTestId("dashboard-menu-add-gauge");
        addButton.click();
        expect(mockHandleAddTile).toHaveBeenCalledTimes(1);
    });

    it("should expand period drop down when clicked", () => {
        renderElement();
        expect(screen.getByTestId("dashboard-menu-period-drop-down-list")).toHaveStyle({ height: 0 });
        const periodDropDownButton = screen.getByTestId("dashboard-menu-period-drop-down-button");
        fireEvent.click(periodDropDownButton);
        expect(screen.getByTestId("dashboard-menu-period-drop-down-list")).toHaveStyle("height: 200px");
    });
});
