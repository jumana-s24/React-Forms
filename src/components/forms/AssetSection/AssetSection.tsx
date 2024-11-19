import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  assetClassOptions,
  countries,
  energyClassOptions,
  objectStatusOptions,
} from "../../../database";
import { UseFormRegister } from "react-hook-form";
import { InputField } from "../../ui/InputField/InputField";
import { SelectField } from "../../ui/SelectField/SelectField";
import InfoIcon from "../../ui/InfoIcon/InfoIcon";
import { SYMBOLS } from "../../../constants/symbols";

interface Props {
  index: number;
  register: UseFormRegister<any>;
  errors: any;
  remove: (index: number) => void;
  fieldsLength: number;
}

export const AssetSection: React.FC<Props> = ({
  index,
  register,
  errors,
  remove,
  fieldsLength,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md border border-gray-100 p-6 mb-12">
      <div className="flex items-baseline">
        <h2 className="text-2xl font-semibold text-left mb-6">
          {fieldsLength - index} Asset
        </h2>

        {fieldsLength - index > 1 && (
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-500 hover:text-red-700 ml-2"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 mb-10">
        <InputField
          label="Street"
          name={`assets[${index}].street`}
          className="lg:col-span-1"
          register={register}
          errors={errors}
        />
        <div className="lg:col-span-1 grid grid-cols-2">
          <InputField
            label="Number"
            name={`assets[${index}].number`}
            className="col-span-1"
            register={register}
            errors={errors}
          />
          <InputField
            label="Postcode"
            name={`assets[${index}].postcode`}
            className="col-span-1"
            register={register}
            errors={errors}
          />
        </div>

        <div className="grid-cols-2 col-span-2 md:col-span-1 grid">
          <InputField
            label="City"
            name={`assets[${index}].city`}
            className="md:col-span-1"
            register={register}
            errors={errors}
          />
          <SelectField
            label="Country"
            name={`assets[${index}].country`}
            options={countries}
            defaultValue="Germany"
            className="md:col-span-1"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mb-10">
        <InputField
          label="Plot area"
          name={`assets[${index}].plotArea`}
          type="number"
          showInfoIcon
          tooltipText="Plot area in sqm. Alternative words: Grundstück, Grundstücksfläche"
          symbol={SYMBOLS.area}
          register={register}
          errors={errors}
        />

        <InputField
          label="Usable Area"
          name={`assets[${index}].usableArea`}
          type="number"
          showInfoIcon
          tooltipText="Rentable space in sqm. Alternative words: Mietfläche IST, Nutzfläche, Wohnfläche, Vermietbare Fläche, Fläche Bestand, Bestandsfläche, Bürofläche"
          symbol={SYMBOLS.area}
          register={register}
          errors={errors}
        />
        <InputField
          label="Yearly Revenue"
          name={`assets[${index}].yearlyRevenue`}
          type="number"
          showInfoIcon
          tooltipText="Revnues per year in €. Alternative words: Einnahmen IST, JNKM, Jahresnettokaltmiete, Mieteinnahmen, Miete"
          symbol={SYMBOLS.currency}
          register={register}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mb-10">
        <InputField
          label="Year Of Construction"
          name={`assets[${index}].yearOfConstruction`}
          type="number"
          showInfoIcon
          tooltipText="The year a building was build. Alternative words: Baujahr"
          register={register}
          errors={errors}
        />
        <InputField
          label="Year Of Redevelopment"
          name={`assets[${index}].yearOfRedevelopment`}
          type="number"
          showInfoIcon
          tooltipText="The year of the buildings redevelopment. Alternative words: Sanierung, Saniert, Renovierung, Renoviert"
          register={register}
          errors={errors}
        />
        <div className="relative flex items-center space-x-2 mt-10 md:mt-4">
          <input
            {...register(`assets.${index}.monumentProtection` as const)}
            type="checkbox"
            className="form-checkbox"
          />
          <div className="flex items-center">
            <label className="text-sm text-gray-600 mr-2">
              Monument Protection
            </label>
            <InfoIcon tooltipText="Monument protection of the building: Alternative words: Denkmalschutz" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mb-10">
        <SelectField
          label="Asset Class"
          name={`assets[${index}].assetClass`}
          options={assetClassOptions}
          showInfoIcon
          tooltipText="The class of the asset. Alternative words:"
          defaultValue="Select the Asset Class"
          register={register}
          errors={errors}
        />

        <SelectField
          label="Object Status"
          name={`assets[${index}].objectStatus`}
          options={objectStatusOptions}
          showInfoIcon
          tooltipText="The status of the asset. Alternative words: Objektstatus"
          defaultValue="Select the Object Status"
          register={register}
          errors={errors}
        />

        <SelectField
          label="Energy Class"
          name={`assets[${index}].energyClass`}
          options={energyClassOptions}
          showInfoIcon
          tooltipText="The Energy efficiency class. Only for Living. Alternative words: Energieeffizienzklasse, Energieausweis"
          defaultValue="Select the Energy Class"
          register={register}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mb-10">
        <InputField
          label="WALT"
          name={`assets[${index}].walt`}
          showInfoIcon
          tooltipText="The WALT for this asset in years. (e.g. 10.3)"
          register={register}
          errors={errors}
        />
        <InputField
          label="Min Tenant"
          name={`assets[${index}].mainTenant`}
          showInfoIcon
          tooltipText="The main tenant for this asset. Alternative words: Hauptmieter, Ankermieter, Mieter"
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};
