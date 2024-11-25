import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { StepTwoForm } from "./StepTwoForm";

jest.mock("../../ui/DateTimeDisplay/DateTimeDisplay", () => () => (
  <div>Date and Time Display</div>
));

jest.mock("../../ui/InputField/InputField", () => ({
  InputField: (props: { label: string; name: string }) => (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} name={props.name} />
    </div>
  ),
}));

describe("StepTwoForm component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all form fields with correct labels", () => {
    render(<StepTwoForm />);

    expect(screen.getByText("Date and Time Display")).toBeInTheDocument();

    const labels = [
      "Seller",
      "Owner",
      "Sales Price",
      "Commission",
      "Revenues Actual Per Year",
      "Revenues Target Per Year",
      "Usable Space",
      "Gross Floor Area",
    ];

    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders all buttons with correct text", () => {
    render(<StepTwoForm />);

    expect(screen.getByText("Save & Pause")).toBeInTheDocument();
    expect(screen.getByText("Save & Wait for Check")).toBeInTheDocument();
    expect(screen.getByText("Save & Finish")).toBeInTheDocument();
  });

  it("submits the form correctly", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    render(<StepTwoForm />);

    fireEvent.change(screen.getByLabelText(/seller/i), {
      target: { value: "Test Seller" },
    });
    fireEvent.change(screen.getByLabelText(/owner/i), {
      target: { value: "test Owner" },
    });

    const saveAndFinishButton = screen.getByText("Save & Finish");
    fireEvent.click(saveAndFinishButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
