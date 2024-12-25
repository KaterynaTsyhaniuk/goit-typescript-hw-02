import { LoadMoreBtnProps } from "../App/App.types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={css.loadMoreBtn}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
