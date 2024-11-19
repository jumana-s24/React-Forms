import { render, screen } from "@testing-library/react";
import { InternalNote } from "./InternalNote";

describe("InternalNote component", () => {
  it("renders the InternalNote component correctly", () => {
    render(<InternalNote />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Internal Note"
    );

    expect(
      screen.getByText(
        /If you are not sure about certain data points or you need help, write down your questions here. This will help the team to assist you and finish the job. This will not be visible to the customer./
      )
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Type your notes here...")
    ).toBeInTheDocument();
  });
});
