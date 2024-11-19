import { render, screen, waitFor } from "@testing-library/react";
import DateTimeDisplay from "./DateTimeDisplay";

describe("DateTimeDisplay component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2024-11-14T12:34:56"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render the current date and time correctly", () => {
    render(<DateTimeDisplay />);

    expect(screen.getByText("Date:")).toBeInTheDocument();
    expect(screen.getByText("Time:")).toBeInTheDocument();
    expect(screen.getByText("14.11.2024")).toBeInTheDocument();
    expect(screen.getByText("12:34:56")).toBeInTheDocument();
  });

  it("should update the time every second", async () => {
    render(<DateTimeDisplay />);

    // Fast-forward 1 second and check if the time updated
    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText("12:34:57")).toBeInTheDocument();
    });
  });
});
