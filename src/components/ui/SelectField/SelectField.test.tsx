import { render, screen, fireEvent, within } from "@testing-library/react";
import { SelectField } from "./SelectField";

jest.mock("../InfoIcon/InfoIcon", () => (props: { tooltipText: string }) => (
  <div>{props.tooltipText}</div>
));

describe("SelectField component", () => {
  const mockRegister = jest.fn();

  it("renders the select field with label and options", () => {
    render(
      <SelectField
        label="Select the Asset Class"
        name="assetClass"
        options={["Option 1", "Option 2", "Option 3"]}
        defaultValue="Select the Asset Class"
        register={mockRegister}
        errors={{}}
      />
    );

    expect(screen.getByLabelText("Select the Asset Class")).toBeInTheDocument();

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("displays the info icon with tooltip text when showInfoIcon is true", () => {
    render(
      <SelectField
        label="Object Status"
        name="objectStatus"
        options={["Option 1", "Option 2", "Option 3"]}
        showInfoIcon
        tooltipText="The status of the asset. Alternative words: Objektstatus"
        defaultValue="Select the Object Status"
        register={mockRegister}
        errors={{}}
      />
    );

    expect(
      within(screen.getByLabelText("Object Status")).getByText(
        "The status of the asset. Alternative words: Objektstatus"
      )
    ).toBeInTheDocument();
  });

  it("allows selecting an option", () => {
    render(
      <SelectField
        label="Object Status"
        name="objectStatus"
        options={["Option 1", "Option 2", "Option 3"]}
        register={mockRegister}
        errors={{}}
      />
    );

    const selectElement = screen.getByLabelText("Object Status");

    fireEvent.change(selectElement, { target: { value: "Option 2" } });

    expect((selectElement as HTMLSelectElement).value).toBe("Option 2");
  });
});
