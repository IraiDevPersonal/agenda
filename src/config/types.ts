import { LucideProps } from "lucide-react";
import { AxiosError } from "axios";
import ROUTES from "./routes";

export type HTMLAttributes<T extends HTMLElement | unknown = HTMLElement> =
  React.HTMLAttributes<T>;
export type HTMLTags = keyof React.JSX.IntrinsicElements;
export type Paths = (typeof ROUTES)[keyof typeof ROUTES];
export type IconProps = LucideProps;
export type HttpError = AxiosError;

export type Option<
  TValue extends string | number = string,
  TObject extends object = Record<string, any>,
> = {
  label: string;
  value: TValue;
} & TObject;

export type DialogPropsHandler = {
  isOpen: boolean;
  onClose(): void;
};

export type SearchParamsAcceptedValue = number | string | boolean | undefined | null;

export type SelectKeyboardEventHandler = React.KeyboardEventHandler<HTMLSelectElement>;
export type SelectChangeEvHandler = React.ChangeEventHandler<HTMLSelectElement>;
export type InputKeyboardEventHandler = React.KeyboardEventHandler<HTMLInputElement>;
export type InputChangeEvHandler = React.ChangeEventHandler<HTMLInputElement>;
export type ButtonMouseEvHandler = React.MouseEventHandler<HTMLButtonElement>;
