import { Children } from "../App/App.types";
import css from "./Grid.module.css";

const Grid: React.FC<Children> = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default Grid;
