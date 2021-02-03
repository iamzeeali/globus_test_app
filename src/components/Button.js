import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
      <Link to={props.link} className='btn btn-primary btn-lg p-5'>
        {props.title}
      </Link>
    </div>
  );
};

export default Button;
