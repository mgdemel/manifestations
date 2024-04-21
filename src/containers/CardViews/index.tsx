import { Card } from "../../components";
import { CardViewNote } from "./CardViewNote";
import { CardViewToggle } from "./CardViewToggle";
type Props = {
  isToggle: boolean;
};

export const CardView = ({ isToggle }: Props) => {
  return (
    <Card styles="">{isToggle ? <CardViewToggle /> : <CardViewNote />}</Card>
  );
};
