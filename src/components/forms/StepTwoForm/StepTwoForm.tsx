import React from "react";
import { useForm } from "react-hook-form";
import DateTimeDisplay from "../../ui/DateTimeDisplay/DateTimeDisplay";
import { InputField } from "../../ui/InputField/InputField";
import { SYMBOLS } from "../../../constants/symbols";
import { StepTwoFormValues } from "../../../types";

export const StepTwoForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<StepTwoFormValues>();

  const onSubmit = (data: StepTwoFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-20 max-w-6xl mx-auto">
      <div className="bg-white rounded-md shadow-md border border-gray-100 p-6 mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-left">Step two</h2>
        <DateTimeDisplay />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10">
          <InputField
            label="Seller"
            name="seller"
            register={register}
            errors={errors}
            infoText="Name of a company or a person. Alternative words: Anbieter, Verkäufer"
          />
          <InputField
            label="Owner"
            name="owner"
            register={register}
            errors={errors}
            infoText="Name of a company or a person. Alternative words: Eigentümer, Besitzer"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10">
          <InputField
            label="Sales Price"
            name="salesPrice"
            type="number"
            register={register}
            errors={errors}
            symbol={SYMBOLS.currency}
            infoText="Sales price, usually 1 Mio. € and more: Alternative words: Kaufpreis IST, Verkaufspreis, Angebotspreis"
          />
          <InputField
            label="Commission"
            name="commission"
            type="number"
            register={register}
            errors={errors}
            symbol={SYMBOLS.percentage}
            infoText="Revenues for the seller in % of the sales price usually between 0% to 7,14%. Alternative words: Maklerprovision, Maklercourtage, Provisionsfrei = 0,0, courtagefrei = 0,0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10">
          <InputField
            label="Revenues Actual Per Year"
            name="revenuesActualPerYear"
            type="number"
            register={register}
            errors={errors}
            symbol={SYMBOLS.currency}
            infoText="Revnues per year in €. Alternative words: Einnahmen IST, JNKM, Jahresnettokaltmiete, Mieteinnahmen, Miete"
          />
          <InputField
            label="Revenues Target Per Year"
            name="revenuesTargetPerYear"
            type="number"
            register={register}
            errors={errors}
            symbol={SYMBOLS.currency}
            infoText="Planned revenues e.g. when in development. Alternative words: Einnahmen SOLL or Plan, Geplante Einnahmen, Miete"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10">
          <InputField
            label="Usable Space"
            name="usableSpace"
            type="number"
            register={register}
            errors={errors}
            symbol={SYMBOLS.area}
            infoText="Rentable space in sqm. Alternative words: Mietfläche IST, Nutzfläche, Wohnfläche, Vermietbare Fläche, Bürofläche"
          />
          <InputField
            label="Gross Floor Area"
            name="grossFloorArea"
            type="number"
            register={register}
            errors={errors}
            symbol={SYMBOLS.area}
            infoText="Total space area in sqm incl. usable space and genral space. Alternative words: BGF, Buttogeschossfläche"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6 mb-10 md:mb-20">
        <button className="bg-primary text-xs md:text-base px-1 md:px-6 py-2 text-white rounded-md hover:bg-secondary shadow uppercase">
          Save & Pause
        </button>
        <button className="bg-primary text-xs md:text-base px-1 md:px-6 py-2 text-white rounded-md hover:bg-secondary shadow uppercase">
          Save & Wait for Check
        </button>
        <button
          type="submit"
          className="bg-primary text-xs md:text-base px-1 md:px-6 py-2 text-white rounded-md hover:bg-secondary shadow uppercase"
        >
          Save & Finish
        </button>
      </div>
    </form>
  );
};
