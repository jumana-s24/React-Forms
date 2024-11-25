import { render, screen } from "@testing-library/react";
import { OfferSection } from "./OfferSection";

describe("OfferSection component", () => {
  it("renders the OfferSection component correctly", () => {
    const mockRegister = jest.fn();

    render(<OfferSection register={mockRegister} errors={{}} />);

    expect(
      screen.getByLabelText("Name of the offer (exposé headline)")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Please enter name only if there is no address in the PDF file"
      )
    ).toBeInTheDocument();
  });
});
