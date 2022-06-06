import React from "react";
import Icon from "../atoms/Icons";

interface Props {
  title: string;
  value: string | number;
  porcent: number;
  icon: string;
  period: string;
  color: string;
  classDiv: string;
}

export default function CardStats({
  title,
  value,
  porcent,
  icon,
  period,
  color,
  classDiv = "",
}: Props) {
  return (
    <>
      <div
        className={`relative flex flex-col min-w-content break-words bg-white rounded mb-6 xl:mb-0 shadow-lg ${classDiv}`}
      >
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-gray-400 uppercase font-bold text-xs">
                {title}
              </h5>
              <span className="font-semibold text-xl text-gray-700">
                {value}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${color}`}
              >
                <Icon iconName={icon} />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            <span
              className={`${
                porcent >= 0 ? "text-green-600" : "text-red-600"
              } mr-2`}
            >
              {porcent}%
            </span>
            <span className="whitespace-nowrap">{period}</span>
          </p>
        </div>
      </div>
    </>
  );
}
