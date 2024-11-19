import { render, screen } from "@testing-library/react";
import { InputField } from "./InputField";
import { UseFormRegister } from "react-hook-form";
import { SYMBOLS } from "../../../constants/symbols";

jest.mock("../InfoIcon/InfoIcon", () => (props: { tooltipText: string }) => (
  <div>{props.tooltipText}</div>
));

describe("InputField component", () => {
  const mockRegister: UseFormRegister<any> = jest.fn();

  it("renders the input with label and placeholder", () => {
    render(
      <InputField
        label="Street"
        name="street"
        type="text"
        required={false}
        register={mockRegister}
        errors={{}}
      />
    );

    expect(screen.getByLabelText("Street")).toBeInTheDocument();
  });

  it("displays the info icon with tooltip text when showInfoIcon is true", () => {
    render(
      <InputField
        label="Plot Area"
        name="plotArea"
        showInfoIcon
        tooltipText="Plot area in sqm. Alternative words: Grundstück, Grundstücksfläche"
        register={mockRegister}
        errors={{}}
      />
    );

    expect(
      screen.getByText(
        "Plot area in sqm. Alternative words: Grundstück, Grundstücksfläche"
      )
    ).toBeInTheDocument();
  });

  it("displays additional info text if provided", () => {
    render(
      <InputField
        label="Seller"
        name="seller"
        infoText="Name of a company or a person. Alternative words: Anbieter, Verkäufer"
        register={mockRegister}
        errors={{}}
      />
    );

    expect(
      screen.getByText(
        "Name of a company or a person. Alternative words: Anbieter, Verkäufer"
      )
    ).toBeInTheDocument();
  });

  it("renders the input with a symbol if provided", () => {
    render(
      <InputField
        label="Yearly Revenue"
        name="yearlyRevenue"
        symbol={SYMBOLS.currency}
        register={mockRegister}
        errors={{}}
      />
    );

    expect(screen.getByText("€")).toBeInTheDocument();
  });
});
