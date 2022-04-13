import { Color, ICountry } from "../types";
import Badge from "./Badge";

interface ICountryItem {
  country: ICountry;
}

const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: ICountryItem) => {
  return (
    <li className=" d-flex list-group-item align-items-center">
      <img src={flag} className="col-1"></img>
      <span className=" px-5 col-3 ">{name}</span>
      <span className=" px-5 col-2 ">{capital}</span>
      <span className="px-5 col-2 ">{region}</span>
      <Badge type={"area"} color={Color.Primary} value={area}></Badge>
      <Badge
        type={"population"}
        color={Color.Secondary}
        value={population}
      ></Badge>
    </li>
  );
};
export default CountryItem;
