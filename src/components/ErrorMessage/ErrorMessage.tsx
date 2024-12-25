import { ErrorMessageProps } from "../App/App.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p>Something went wrong - {message}</p>;
};

export default ErrorMessage;
