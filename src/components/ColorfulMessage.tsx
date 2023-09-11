import React from "react";

const ColorfulMessage = (props: any) => {
  console.log(props);
  const contentStyle = {
    color: props.coler,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{props.messeage}</p>;
};

export default ColorfulMessage;
