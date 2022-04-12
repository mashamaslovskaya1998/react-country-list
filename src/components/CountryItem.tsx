import { Color, ICountry } from "../types";
import Badge from "./Badge";

const CountryItem = ({
  flag,
  name,
  capital,
  region,
  area,
  population,
}: ICountry) => {
  return (
    <li className=" d-flex list-group-item align-items-center">
      <img src={flag} className="col-2"></img>
      <span className=" px-5 col-2 ">{name}</span>
      <span className=" px-5 col-2 ">{capital}</span>
      <span className="px-5 col-2 ">{region}</span>
      <Badge type={"area"} color={Color.Primary} value={area}></Badge>
      <Badge type={"population"} color={Color.Info} value={population}></Badge>
    </li>
  );
};
export default CountryItem;
