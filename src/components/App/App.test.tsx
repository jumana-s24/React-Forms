import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";

jest.mock("../forms/InternalNote/InternalNote", () => ({
  InternalNote: () => <div>Internal Note Component</div>,
}));

jest.mock("../forms/StepTwoForm/StepTwoForm", () => ({
  StepTwoForm: () => <div>Step Two Form Component</div>,
}));

jest.mock("../forms/StepOneForm/StepOneForm", () => ({
  StepOneForm: ({ onContinue }: { onContinue: () => void }) => (
    <button onClick={onContinue}>Continue to Step Two</button>
  ),
}));

describe("App Component", () => {
  it("renders StepOneForm, StepTwoForm, and InternalNote", () => {
    render(<App />);

    expect(screen.getByText("Continue to Step Two")).toBeInTheDocument();
    expect(screen.getByText("Step Two Form Component")).toBeInTheDocument();
    expect(screen.getByText("Internal Note Component")).toBeInTheDocument();
  });

  it("calls scrollToStepTwo when the Continue button is clicked", () => {
    render(<App />);

    const scrollIntoViewSpy = jest.fn();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

    fireEvent.click(screen.getByText("Continue to Step Two"));
    expect(scrollIntoViewSpy).toHaveBeenCalled();
  });
});
