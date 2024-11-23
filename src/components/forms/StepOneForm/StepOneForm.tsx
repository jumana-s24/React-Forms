import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { OfferSection } from "../OfferSection/OfferSection";
import { Asset, StepOneFormValues } from "../../../types";
import { AssetSection } from "./AssetSection/AssetSection";

interface StepOneFormProps {
  onContinue: () => void;
}

export const StepOneForm: React.FC<StepOneFormProps> = ({ onContinue }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StepOneFormValues>({
    defaultValues: {
      assets: [
        {
          id: Date.now(),
          street: "",
          number: "",
          postcode: "",
          city: "",
          country: "Germany",
          plotArea: undefined,
          usableArea: undefined,
          yearlyRevenue: undefined,
          yearOfConstruction: undefined,
          yearOfRedevelopment: undefined,
          monumentProtection: false,
          assetClass: "",
          objectStatus: "",
          energyClass: "",
          walt: "",
          mainTenant: "",
        },
      ],
    },
  });

  const { fields, prepend, remove } = useFieldArray({
    control,
    name: "assets",
  });

  const onSubmit = (data: StepOneFormValues) => {
    console.log(data);
    onContinue();
  };

  const addAsset = () => {
    prepend({
      id: Date.now(), // Unique ID for each asset
      street: "",
      number: "",
      postcode: "",
      city: "",
      country: "Germany",
      plotArea: 0,
      usableArea: 0,
      yearlyRevenue: 0,
      yearOfConstruction: 0,
      yearOfRedevelopment: 0,
      monumentProtection: false,
      assetClass: "",
      objectStatus: "",
      energyClass: "",
      walt: "",
      mainTenant: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
      <div className="bg-white rounded-md shadow-md border border-gray-100 p-6 mb-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold mb-6 text-left">Step One</h1>
          <button
            className="bg-accent text-white rounded-md hover:bg-[#B22222] px-4 py-2 shadow"
            onClick={(event) => {
              event.preventDefault();
              addAsset();
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="text-white mr-2" />
            <span>Add Asset</span>
          </button>
        </div>
        {fields.map((asset: Asset, index) => (
          <AssetSection
            key={asset.id}
            index={index}
            register={register}
            remove={remove}
            fieldsLength={fields.length}
            errors={errors}
          />
        ))}
      </div>

      <OfferSection register={register} errors={errors} />
      <div className="flex flex-col items-end mt-6">
        <button
          type="submit"
          className="bg-primary text-white rounded-md hover:bg-secondary px-6 py-2 shadow uppercase"
        >
          Save & Continue
        </button>
      </div>
    </form>
  );
};
