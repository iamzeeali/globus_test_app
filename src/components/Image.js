import React from "react";

const Image = (props) => {
  return (
    <div>
      <img src={props.source} width='500px' height='300px' />
    </div>
  );
};

export default Image;
