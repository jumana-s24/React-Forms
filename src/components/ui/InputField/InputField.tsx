import React, { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import InfoIcon from "../InfoIcon/InfoIcon";

interface Props {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  showInfoIcon?: boolean;
  tooltipText?: string;
  symbol?: string;
  infoText?: string;
  className?: string;
  register: UseFormRegister<any>;
  errors: Record<string, any>;
}

export const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      name,
      type = "text",
      register,
      errors,
      required = false,
      showInfoIcon = false,
      tooltipText,
      symbol,
      infoText = "",
      className = "",
    },
    ref
  ) => {
    return (
      <div className={`${className} relative mr-4 mt-10 md:mt-0`}>
        <input
          {...register}
          type={type}
          id={name}
          ref={ref}
          className={`peer h-10 w-full border-b-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 ${
            errors[name] ? "border-red-500" : ""
          }`}
          placeholder={label}
        />
        <label
          htmlFor={name}
          className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all duration-200 
          peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300
          peer-focus:-top-3.5 peer-focus:text-xs"
        >
          {label}
        </label>
        <div className="absolute right-0 top-2">
          {showInfoIcon && tooltipText && (
            <InfoIcon tooltipText={tooltipText} />
          )}
        </div>
        <div
          className={`absolute top-2 ${showInfoIcon ? "right-6" : "right-2"}`}
        >
          {symbol}
        </div>

        <p className="text-left text-sm text-gray-400">{infoText}</p>

        {errors[name] && (
          <p className="text-red-500 text-xs mt-1">
            {errors[name]?.message as string}
          </p>
        )}
      </div>
    );
  }
);
