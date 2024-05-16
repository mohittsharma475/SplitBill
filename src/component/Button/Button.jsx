import PropTypes from "prop-types";
import "./Button.css"; // Assuming you've named your CSS file Button.css

function Button({ children ,onClick}) {
  return <button onClick={onClick}className="button-small">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
};

export default Button;
