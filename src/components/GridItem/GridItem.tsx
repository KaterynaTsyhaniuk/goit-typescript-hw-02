import { Children } from "../App/App.types";
import css from "./GridItem.module.css";

const GridItem: React.FC<Children> = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

export default GridItem;
