import { ButtonHTMLAttributes, ReactNode } from "react";
import Icon from "../atoms/Icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading: boolean;
  icon?: string;
  color?: string;
  bg?: string;
}

export default function MyInput({
  text,
  loading,
  icon,
  color = "white",
  bg = "sky",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-${color} bg-${bg}-600 hover:bg-${bg}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bg}-500 disabled:cursor-not-allowed disabled:bg-gray-600`}
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        {icon ? <Icon iconName={icon} /> : ""}
      </span>
      {loading ? (
        <div>
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-5 h-5 border-4 border-gray-100 border-solid rounded-full animate-spin"
          ></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
}
