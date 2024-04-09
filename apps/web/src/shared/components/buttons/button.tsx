import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

export enum ButtonStyleType {
  NONE = "",
  PRIMARY = "bg-slate-100 p-5 rounded-lg text-black",
}

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  styleType?: keyof typeof ButtonStyleType;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, styleType = "NONE", ...props }) => (
  <button className={twJoin(ButtonStyleType[styleType], className)} {...props}>
    {children}
  </button>
);
