import { render, screen } from "@testing-library/react";
import { OfferSection } from "./OfferSection";
import { UseFormRegister } from "react-hook-form";

describe("OfferSection component", () => {
  it("renders the OfferSection component correctly", () => {
    const mockRegister: UseFormRegister<any> = jest.fn();

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
