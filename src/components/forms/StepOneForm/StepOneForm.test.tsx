import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { StepOneForm } from "./StepOneForm";

jest.mock("../OfferSection/OfferSection", () => ({
  OfferSection: () => <div>OfferSection</div>,
}));

describe("StepOneForm component", () => {
  const mockOnContinue = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the StepOneForm correctly", () => {
    render(<StepOneForm onContinue={mockOnContinue} />);

    expect(screen.getByText("1 Asset")).toBeInTheDocument();
    expect(screen.getByText("OfferSection")).toBeInTheDocument();
  });

  it("adds a new AssetSection when the Add Asset button is clicked", () => {
    render(<StepOneForm onContinue={mockOnContinue} />);

    const addButton = screen.getByText("Add Asset");
    fireEvent.click(addButton);

    expect(screen.getByText("1 Asset")).toBeInTheDocument();
    expect(screen.getByText("2 Asset")).toBeInTheDocument();
  });

  it("calls onContinue when the form is submitted", async () => {
    render(<StepOneForm onContinue={mockOnContinue} />);

    fireEvent.change(screen.getByLabelText(/street/i), {
      target: { value: "Test Street" },
    });
    fireEvent.change(screen.getByLabelText(/number/i), {
      target: { value: "123" },
    });
    fireEvent.change(screen.getByLabelText(/postcode/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "Test City" },
    });

    const submitButton = screen.getByText("Save & Continue");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnContinue).toHaveBeenCalled();
    });
  });
});
