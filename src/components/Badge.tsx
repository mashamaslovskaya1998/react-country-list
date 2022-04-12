import { BadgeLabel, Color } from "../types";
interface IBadge {
  color: Color;
  type: BadgeLabel;
  value: Number;
}

const Badge = ({ type, color, value }: IBadge) => {
  return (
    <span className={`badge col py-2 mx-2 bg-${color}`}>
      {type}: {value}
    </span>
  );
};
export default Badge;
