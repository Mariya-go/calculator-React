import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ text, style, buttonHandler }) => {
  return (
    <button className={style} onClick={buttonHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.string,
  buttonHandler: PropTypes.func.isRequired,
};

export default Button;
