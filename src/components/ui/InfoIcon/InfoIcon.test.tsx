import { fireEvent, render, screen } from "@testing-library/react";
import InfoIcon from "./InfoIcon";

describe("InfoIcon component", () => {
  it("renders the InfoIcon component correctly", () => {
    render(<InfoIcon tooltipText="tooltip text" />);
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  it("displays the tooltip text on hover", () => {
    render(<InfoIcon tooltipText="tooltip text" />);
    fireEvent.mouseEnter(screen.getByRole("img", { hidden: true }));
    expect(screen.getByText("tooltip text")).toBeInTheDocument();
  });

  it("hides the tooltip text when hover ends", () => {
    render(<InfoIcon tooltipText="tooltip text" />);
    const tooltipIcon = screen.getByRole("img", { hidden: true });
    fireEvent.mouseEnter(tooltipIcon);
    expect(screen.getByText("tooltip text")).toBeInTheDocument();
    fireEvent.mouseLeave(tooltipIcon);
    expect(screen.queryByText("tooltip text")).not.toBeInTheDocument();
  });
});
