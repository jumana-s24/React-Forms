import React from "react";
import { UseFormRegister } from "react-hook-form";
import InfoIcon from "../InfoIcon/InfoIcon";

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  required?: boolean;
  showInfoIcon?: boolean;
  tooltipText?: string;
  className?: string;
  register: UseFormRegister<any>;
  errors: any;
}
export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  register,
  errors,
  required = false,
  showInfoIcon = false,
  tooltipText,
  defaultValue = "",
  className = "",
}) => {
  return (
    <div className={`${className} relative mr-4 mt-10 md:mt-0`}>
      <div className="relative w-full">
        <div className="relative">
          <select
            {...register(name)}
            id={name}
            className={`peer h-10 w-full border-b-2 border-gray-100 bg-white text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 pr-12 appearance-none ${
              errors[name] ? "border-red-500" : ""
            }`}
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" width="16px" height="16px"><path d="M7 10l5 5 5-5z"></path></svg>')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: showInfoIcon
                ? "right 20px center"
                : "right 0px center",
              backgroundSize: "30px 30px",
            }}
          >
            <option value="">{defaultValue}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {showInfoIcon && tooltipText && (
            <div
              className="absolute top-1/2 right-0 -translate-y-1/2 z-10"
              style={{ pointerEvents: "auto" }}
            >
              <InfoIcon tooltipText={tooltipText} />
            </div>
          )}
        </div>
      </div>

      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all duration-200 
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400
        peer-focus:-top-3.5 peer-focus:text-xs"
      >
        {label}
      </label>

      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
