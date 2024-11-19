import { render, screen, fireEvent } from "@testing-library/react";
import { AssetSection } from "./AssetSection";
import { UseFormRegister } from "react-hook-form";

jest.mock("../../ui/InputField/InputField", () => ({
  InputField: (props: { label: string }) => <div>{props.label}</div>,
}));

jest.mock("../../ui/SelectField/SelectField", () => ({
  SelectField: (props: { label: string }) => <div>{props.label}</div>,
}));

jest.mock("../../ui/InfoIcon/InfoIcon", () => () => <div>InfoIcon</div>);

describe("AssetSection component", () => {
  const mockRegister: UseFormRegister<any> = jest.fn();
  const mockRemove = jest.fn();

  it("renders all form fields with correct labels", () => {
    render(
      <AssetSection
        index={0}
        register={mockRegister}
        errors={{}}
        remove={mockRemove}
        fieldsLength={2}
      />
    );

    const labels = [
      "Street",
      "Number",
      "Postcode",
      "City",
      "Country",
      "Plot area",
      "Usable Area",
      "Yearly Revenue",
      "Year Of Construction",
      "Year Of Redevelopment",
      "Monument Protection",
      "Asset Class",
      "Object Status",
      "Energy Class",
      "WALT",
      "Min Tenant",
    ];

    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders the delete button when there are multiple assets", () => {
    render(
      <AssetSection
        index={0}
        register={mockRegister}
        errors={{}}
        remove={mockRemove}
        fieldsLength={2}
      />
    );

    const deleteButton = screen.getByRole("button");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(mockRemove).toHaveBeenCalledWith(0);
  });

  it("does not render the delete button when there is only one asset", () => {
    render(
      <AssetSection
        index={0}
        register={mockRegister}
        errors={{}}
        remove={mockRemove}
        fieldsLength={1}
      />
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders info icon for fields with tooltips", () => {
    render(
      <AssetSection
        index={0}
        register={mockRegister}
        errors={{}}
        remove={mockRemove}
        fieldsLength={1}
      />
    );

    expect(screen.getAllByText("InfoIcon").length).toBeGreaterThan(0);
  });
});
