import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip component", () => {
  it("renders the tooltip with the correct text", () => {
    render(<Tooltip text="tooltip text" />);

    expect(screen.getByText("tooltip text")).toBeInTheDocument();
  });
});
