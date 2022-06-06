import React from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelColor?: string;
  id: string;
}

export default function Input({
  label,
  id,
  labelColor = "text-gray-800",
  ...props
}: Props) {
  return (
    <div className="flex flex-col">
      {label ? (
        <label htmlFor={id} className={`${labelColor} font-bold mb-1.5`}>
          {label}
        </label>
      ) : (
        <></>
      )}
      <input
        {...props}
        className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
      />
      <>{props.children}</>
    </div>
  );
}
