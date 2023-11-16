import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Bar from "./Bar";

describe("Bar", () => {
    it("calls onClick when the bar is clicked", () => {
        const mockOnClick = jest.fn();

        render(<Bar
            id="testId"
            name="testName"
            value={500}
            x={0}
            y={0}
            width={10}
            height={100}
            onClick={mockOnClick}
            data-testid="test-bar" />);

        const closeButton = screen.getByTestId("test-bar");
        fireEvent.click(screen.getByTestId("test-bar"));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick.mock.calls[0][0]).toEqual("testId");
        expect(mockOnClick.mock.calls[0][1]).toEqual("testName");
    });
});
