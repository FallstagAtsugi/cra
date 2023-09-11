import React from "react";

const ColorfulMessage = (props: any) => {
  const { coler, messeage } = props;
  console.log(props);
  const contentStyle = {
    color: coler,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{messeage}</p>;
};

export default ColorfulMessage;
