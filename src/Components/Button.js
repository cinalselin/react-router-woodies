import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  return (
    <button>
      <Link to="/categories">{props.name}</Link>
    </button>
  );
};

export default Button;
