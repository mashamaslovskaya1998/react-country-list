export interface ICountry {
  name: string;
  capital: string[];
  population: number;
  flag: string;
  region: string;
  area: number;
}
export const enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}
export type BadgeLabel = "area" | "population";
