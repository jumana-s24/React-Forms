import { UseFormRegister } from "react-hook-form";
import { InputField } from "../../ui/InputField/InputField";

interface Props {
  register: UseFormRegister<any>;
  errors: any;
}

export const OfferSection: React.FC<Props> = ({ register, errors }) => (
  <div className="bg-white rounded-md shadow-md border border-gray-100 p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10">
      <InputField
        label="Name of the offer (exposé headline)"
        name="offerName"
        register={register}
        errors={errors}
      />
      <div className="mt-2 md:mt-6 text-sm text-gray-500 text-left md:text-center">
        Please enter name only if there is no address in the PDF file
      </div>
    </div>
  </div>
);
